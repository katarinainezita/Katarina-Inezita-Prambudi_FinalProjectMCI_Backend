const reviewService = require('../services/reviewService');

const getAllReviews = async(req, res) => {
    reviewService.getAllReviews()
    .then(Reviews => {

        if(!Reviews){
            res.status(404).send({
                status : 'error',
                message : 'Data review tidak ditemukan',
                data : {}
            });
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data review berhasil ditemukan',
                data: Reviews
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
    })
}

const getReviewByIdUser = async(req, res) => {
    const user_id = req.params.user_id;
    reviewService.getReviewByIdUser(user_id)
    .then(Reviews => {
        if (!Reviews) {
            req.status(404).send({
                status: 'error',
                message: 'Data review tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data review berhasil ditemukan',
                data: Reviews
            });
        }
        
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
    })
}

const getReviewByIdProduct = async(req, res) => {
    const product_id = req.params.product_id;
    reviewService.getReviewByIdProduct(product_id)
    .then(Reviews => {
        if (!Reviews) {
            req.status(404).send({
                status: 'error',
                message: 'Data review tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data review berhasil ditemukan',
                data: Reviews
            });
        }
        
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
    })
}

const createReview = async(req, res) => {
    console.log(req.body);
    const reviewData = {
        user_id : req.body.user_id,
        product_id : req.body.product_id,
        rating : req.body.rating,
        comment : req.body.comment
    }
    reviewService.createReview(reviewData)
    .then(Reviews => {
        res.status(200).send({
            status: 'success',
            message: 'Data review berhasil ditambahkan',
            data: Reviews
        });
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
    })
}

const updateReview = (req, res) => {
    const user_id = req.params.user_id;
    const reviewData = req.body;

    if(!user_id){
        return res.status(400).send({
            status: 'error',
            message: 'Id User tidak ditemukan',
            data : {}
        });
    }

    reviewService.updateReview(user_id, reviewData)
    .then(Reviews => {
        res.status(200).send({
            status: 'success',
            message: 'Data review berhasil diupdate',
            data: Reviews
        });
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
    })
}

const deleteReview = (req, res) => {
    const user_id = req.params.user_id;

    if(!user_id){
        return res.status(400).send({
            status : 'error',
            message : 'Id User tidak ditemukan',
            data : {}
        });
    }

    reviewService.deleteReview(user_id)
    .then(Reviews => {
        res.status(200).send({
            status: 'success',
            message: 'Data review berhasil dihapus',
            data: Reviews
        });
    })
    .catch(err => {
        res.status(500).send({
            status: 'error',
            message: err.message,
            data: {}
        });
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
