const { Category } = require('../models')

const getAllCategories = () => {
    return Category.findAll(
        {
            attributes: ['name']
        }
    )
}

const getCategoryByName = (name) => {
    return Category.findOne(
        {
            where: {
                name: name
            }
        }
    )
}

const createCategory = (categoryData) => {
    return Category.create(categoryData)
}

const updateCategory = (name, categoryData) => {
    return Category.update(categoryData, {
        where: {
            name: name
        }
    })
}

const deleteCategory = (name) => {
    return Category.destroy({
        where: {
            name: name
        }
    })
}

module.exports = {
    getAllCategories,
    getCategoryByName,
    createCategory,
    updateCategory,
    deleteCategory
}