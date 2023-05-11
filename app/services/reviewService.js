const reviewRepository = require('../repositories/reviewRepository');

const getAllReviews = async () => {
    try {
      const reviews = await reviewRepository.getAllReviews();
      return reviews;
    } catch (err) {
      throw err;
    }
  }

const getReviewByIdUser = async (user_id) => {
  try {
    const review = await reviewRepository.getReviewByIdUser(user_id);
    return review;
  } catch (err) {
    throw err;
  }
}

const getReviewByIdProduct = async (product_id) => {
    try {
      const review = await reviewRepository.getReviewByIdProduct(product_id);
      return review;
    } catch (err) {
      throw err;
    }
  }

const createReview = async (reviewData) => {
    try {
      const review = await reviewRepository.createReview(reviewData);
      return review;
    } catch (err) {
      throw err;
    }
}

const updateReview = async (user_id, reviewData) => {
    try {
      const review = await reviewRepository.updateReview(user_id, reviewData);
      return review;
    } catch (err) {
      throw err;
    }
}

const deleteReview = async (user_id) => {
    try {
      const review = await reviewRepository.deleteReview(user_id);
      return review;
    } catch (err) {
      throw err;
    }
}

module.exports = {
  getAllReviews,
  getReviewByIdUser,
  getReviewByIdProduct,
  createReview,
  updateReview,
  deleteReview
}