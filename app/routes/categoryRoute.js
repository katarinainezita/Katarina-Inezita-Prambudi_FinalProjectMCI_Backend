const router = require('express').Router();
const categoryController = require('../controllers/categoryController');

router.get('/', categoryController.getAllCategories);
router.get('/:name', categoryController.getCategoryByName);
router.post('/', categoryController.createCategory);
router.put('/:name', categoryController.updateCategory);
router.delete('/:name', categoryController.deleteCategory);

module.exports = router