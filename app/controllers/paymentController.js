const paymentService = require('../services/paymentService');

const getAllPayments = async(req, res) => {
    paymentService.getAllPayments()
    .then(Payments => {

        if(!Payments){
            res.status(404).send({
                status : 'error',
                message : 'Data payment tidak ditemukan',
                data : {}
            });
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data payment berhasil ditemukan',
                data: Payments
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

const getPaymentByIdOrder = async(req, res) => {
    const order_id = req.params.order_id;
    paymentService.getPaymentByIdOrder(order_id)
    .then(Payments => {
        if (!Payments) {
            req.status(404).send({
                status: 'error',
                message: 'Data payment tidak ditemukan',
                data: {}
            });
            
        } else {
            res.status(200).send({
                status: 'success',
                message: 'Data payment berhasil ditemukan',
                data: Payments
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

const createPayment = async(req, res) => {
    console.log(req.body);
    const paymentData = {
        order_id : req.body.order_id,
        payment_method: req.body.payment_method,
        amount: req.body.amount,
        status: req.body.status
    }
    paymentService.createPayment(paymentData)
    .then(Payments => {
        res.status(200).send({
            status: 'success',
            message: 'Data payment berhasil ditambahkan',
            data: Payments
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

const updatePayment = (req, res) => {
    const order_id = req.params.order_id;
    const paymentData = req.body;

    if(!order_id){
        return res.status(400).send({
            status: 'error',
            message: 'Id Order tidak ditemukan',
            data : {}
        });
    }

    paymentService.updatePayment(order_id, paymentData)
    .then(Payments => {
        res.status(200).send({
            status: 'success',
            message: 'Data payment berhasil diupdate',
            data: Payments
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

const deletePayment = (req, res) => {
    const order_id = req.params.order_id;

    if(!order_id){
        return res.status(400).send({
            status : 'error',
            message : 'Id Order tidak ditemukan',
            data : {}
        });
    }

    paymentService.deletePayment(order_id)
    .then(Payments => {
        res.status(200).send({
            status: 'success',
            message: 'Data payment berhasil dihapus',
            data: Payments
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
    getAllPayments,
    getPaymentByIdOrder,
    createPayment,
    updatePayment,
    deletePayment
}
