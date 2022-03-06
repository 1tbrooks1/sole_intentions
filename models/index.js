const User = require('./User');
const Shoe = require('./Shoe');
// const Cart = require('./Cart');
// const CartItem = require('./CartItem');

// Cart.belongsTo(User, {
//   foreignKey: 'user_id',
// });

// User.hasOne(Cart, {
//   foreignKey: 'cart',
// });

// Cart.belongsToMany(Shoe, {
//   through: 'CartItem',
// });

// Shoe.belongsToMany(Cart, {
//   through: 'CartItem',
// });

// User has one cart
// Cart has one user
// Shoe belongs to cart ?
// Shoe belongs to user ?
// do we have to add a cart FK to shoe Model for if a shoe has a cart
// User model needs FK for Cart
// Cart model needs FK for User (it's owner)

module.exports = { User, Shoe };
