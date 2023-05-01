require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const router=require('./routes/index')
const bodyParser = require("body-parser")
const models = require('./models/models')
const cors = require('cors')
const http = require("http");
const { Server } = require("socket.io");
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const { addUser, findUser, getRoomUsers, removeUser } = require("./users");
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000
const app = express();

app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())  //https://www.npmjs.com/package/body-parser

app.use((req, res, next) => {
    // console.log(req.originalUrl)
    next()
})

app.use(router)
//Обработка ошибок, последний middleware
app.use(errorHandler)
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });
  
  io.on("connection", (socket) => {
    socket.on("join", ({ name, room }) => {
      socket.join(room); 
  
      const { user, isExist } = addUser({ name, room });
  
      const userMessage = isExist
        ? `${user.name}, снова тут`
        : `Добро пожаловать в чат ${user.name}`;
  
      socket.emit("message", {
        data: { user: { name: "Admin" }, message: userMessage },
      });
  
      socket.broadcast.to(user.room).emit("message", {
        data: { user: { name: "Admin" }, message: `${user.name} has joined in this room` },
      });
  
      io.to(user.room).emit("room", {
        data: { users: getRoomUsers(user.room) },
      });
    });
  
    socket.on("sendMessage", ({ message, params }) => {
      const user = findUser(params);
  
      if (user) {
        io.to(user.room).emit("message", { data: { user, message } });
      }
    });
  
    socket.on("leftRoom", ({ params }) => {
      const user = removeUser(params);
  
      if (user) {
        const { room, name } = user;
  
        io.to(room).emit("message", {
          data: { user: { name: "Admin" }, message: `${name} has left this room` },
        });
  
        io.to(room).emit("room", {
          data: { users: getRoomUsers(room) },
        });
      }
    });
  
    io.on("disconnect", () => {
      console.log("Disconnect");
    });
  });
const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        server.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
try {
  start()
} catch (error) {
  console.error(error.message)
  start()
}
