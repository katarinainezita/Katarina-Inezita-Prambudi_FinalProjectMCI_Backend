const router = require('express').Router();
const paymentController = require('../controllers/paymentController');

router.get('/', paymentController.getAllPayments);
router.get('/:order_id', paymentController.getPaymentByIdOrder);
router.post('/', paymentController.createPayment);
router.put('/:order_id', paymentController.updatePayment);
router.delete('/:order_id', paymentController.deletePayment);

module.exports = router