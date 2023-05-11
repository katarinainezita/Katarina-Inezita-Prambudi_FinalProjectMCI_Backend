const paymentRepository = require('../repositories/paymentRepository');

const getAllPayments = async () => {
    try {
      const payments = await paymentRepository.getAllPayments();
      return payments;
    } catch (err) {
      throw err;
    }
  }

const getPaymentByIdOrder = async (order_id) => {
  try {
    const payment = await paymentRepository.getPaymentByIdOrder(order_id);
    return payment;
  } catch (err) {
    throw err;
  }
}

const createPayment = async (paymentData) => {
    try {
      const payment = await paymentRepository.createPayment(paymentData);
      return payment;
    } catch (err) {
      throw err;
    }
}

const updatePayment = async (order_id, paymentData) => {
    try {
      const payment = await paymentRepository.updatePayment(order_id, cartData);
      return payment;
    } catch (err) {
      throw err;
    }
}

const deletePayment = async (order_id) => {
    try {
      const payment = await paymentRepository.order_id(order_id);
      return payment;
    } catch (err) {
      throw err;
    }
}

module.exports = {
  getAllPayments,
  getPaymentByIdOrder,
  createPayment,
  updatePayment,
  deletePayment
}