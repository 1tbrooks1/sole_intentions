const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model {}

Cart.init({
    user: {
        type: DataTypes.INTEGER,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        validate: {
            len: [1]
        }
    },
    items:[
        {
            shoe: {
                references: {
                    model: 'Shoe',
                    key: 'id'
                }
            }
        }
    ]
});
    

// array of items (with id, qty, price, whatever else)
// total qty
// total cost
// owner (user id - references user Model)

module.exports = Cart;
