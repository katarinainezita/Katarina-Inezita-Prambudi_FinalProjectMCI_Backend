const { Sequelize } = require('../models');
const frontendService = require('../services/frontendService');
const cartService = require('../services/cartService')
const Op = Sequelize.Op;

const getProductHome = async(req, res) => {
    frontendService.getProductHome(8)
    .then(Products => {

        if(!Products){
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

const getProductPage = async(req, res) => {
    let keyword = '';
    const condition = [];
    if(req.query.keyword){
        keyword = req.query.keyword;
        condition.push({name: {[Op.like] : '%' + keyword + '%'}})
    }
    frontendService.productPage(condition)
    .then(Products => {
        if (!Products) {
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


const getProductDetail = async(req, res) => {
    const product_id = req.params.product_id;
    frontendService.getProductDetail(product_id)
    .then(Products => {
        if (!Products) {
            req.status(404).send({
                status: 'error',
                message: 'Data cart tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data cart berhasil ditemukan',
                data: Products
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
    const checkCart = cartService.getCartByIdUser(user_id)

    if(!user_id){
        return res.status(400).send({
            status: 'error',
            message: 'Id User tidak ditemukan',
            data : {}
        });
    }

    if(checkCart.length > 0){
        
        const cartData = {
            user_id : req.body.user_id,
            product_id : req.body.product_id,
            quantity : req.body.quantity + 1
        }

        cartService.updateCart(checkCart.user_id, cartData)
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
    }else{
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
    getProductHome,
    getProductPage,
    getProductDetail,
    getCartByIdUser,
    createCart,
    updateCart,
    deleteCart
}
