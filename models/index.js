const User = require('./User');
const Shoe = require('./Shoe');
const CartItem = require('./CartItem');

CartItem.belongsTo(Shoe, {
  foreignKey: 'shoe_id',
});

Shoe.hasMany(CartItem, {
  foreignKey: 'shoe_id',
});

module.exports = { User, Shoe, CartItem };
