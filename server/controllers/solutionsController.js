const ApiError = require('../error/ApiError') 
const { Solutions } = require('../models/models');

class SolutionsController {
    async getSolutionByUser(req, res, next) { //Функция для получения решения по student_id
        try {
            const student_id = req.params.student_id //Получаем id через параметры запроса 
            const solutions = await Solutions.findAll({ where: {student_id: student_id} }, {order: [['task_id']]}) //sql запрос в бд 'найти все решения пользователя под нужным id, отсортировать по task_id'
            return res.json(solutions) //В ответе вернуть результат запроса
        } catch (e) {
            next(ApiError.badRequest(e.message)) //В случае ошибки выводим эту ошибку
        }
    }

    async createSolution(req, res, next) { //Функция для создания нового решения
        try {
            const {task_id, student_id, tcode, input, output, errors, grade, comment} = req.body //Получаем параметры через тело запроса (параметры, которые мы передадим в функцию в клиенте)
            const solutions = await Solutions.create({task_id, student_id, tcode, input, output, errors, grade, comment}) //Создаем запись в бд с полученными параметрами
            return res.json(solutions)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
     }

     async updateSolution(req, res, next) { //Функция для обновления существующей записи в бд
        try {
            const id = req.params.id //Получаем id через параметры запроса 
            const {grade, comment} = req.body //Получаем параметры через тело запроса (параметры, которые мы передадим в функцию в клиенте)
            const solutions = await Solutions.update({grade: grade, comment: comment}, {where: {id: id}}) //Обновляем запись(не всю, а только поля grade и comment) под определенным id
            return res.json(solutions)
        
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}
module.exports = new SolutionsController()