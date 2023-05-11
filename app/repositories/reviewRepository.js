const { Review } = require('../models')

const getAllReviews = () => {
    return Review.findAll(
        {
            attributes: ['user_id', 'product_id', 'rating', 'comment']
        }
    )
}

const getReviewByIdUser = (user_id) => {
    return Review.findOne(
        {
            where: {
                user_id: user_id
            }
        }
    )
}

const getReviewByIdProduct = (product_id) => {
    return Review.findOne(
        {
            where: {
                product_id: product_id
            }
        }
    )
}

const createReview = (reviewData) => {
    return Review.create(reviewData)
}

const updateReview = (user_id, reviewData) => {
    return Review.update(reviewData, {
        where: {
            user_id: user_id
        }
    })
}

const deleteReview = (user_id) => {
    return Review.destroy({
        where: {
            user_id: user_id
        }
    })
}

module.exports = {
    getAllReviews,
    getReviewByIdUser,
    getReviewByIdProduct,
    createReview,
    updateReview,
    deleteReview
}