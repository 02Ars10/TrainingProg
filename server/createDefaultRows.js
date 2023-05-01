require('dotenv').config()
const bcrypt = require('bcrypt');
const { User, Role } = require('./models/models');
const sequelize = require('./db');
const roles = require('./enums/roles_ids');

const email = 'admin';
const password = 'admin';

console.info(email);
console.info(password);

(async () => {

    //Create admin account
    if (!email || !password) {
        console.log('Некорренктный email или password');
    } else {
        console.log('authenticate');
        await sequelize.authenticate()
        console.log('sync');
        await sequelize.sync()
        const candidate = await User.findOne({ where: { email } }).catch(() => { });
        if (candidate) {
            console.log('Пользователь с таким email уже существует')
        } else {
            const hashPassword = await bcrypt.hash(password, 5);
            User.create({ email, password: hashPassword, role_id: roles.ADMIN }).then(console.log);
        }
    }

    //Create roles

    Role.create({ id: roles.ADMIN, role_name: 'ADMIN' }).then(console.log).catch(console.log);
    Role.create({ id: roles.USER, role_name: 'USER' }).then(console.log).catch(console.log);
    Role.create({ id: roles.TEACHER, role_name: 'TEACHER' }).then(console.log).catch(console.log);
})()
