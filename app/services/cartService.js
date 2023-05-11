const cartRepository = require('../repositories/cartRepository');

const getAllCarts = async () => {
    try {
      const carts = await cartRepository.getAllCarts();
      return carts;
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

const getCartByIdProduct = async (product_id) => {
    try {
      const cart = await cartRepository.getCartByIdProduct(product_id);
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
    getAllCarts,
    getCartByIdUser,
    getCartByIdProduct,
    createCart,
    updateCart,
    deleteCart
}