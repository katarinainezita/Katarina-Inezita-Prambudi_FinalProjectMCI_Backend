const categoryRepository = require('../repositories/categoryRepository');

const getAllCategories = async () => {
    try {
      const categories = await categoryRepository.getAllCategories();
      return categories;
    } catch (err) {
      throw err;
    }
  }

const getCategoryByName = async (name) => {
  try {
    const category = await categoryRepository.getCategoryByName(name);
    return category;
  } catch (err) {
    throw err;
  }
}

const createCategory = async (categoryData) => {
    try {
      const category = await categoryRepository.createCategory(categoryData);
      return category;
    } catch (err) {
      throw err;
    }
}

const updateCategory = async (name, categoryData) => {
    try {
      const category = await categoryRepository.updateCategory(name, categoryData);
      return category;
    } catch (err) {
      throw err;
    }
}

const deleteCategory = async (name) => {
    try {
      const category = await categoryRepository.deleteCategory(name);
      return category;
    } catch (err) {
      throw err;
    }
}

module.exports = {
  getAllCategories,
  getCategoryByName,
  createCategory,
  updateCategory,
  deleteCategory
}