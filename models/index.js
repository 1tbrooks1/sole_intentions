const User = require('./User');
const Shoe = require('./Shoe');
const CartItem = require('./CartItem');

// CartItem.belongsToMany(Shoe, {
//   foreignKey: 'shoe_id',
//  // constraints: false
// });

Shoe.belongsToMany(CartItem, {
  foreignKey: 'shoe_id',
  // foreignKeyConstraint: none
});

module.exports = { User, Shoe, CartItem };
