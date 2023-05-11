const { Product } = require('../models')

const getAllProducts = () => {
    return Product.findAll(
        {
            attributes: ['name', 'description', 'price', 'category_id', 'seller_id']
        }
    )
}

const getProductByIdCategory = (category_id) => {
    return Product.findOne(
        {
            where: {
                category_id: category_id
            }
        }
    )
}

const getProductByIdSeller = (seller_id) => {
    return Product.findOne(
        {
            where: {
                seller_id: seller_id
            }
        }
    )
}

const createProduct = (productData) => {
    return Product.create(productData)
}

const updateProduct = (seller_id, productData) => {
    return Product.update(productData, {
        where: {
            seller_id: seller_id
        }
    })
}

const deleteProduct = (seller_id) => {
    return Product.destroy({
        where: {
            seller_id: seller_id
        }
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