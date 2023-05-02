const sequelize = require('../db')
const {QueryTypes } = require('sequelize');

const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {User, Role} = require('../models/models') 
const roles = require('../enums/roles_ids')

const generateJwt = (id, email, role, group) => {
  console.log(id, email, role)
    return jwt.sign({ id, email, role, group}, process.env.SECRET_KEY, {
      expiresIn: '24h',
    });
  };
class UserController {
    async registration(req, res, next) { //Регистрация пользователя
        const { email, password } = req.body;

        if (!email || !password) {
          return next(ApiError.badRequest('Некорренктный email или password'));
        }
    
        const candidate = await User.findOne({ where: { email } }).catch(()=>{}); //Проверка, занят ли email
        if (candidate) {
          return next(
            ApiError.badRequest('Пользователь с таким email уже существует')
          );
        }
        const hashPassword = await bcrypt.hash(password, 5); //Шифрование пароля
        
        console.info('dxxxxxxxzxzzx');
        const user = await User.create({ email, password: hashPassword }); //Создание пользователя
        const token = generateJwt(user.id, user.email, "USER"); //Шифрование его данных
        return res.json({ token, role: "USER"});
      }
    
      async login(req, res, next) { //Авторизация
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } }).catch(()=>{}); //Поиск пользователя по email
        let role;
        try {
          role = await Role.findOne({where:{id: user.dataValues.role_id}}) //Поиск роли пользователя
          
        } catch (error) {
          res.json({message:"Неправильно указан логин или пароль"})
          return
        }
        role = role.dataValues
        if (!user) {
          return next(ApiError.internal('Пользователь не найден'));
        }
        let comparePassword = bcrypt.compareSync(password, user.password); //Сравнение введенного пароля с зашифрованным при регистрации
        if (!comparePassword) {
          return next(ApiError.internal('Указан неверный пароль'));
        }
        const token = generateJwt(user.dataValues.id, user.dataValues.email, role.role_name, user.group_id); //Шифрование данных пользователя
        console.log(token)
        res.cookie('authorization', token) //Запись токена в куки
        console.log(role)
        return res.json({ token, role: role.role_name });
      }
    
      async check(req, res, next) {
        try {
          const { email } = req.body;
          const user = await User.findOne({ where: { email } }).catch(()=>{});
          const role = await Role.findOne({where:{id: user.dataValues.role_id}})
          const token = generateJwt(req.user.id, req.user.email, role.role_name);
          return res.json({ token });
        } catch (error) {
          return res.json({ error });
          
        }

      }
      async get_user_by_id(req, res, next) { //Функция для получения решения по student_id
        try {
            const user_id = req.params.user_id //Получаем id через параметры запроса 
            const users = await sequelize.query(
  `SELECT 
      * 
      ,(select avg(grade) from solutions where student_id = "user".id) as avg_grade
    FROM 
      "user"
    WHERE 
      "user".id = :user_id 
  `,
  {
    replacements: { user_id: user_id },
    type: QueryTypes.SELECT
  }
);

            return res.json(users) //В ответе вернуть результат запроса
        } catch (e) {
            next(ApiError.badRequest(e.message)) //В случае ошибки выводим эту ошибку
        }
    }
      async getAll(req, res, next) { 
    
        const users = await User.findAll({ where: { role_id:  roles.USER} }, {order: [
          ['id', 'DESC']
      ]},).catch(()=>{});

        console.info('dxxxxxxxzxzzx');

        return res.json({ users });
      }

     
      async getByGroup(req, res, next) { //Функция для поиска пользователя по его group_id
        const group_id = req.params.group_id //Получаем id через параметры запроса
      //   const users = await User.findAll({ where: { group_id: group_id } }, {order: [ //Sql запрос в базе данных 'найти всех пользователей у которых нужный нам group_id остортировать по id'
      //     ['id', 'DESC']
      // ]},).catch(()=>{});
      const users = await sequelize.query(
        `SELECT 
            * 
            ,(select round(avg(grade),2) from solutions where student_id = "users".id) as avg_grade
          FROM 
            "users" 
          WHERE 
            group_id = :group_id 
          order by 
            "users".email desc
        `,
        {
          replacements: { group_id: group_id },
          type: QueryTypes.SELECT
        }
      );

        console.info('dxxxxxxxzxzzx');

        return res.json({ users });
      }
}
module.exports = new UserController()