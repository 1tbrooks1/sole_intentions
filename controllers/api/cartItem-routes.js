const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Shoe, User, Cart, CartItem } = require('../../models');
const withAuth = require('../../utils/auth');
