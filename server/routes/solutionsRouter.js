const Router = require('express');
const router = new Router();
const solutionsController = require('../controllers/solutionsController');
const authMiddleware = require('../middleware/authMiddleware')

router.get('/byUser/:student_id',  solutionsController.getSolutionByUser);
router.post('/create', solutionsController.createSolution);
router.post('/update/:id', solutionsController.updateSolution)

module.exports = router;
