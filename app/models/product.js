'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.User, {
        foreignKey: 'seller_id'
      });
      Product.belongsTo(models.Category, {
        foreignKey: 'category_id'
      });
      Product.hasMany(models.Cart, {
        foreignKey: 'product_id'
      });
      Product.hasMany(models.Order, {
        foreignKey: 'product_id'
      });
      Product.hasMany(models.Review, {
        foreignKey: 'product_id'
      });
    }
  }
  Product.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.DECIMAL,
    category_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};