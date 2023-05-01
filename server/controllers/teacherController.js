const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const {User, Group} = require('../models/models'); 
const roles = require('../enums/roles_ids')


const generateJwt = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.SECRET_KEY, {
      expiresIn: '24h',
    });
  };
class adminControler {
    async getUsers(req, res, next) { //Получение всех учеников
    
     
        const users = await User.findAll({ where: { roleID:  roles.USER} }).catch(()=>{});

        console.info('dxxxxxxxzxzzx');

        return res.json({ users });
      }
      async getGroups(req, res, next) { //Получение всех групп
    
     
        const groups = await Group.findAll({}).catch(()=>{});

        return res.json({ users: groups });
    }

}
module.exports = new adminControler()