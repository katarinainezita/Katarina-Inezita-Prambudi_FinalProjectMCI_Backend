const userRepository = require('../repositories/userRepository');

const getAllUsers = async () => {
    try {
      const users = await userRepository.getAllUsers();
      return users;
    } catch (err) {
      throw err;
    }
  }

const getUserByName = async (name) => {
  try {
    const user = await userRepository.getUserByName(name);
    return user;
  } catch (err) {
    throw err;
  }
}

const createUser = async (userData) => {
    try {
      const user = await userRepository.createUser(userData);
      return user;
    } catch (err) {
      throw err;
    }
}

const updateUser = async (name, userData) => {
    try {
      const user = await userRepository.updateUser(name, userData);
      return user;
    } catch (err) {
      throw err;
    }
}

const deleteUser = async (name) => {
    try {
      const user = await userRepository.deleteUser(name);
      return user;
    } catch (err) {
      throw err;
    }
}

module.exports = {
  getAllUsers,
  getUserByName,
  createUser,
  updateUser,
  deleteUser
}