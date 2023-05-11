const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.get('/', orderController.getAllOrders);
router.get('/:user_id', orderController.getOrderByIdUser);
router.get('/:product_id', orderController.getOrderByIdProduct);
router.post('/', orderController.createOrder);
router.put('/:user_id', orderController.updateOrder);
router.delete('/:user_id', orderController.deleteOrder);

module.exports = router