const router = require('express').Router();
const cartController = require('../controllers/cartController');

router.get('/', cartController.getAllCarts);
router.get('/:product_id', cartController.getCartByIdProduct);
router.get('/:user_id', cartController.getCartByIdUser);
router.post('/', cartController.createCart);
router.put('/:user_id', cartController.updateCart);
router.delete('/:user_id', cartController.deleteCart);

module.exports = router