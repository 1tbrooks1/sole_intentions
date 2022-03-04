const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Cart extends Model {}

Cart.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
    user: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
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
                    model: 'shoe',
                    key: 'id'
                }
            }
        }
    ],
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cart',
});
    

// array of items (with id, qty, price, whatever else)
// total qty
// total cost
// owner (user id - references user Model)

module.exports = Cart;
