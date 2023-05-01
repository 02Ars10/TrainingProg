const Router = require('express');
const router = new Router();
const tasksController = require('../controllers/tasksController');
const authMiddleware = require('../middleware/authMiddleware')
const ifRole = require('../middleware/ifRole')

router.get('/all', ifRole("TEACHER"), tasksController.getTaskList);
router.get('/byGroup/:group_id',  tasksController.getTaskByGroup);
router.post('/create', ifRole("TEACHER"), tasksController.createTask);
router.post('/update/:id', ifRole("TEACHER"), tasksController.updateTask);
router.post('/destroy/:id', ifRole("TEACHER"), tasksController.destroyTask)

module.exports = router;
