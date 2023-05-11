const productRepository = require('../repositories/productRepository');

const getAllProducts = async () => {
    try {
      const products = await productRepository.getAllProducts();
      return products;
    } catch (err) {
      throw err;
    }
  }

const getProductByIdCategory = async (category_id) => {
  try {
    const product = await productRepository.getProductByIdCategory(category_id);
    return product;
  } catch (err) {
    throw err;
  }
}

const getProductByIdSeller = async (seller_id) => {
    try {
      const product = await productRepository.getProductByIdSeller(seller_id);
      return product;
    } catch (err) {
      throw err;
    }
  }

const createProduct = async (productData) => {
    try {
      const product = await productRepository.createProduct(productData);
      return product;
    } catch (err) {
      throw err;
    }
}

const updateProduct = async (seller_id, productData) => {
    try {
      const product = await productRepository.updateProduct(seller_id, productData);
      return product;
    } catch (err) {
      throw err;
    }
}

const deleteProduct = async (seller_id) => {
    try {
      const product = await productRepository.deleteProduct(seller_id);
      return product;
    } catch (err) {
      throw err;
    }
}

module.exports = {
  getAllProducts,
  getProductByIdCategory,
  getProductByIdSeller,
  createProduct,
  updateProduct,
  deleteProduct
}