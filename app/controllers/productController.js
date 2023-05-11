const productService = require('../services/productService');

const getAllProducts = async(req, res) => {
    productService.getAllProducts()
    .then(Products => {

        if(!Products){
            res.status(404).send({
                status : 'error',
                message : 'Data product tidak ditemukan',
                data : {}
            });
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data product berhasil ditemukan',
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

const getProductByIdCategory = async(req, res) => {
    const category_id = req.params.category_id;
    productService.getProductByIdCategory(category_id)
    .then(Products => {
        if (!Products) {
            req.status(404).send({
                status: 'error',
                message: 'Data product tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data product berhasil ditemukan',
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

const getProductByIdSeller = async(req, res) => {
    const seller_id = req.params.seller_id;
    productService.getProductByIdSeller(seller_id)
    .then(Products => {
        if (!Products) {
            req.status(404).send({
                status: 'error',
                message: 'Data product tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data product berhasil ditemukan',
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

const createProduct = async(req, res) => {
    console.log(req.body);
    const productData = {
        name : req.body.name,
        description : req.body.description,
        price : req.body.price,
        category_id : req.body.category_id,
        seller_id : req.body.seller_id 
    }
    productService.createProduct(productData)
    .then(Products => {
        res.status(200).send({
            status: 'success',
            message: 'Data product berhasil ditambahkan',
            data: Products
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

const updateProduct = (req, res) => {
    const seller_id = req.params.seller_id;
    const productData = req.body;

    if(!seller_id){
        return res.status(400).send({
            status: 'error',
            message: 'Id User tidak ditemukan',
            data : {}
        });
    }

    productService.updateProduct(seller_id, productData)
    .then(Products => {
        res.status(200).send({
            status: 'success',
            message: 'Data product berhasil diupdate',
            data: Products
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

const deleteProduct = (req, res) => {
    const seller_id = req.params.seller_id;

    if(!seller_id){
        return res.status(400).send({
            status : 'error',
            message : 'Id User tidak ditemukan',
            data : {}
        });
    }

    productService.deleteProduct(seller_id)
    .then(Products => {
        res.status(200).send({
            status: 'success',
            message: 'Data product berhasil dihapus',
            data: Products
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
    getAllProducts,
    getProductByIdCategory,
    getProductByIdSeller,
    createProduct,
    updateProduct,
    deleteProduct
}
