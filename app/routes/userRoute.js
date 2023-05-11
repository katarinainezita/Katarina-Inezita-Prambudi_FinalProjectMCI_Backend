const router = require('express').Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:name', userController.getUserByName);
router.post('/', userController.createUser);
router.put('/:user_id', userController.updateUser);
router.delete('/:user_id', userController.deleteUser);

module.exports = router