const frontendRepository = require('../repositories/frontendRepository');
const cartRepository = require('../repositories/cartRepository');

const getProductHome = async () => {
    try {
      const products = await frontendRepository.getProductHome();
      return products;
    } catch (err) {
      throw err;
    }
  }

const getProductPage = async (name) => {
  try {
    const products = await frontendRepository.getProductPage(name);
    return products;
  } catch (err) {
    throw err;
  }
}

const getProductDetail = async (product_id) => {
    try {
      const product = await frontendRepository.getProductDetail(product_id);
      return product;
    } catch (err) {
      throw err;
    }
  }

  const getCartByIdUser = async (user_id) => {
    try {
      const cart = await cartRepository.getCartByIdUser(user_id);
      return cart;
    } catch (err) {
      throw err;
    }
  }


const createCart = async (cartData) => {
    try {
      const cart = await cartRepository.createCart(cartData);
      return cart;
    } catch (err) {
      throw err;
    }
}

const updateCart = async (user_id, cartData) => {
    try {
      const cart = await cartRepository.updateCart(user_id, cartData);
      return cart;
    } catch (err) {
      throw err;
    }
}

const deleteCart = async (user_id) => {
    try {
      const cart = await cartRepository.deleteCart(user_id);
      return cart;
    } catch (err) {
      throw err;
    }
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