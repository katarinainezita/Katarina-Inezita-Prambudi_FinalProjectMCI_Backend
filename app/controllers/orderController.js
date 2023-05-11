const orderService = require('../services/orderService');

const getAllOrders = async(req, res) => {
    orderService.getAllOrders()
    .then(Orders => {

        if(!Orders){
            res.status(404).send({
                status : 'error',
                message : 'Data order tidak ditemukan',
                data : {}
            });
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data order berhasil ditemukan',
                data: Orders
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

const getOrderByIdUser = async(req, res) => {
    const user_id = req.params.user_id;
    orderService.getOrderByIdUser(user_id)
    .then(Orders => {
        if (!Orders) {
            req.status(404).send({
                status: 'error',
                message: 'Data order tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data order berhasil ditemukan',
                data: Orders
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

const getOrderByIdProduct = async(req, res) => {
    const product_id = req.params.product_id;
    orderService.getOrderByIdProduct(product_id)
    .then(Orders => {
        if (!Orders) {
            req.status(404).send({
                status: 'error',
                message: 'Data order tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data order berhasil ditemukan',
                data: Orders
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

const createOrder = async(req, res) => {
    console.log(req.body);
    const orderData = {
        user_id : req.body.user_id,
        product_id : req.body.product_id,
        quantity : req.body.quantity,
        status: req.body.status
    }
    orderService.createOrder(orderData)
    .then(Orders => {
        res.status(200).send({
            status: 'success',
            message: 'Data order berhasil ditambahkan',
            data: Orders
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

const updateOrder = (req, res) => {
    const user_id = req.params.user_id;
    const orderData = req.body;

    if(!user_id){
        return res.status(400).send({
            status: 'error',
            message: 'Id User tidak ditemukan',
            data : {}
        });
    }

    orderService.updateOrder(user_id, orderData)
    .then(Orders => {
        res.status(200).send({
            status: 'success',
            message: 'Data order berhasil diupdate',
            data: Orders
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

const deleteOrder = (req, res) => {
    const user_id = req.params.user_id;

    if(!user_id){
        return res.status(400).send({
            status : 'error',
            message : 'Id User tidak ditemukan',
            data : {}
        });
    }

    orderService.deleteOrder(user_id)
    .then(Orders => {
        res.status(200).send({
            status: 'success',
            message: 'Data order berhasil dihapus',
            data: Orders
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
  getAllOrders,
  getOrderByIdUser,
  getOrderByIdProduct,
  createOrder,
  updateOrder,
  deleteOrder
}
