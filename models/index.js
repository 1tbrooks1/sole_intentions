const User = require('./User');
const Shoe = require('./Shoe');
const CartItem = require('./CartItem');

CartItem.belongsTo(Shoe, {
  foreignKey: 'shoe_id',
  constraints: none
});

Shoe.hasMany(CartItem, {
  foreignKey: 'shoe_id',
  constraints: none
});

module.exports = { User, Shoe, CartItem };
