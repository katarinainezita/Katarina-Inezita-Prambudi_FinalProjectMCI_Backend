const router = require('express').Router();
const reviewController = require('../controllers/reviewController');

router.get('/', reviewController.getAllReviews);
router.get('/:product_id', reviewController.getReviewByIdProduct);
router.get('/:user_id', reviewController.getReviewByIdUser);
router.post('/', reviewController.createReview);
router.put('/:user_id', reviewController.updateReview);
router.delete('/:user_id', reviewController.deleteReview);

module.exports = router