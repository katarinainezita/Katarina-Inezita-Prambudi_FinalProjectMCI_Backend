const cartService = require('../services/cartService');

const getAllCarts = async(req, res) => {
    cartService.getAllCarts()
    .then(Carts => {

        if(!Carts){
            res.status(404).send({
                status : 'error',
                message : 'Data cart tidak ditemukan',
                data : {}
            });
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data cart berhasil ditemukan',
                data: Carts
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

const getCartByIdUser = async(req, res) => {
    const user_id = req.params.user_id;
    cartService.getCartByIdUSer(user_id)
    .then(Carts => {
        if (!Carts) {
            req.status(404).send({
                status: 'error',
                message: 'Data cart tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data cart berhasil ditemukan',
                data: Carts
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

const getCartByIdProduct = async(req, res) => {
    const product_id = req.params.product_id;
    cartService.getPaymentByIdProduct(product_id)
    .then(Carts => {
        if (!Carts) {
            req.status(404).send({
                status: 'error',
                message: 'Data cart tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data cart berhasil ditemukan',
                data: Carts
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

const createCart = async(req, res) => {
    console.log(req.body);
    const cartData = {
        user_id : req.body.user_id,
        product_id : req.body.product_id,
        quantity : req.body.quantity
    }
    cartService.createCart(cartData)
    .then(Carts => {
        res.status(200).send({
            status: 'success',
            message: 'Data cart berhasil ditambahkan',
            data: Carts
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

const updateCart = (req, res) => {
    const user_id = req.params.user_id;
    const cartData = req.body;

    if(!user_id){
        return res.status(400).send({
            status: 'error',
            message: 'Id User tidak ditemukan',
            data : {}
        });
    }

    cartService.updateCart(user_id, cartData)
    .then(Carts => {
        res.status(200).send({
            status: 'success',
            message: 'Data cart berhasil diupdate',
            data: Carts
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

const deleteCart = (req, res) => {
    const user_id = req.params.user_id;

    if(!user_id){
        return res.status(400).send({
            status : 'error',
            message : 'Id User tidak ditemukan',
            data : {}
        });
    }

    cartService.deleteCart(user_id)
    .then(Carts => {
        res.status(200).send({
            status: 'success',
            message: 'Data cart berhasil dihapus',
            data: Carts
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
    getAllCarts,
    getCartByIdProduct,
    getCartByIdUser,
    createCart,
    updateCart,
    deleteCart
}
