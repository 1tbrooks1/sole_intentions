const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Shoe, User, Cart } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {});

module.exports = router;
