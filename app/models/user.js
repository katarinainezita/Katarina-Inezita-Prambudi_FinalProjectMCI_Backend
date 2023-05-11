'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Cart, {
        foreignKey: 'user_id'
      });
      User.hasMany(models.Order, {
        foreignKey: 'user_id'
      });
      User.hasMany(models.Product, {
        foreignKey: 'seller_id'
      });
      User.hasMany(models.Review, {
        foreignKey: 'user_id'
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};