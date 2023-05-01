const Router = require('express');
const router = new Router();
const groupsController = require('../controllers/groupsController');
const authMiddleware = require('../middleware/authMiddleware');
const ifRole = require('../middleware/ifRole');

router.get('/all', groupsController.getGroups);
router.post('/add', groupsController.addGroup);
router.post('/:user/:group', groupsController.setGroup);



module.exports = router;
