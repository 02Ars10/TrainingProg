const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {User} = require('../models/models'); 
const roles = require('../enums/roles_ids');

const generateJwt = (id, email, role) => { //Генерирует jwt токен для шифрования id, email, role
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
      expiresIn: '24h',
    });
  };
class adminControler { //Функционал админа
    async registration(req, res, next) { //Регистрация учителя
        const { email, password } = req.body;
        console.info(email);
        console.info(password);
       
        if (!email || !password) {
          return next(ApiError.badRequest('Некорренктный email или password'));
        }
    
        const candidate = await User.findOne({ where: { email } }).catch(()=>{});
        if (candidate) {
          return next(
            ApiError.badRequest('Пользователь с таким email уже существует')
          );
        }
        const hashPassword = await bcrypt.hash(password, 5);
        
        console.info('dxxxxxxxzxzzx');
        const user = await User.create({ email, password: hashPassword, role_id: roles.TEACHER });
        const token = generateJwt(user.id, user.email, user.role);
        return res.json({ email, message:"123" });
      }
    
}
module.exports = new adminControler()