const Router = require('express');
const router = new Router();
const adminController = require('../controllers/adminController');
const authMiddleware = require('../middleware/authMiddleware');
const ifRole = require('../middleware/ifRole');

router.post('/registration', adminController.registration);



module.exports = router;
