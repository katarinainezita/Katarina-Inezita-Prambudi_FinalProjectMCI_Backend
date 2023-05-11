const { Payment } = require('../models')

const getAllPayments = () => {
    return Payment.findAll(
        {
            attributes: ['order_id', 'payment_method', 'amount', 'status']
        }
    )
}

const getPaymentByIdOrder = (order_id) => {
    return Payment.findOne(
        {
            where: {
                order_id: order_id
            }
        }
    )
}

const createPayment = (paymentData) => {
    return Payment.create(paymentData)
}

const updatePayment = (order_id, paymentData) => {
    return Payment.update(paymentData, {
        where: {
            order_id: order_id
        }
    })
}

const deletePayment = (order_id) => {
    return Payment.destroy({
        where: {
            order_id: order_id
        }
    })
}

module.exports = {
    getAllPayments,
    getPaymentByIdOrder,
    createPayment,
    updatePayment,
    deletePayment
}