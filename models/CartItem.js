const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class CartItem extends Model {}

CartItem.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    cart_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'cart',
            key: 'id'
        }
    },
    shoe_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'shoe',
            key: 'id'
        }
    }},
    {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cart_item',
    }
);
    

module.exports = CartItem;
