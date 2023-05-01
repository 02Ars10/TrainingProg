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
class groupsControler {
    async getUsers(req, res, next) {
    
     
        const users = await User.findAll({ where: { roleID:  roles.USER} }).catch(()=>{});

        return res.json({ users });
      }
      async getGroups(req, res, next) {
    
     
        const groups = await Group.findAll({}).catch(()=>{});

        return res.json({ groups: groups });
    }

    async addGroup(req, res, next) {
    
      const result = await Group.create({
        name: req.body.name
      });
      return res.json(result);
  }
  async setGroup(req, res, next) {
    const userId = req.params.user
    const groupId = req.params.group
    console.log(userId)
    const result = await User.update({
      group_id: groupId
    },
    { where: { id: userId } });
    return res.json(result);
}
}
module.exports = new groupsControler()