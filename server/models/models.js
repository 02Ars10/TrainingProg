const sequelize = require('../db')
const {DataTypes, Sequelize} = require('sequelize');
const roles = require('../enums/roles_ids');

const User = sequelize.define('user', 
{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role_id: {type:  DataTypes.INTEGER, defaultValue: roles.USER}, // USER ADMIN TEACHER
    group_id:{type: DataTypes.INTEGER },
    createdAt: {
        type: Sequelize.DATEONLY,
        field: 'createdat',
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        field: 'updatedat'
      },
})

const Role = sequelize.define('roles', 
{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    role_name: {type:  DataTypes.STRING, defaultValue: 'USER'}, // USER ADMIN TEACHER
    createdAt: {
        type: Sequelize.DATEONLY,
        field: 'createdat',
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        field: 'updatedat'
      },
})
const Group = sequelize.define('groups', 
{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type:  DataTypes.STRING, unique:true},
    createdAt: {
        type: Sequelize.DATEONLY,
        field: 'createdat',
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        field: 'updatedat'
      },
})

const Tasks = sequelize.define('tasks', 
{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}, 
    group_id: {type: DataTypes.INTEGER},
    description: {type: DataTypes.TEXT},
    inputs: {type: DataTypes.ARRAY(DataTypes.TEXT)}, // [[1, 2, 2], [abc]]
    outputs: {type: DataTypes.ARRAY(DataTypes.TEXT)},// [[2, 4, 4], [aabbcc]]
    createdAt: {
        type: Sequelize.DATEONLY,
        field: 'createdat',
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        field: 'updatedat'
      },
})

const Solutions = sequelize.define('solutions', 
{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    task_id: {type: DataTypes.INTEGER },
    student_id: {type: DataTypes.INTEGER },
    tcode: {type: DataTypes.TEXT },
    input: {type: DataTypes.TEXT},
    output: {type: DataTypes.TEXT},
    errors: {type: DataTypes.ARRAY(DataTypes.INTEGER)},
    grade: {type: DataTypes.INTEGER },
    comment: {type: DataTypes.TEXT},
    createdAt: {
        type: Sequelize.DATEONLY,
        field: 'createdat',
      },
      updatedAt: {
        type: Sequelize.DATEONLY,
        field: 'updatedat'
      },
})
/*
User.hasMany(Solutions);
Solutions.belongsTo(User);
User.hasOne(Role);
Role.belongsTo(User);
User.hasOne(Group);
Group.belongsTo(User)
Group.hasMany(Tasks);
Tasks.belongsTo(Group);
Tasks.hasMany(Solutions);
Solutions.belongsTo(Tasks);
*/

User.sync();
Role.sync();
module.exports = {
    User,
    Role,
    Group,
    Tasks,
    Solutions
}