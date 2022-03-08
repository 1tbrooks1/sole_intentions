const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shoe extends Model {}

Shoe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    brand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stripe_prod_id: {
      type: DataTypes.STRING,
    },
    stripe_price_id: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'shoe',
  }
);

module.exports = Shoe;
