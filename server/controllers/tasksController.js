const { join } = require('path');
const ApiError = require('../error/ApiError'); 
const { Tasks } = require('../models/models');
const fs = require('fs').promises;

class TasksController {
    async getTaskList(req, res, next) { //Функция для получения всех заданий
        const tasks = await Tasks.findAll({order: [
            ['id', 'DESC']
        ]}) //Получем из бд все задания
        return res.json(tasks)
    }

    async getTaskByGroup(req, res, next) { //Функция для получения задания для одной группы
        try {
            const group_id = req.params.group_id //Получаем id через параметры запроса /tasks/:id -> :id - параметр запроса
            const tasks = await Tasks.findAll({ where: {group_id: group_id} }) //Ищем в бд все задания для группы с id - group_id
            return res.json(tasks)
        } catch (e) {
            next(ApiError.badRequest(e.message)) //В случае ошибки выводим ошибку
        }
    }

    async createTask(req, res, next) { //Функция для создани нового задания
        try {
            const {group_id, description, inputs, outputs} = req.body //Получаем параметры из тела запроса 
            
            const tasks = await Tasks.create({group_id, description, inputs, outputs}) //Создаем запись в бд с полученными параметрами
            return res.json(tasks)
        
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
     }

     async updateTask(req, res, next) { //Функция для обновления существующей записи в бд
        try {
            const id = req.params.id //Получаем id через параметры запроса 
            const {group_id, description, inputs, outputs} = req.body //Получаем параметры через тело запроса (параметры, которые мы передадим в функцию в клиенте)
            const tasks = await Tasks.update({group_id, description, inputs, outputs}, {where: {id: id}}) //Обновляем запись(не всю, а только поля grade и comment) под определенным id
            return res.json(tasks)
        
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async destroyTask(req, res, next) {
        try {
            const id = req.params.id
            const tasks = await Tasks.destroy({where: {id: id}})
            return res.json(tasks)
    
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
 
}
module.exports = new TasksController()