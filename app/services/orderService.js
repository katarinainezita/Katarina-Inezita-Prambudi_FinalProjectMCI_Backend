const orderRepository = require('../repositories/orderRepository');

const getAllOrders = async () => {
    try {
      const orders = await orderRepository.getAllOrders();
      return orders;
    } catch (err) {
      throw err;
    }
  }

const getOrderByIdUser = async (user_id) => {
  try {
    const order = await orderRepository.getOrderByIdUser(user_id);
    return order;
  } catch (err) {
    throw err;
  }
}

const getOrderByIdProduct = async (product_id) => {
    try {
      const order = await orderRepository.getOrderByIdProduct(product_id);
      return order;
    } catch (err) {
      throw err;
    }
  }

const createOrder = async (orderData) => {
    try {
      const order = await orderRepository.createOrder(orderData);
      return order;
    } catch (err) {
      throw err;
    }
}

const updateOrder = async (user_id, orderData) => {
    try {
      const order = await orderRepository.updateOrder(user_id, orderData);
      return order;
    } catch (err) {
      throw err;
    }
}

const deleteOrder = async (user_id) => {
    try {
      const order = await orderRepository.deleteOrder(user_id);
      return order;
    } catch (err) {
      throw err;
    }
}

module.exports = {
  getAllOrders,
  getOrderByIdUser,
  getOrderByIdProduct,
  createOrder,
  updateOrder,
  deleteOrder
}