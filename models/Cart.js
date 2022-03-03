const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model {}

Cart.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

// array of items (with id, qty, price, whatever else)
// total qty
// total cost
// owner (user id - references user Model)

module.exports = Cart;
