const { Cart } = require('../models')

const getAllCarts = () => {
    return Cart.findAll(
        {
            attributes: ['user_id', 'product_id', 'quantity']
        }
    )
}

const getCartByIdUser = (user_id) => {
    return Cart.findOne(
        {
            where: {
                user_id: user_id
            }
        }
    )
}

const getCartByIdProduct = (product_id) => {
    return Cart.findOne(
        {
            where: {
                product_id: product_id
            }
        }
    )
}

const createCart = (cartData) => {
    return Cart.create(cartData)
}

const updateCart = (user_id, cartData) => {
    return Cart.update(cartData, {
        where: {
            user_id: user_id
        }
    })
}

const deleteCart = (user_id) => {
    return Cart.destroy({
        where: {
            user_id: user_id
        }
    })
}

module.exports = {
    getAllCarts,
    getCartByIdUser,
    getCartByIdProduct,
    createCart,
    updateCart,
    deleteCart
}