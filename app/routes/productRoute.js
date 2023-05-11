const router = require('express').Router();
const productController = require('../controllers/productController');

router.get('/', productController.getAllProducts);
router.get('/:category_id', productController.getProductByIdCategory);
router.get('/:seller_id', productController.getProductByIdSeller);
router.post('/', productController.createProduct);
router.put('/:seller_id', productController.updateProduct);
router.delete('/:seller_id', productController.deleteProduct);

module.exports = router