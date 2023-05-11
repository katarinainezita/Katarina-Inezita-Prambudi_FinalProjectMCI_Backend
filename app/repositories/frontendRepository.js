const { Product } = require('../models');
const { Cart } = require('../models');

const getProductHome = () => {
    return Product.findAll(
        {
            attributes: ['name', 'description', 'price', 'category_id', 'seller_id']
        }
    )
}

const getProductPage = (name) => {
    return Product.findAll(
        {
            where: {
                name: name
            }
        }
    )
}

const getProductDetail = (product_id) => {
    return Product.findOne(
        {
            where: {
                product_id: product_id
            }
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
    getProductHome,
    getProductPage,
    getProductDetail,
    getCartByIdUser,
    createCart,
    updateCart,
    deleteCart
}