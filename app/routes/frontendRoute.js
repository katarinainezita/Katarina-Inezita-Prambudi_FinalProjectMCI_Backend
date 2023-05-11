const router = require('express').Router();
const frontendController = require('../controllers/frontendController');

router.get('/productHome', frontendController.getProductHome);
router.get('/productPage', frontendController.getProductPage);
router.get('/productDetail/:product_id', frontendController.getProductDetail);

// handle Cart
router.get('/cart', frontendController.getCartByIdUser);



module.exports = router