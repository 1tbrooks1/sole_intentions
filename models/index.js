const User = require('./User');
const Shoe = require('./Shoe');
const Cart = require('./Cart');

Cart.belongsTo(User, {
  foreignKey: 'user',
});

User.hasOne(Cart, {
  foreignKey: 'cart',
});

// User has one cart
// Cart has one user
// Shoe belongs to cart ?
// Shoe belongs to user ?
// Would a shoe have many carts ?
// do we have to add a cart FK to shoe Model for if a shoe has a cart
// User model needs FK for Cart
// Cart model needs FK for User (it's owner)

module.exports = { User, Shoe, Cart };
