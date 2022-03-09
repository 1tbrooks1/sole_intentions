const User = require('./User');
const Shoe = require('./Shoe');
const CartItem = require('./CartItem');

CartItem.belongsTo(Shoe, {
  foreignKey: 'shoe_id',
  foreignKeyConstraint: none
});

Shoe.hasMany(CartItem, {
  foreignKey: 'shoe_id',
  foreignKeyConstraint: none
});

module.exports = { User, Shoe, CartItem };
