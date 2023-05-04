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
        type: Sequelize.DataTypes.DATE,
        field: 'createdat',
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        field: 'updatedat'
      },
})

const Role = sequelize.define('roles', 
{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    role_name: {type:  DataTypes.STRING(1024), defaultValue: 'USER'}, // USER ADMIN TEACHER
    createdAt: {
        type: Sequelize.DataTypes.DATE,
        field: 'createdat',
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        field: 'updatedat'
      },
})

const Group = sequelize.define('groups', 
{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type:  DataTypes.STRING, unique:true},
    createdAt: {
        type: Sequelize.DataTypes.DATE,
        field: 'createdat',
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
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
        type: Sequelize.DataTypes.DATE,
        field: 'createdat',
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
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
        type: Sequelize.DataTypes.DATE,
        field: 'createdat',
      },
      updatedAt: {
        type: Sequelize.DataTypes.DATE,
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
User.hasOne(Role, {foreignKey: 'role_id'});
User.hasOne(Group, {foreignKey: 'group_id'});
User.hasMany(Solutions, {foreignKey: 'student_id'});

Role.belongsTo(User, {foreignKey: 'user_id'});

Group.belongsTo(User, {foreignKey: 'group_id'})
Group.hasMany(Tasks, {foreignKey: 'group_id'});

Solutions.belongsTo(Tasks, {foreignKey: 'task_id'});
Solutions.belongsTo(User, {foreignKey: 'student_id'});

Tasks.belongsTo(Group, {foreignKey: 'group_id'});
Tasks.hasMany(Solutions, {foreignKey: 'task_id', onDelete: 'cascade', onUpdate: 'cascade'});

Role.sync();
User.sync();
module.exports = {
    User,
    Role,
    Group,
    Tasks,
    Solutions
}