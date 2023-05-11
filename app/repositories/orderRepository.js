const { Order } = require('../models')

const getAllOrders = () => {
    return Order.findAll(
        {
            attributes: ['user_id', 'product_id', 'quantity', 'status']
        }
    )
}

const getOrderByIdUser = (user_id) => {
    return Order.findOne(
        {
            where: {
                user_id: user_id
            }
        }
    )
}

const getOrderByIdProduct = (product_id) => {
    return Order.findOne(
        {
            where: {
                product_id: product_id
            }
        }
    )
}

const createOrder = (orderData) => {
    return Order.create(orderData)
}

const updateOrder = (user_id, orderData) => {
    return Order.update(orderData, {
        where: {
            user_id: user_id
        }
    })
}

const deleteOrder = (user_id) => {
    return Order.destroy({
        where: {
            user_id: user_id
        }
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