const User = require('./User');
const Shoe = require('./Shoe');
const CartItem = require('./CartItem');

CartItem.hasMany(Shoe, {
  foreignKey: 'shoe_id',
 // constraints: false
});

// Shoe.belongsToMany(CartItem, {
//   foreignKey: 'shoe_id',
//   // foreignKeyConstraint: none
// });

module.exports = { User, Shoe, CartItem };
