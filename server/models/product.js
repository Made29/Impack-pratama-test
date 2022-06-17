'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Product.belongsTo(models.User);
    }
  }
  Product.init({
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }, 
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }, 
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }, 
    UOM: {
      type: DataTypes.ENUM("sheet", "roll", "pcs"),
      allowNull: false
    }, 
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    } 
    }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};