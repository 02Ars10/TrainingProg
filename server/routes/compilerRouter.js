const Router = require('express');
const router = new Router();
const compilerController = require('../controllers/CompilerController');

router.post('/compile', compilerController.compile)

module.exports = router;
