const router = require('express').Router();
const sequelize = require('../config/connection');
const { Shoe, User, Cart, CartItem } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const dbCartData = await Cart.findAll({
      where: {
        id: req.session.id,
      },
      attributes: ['id', 'quantity'],
      include: [
        {
          model: CartItem,
          attributes: ['id', 'shoe_id'],
        },
        {
          model: Shoe,
          attributes: ['id', 'name', 'price', 'filename'],
        },
      ],
    });
    const cart = await dbCartData.get({ plain: true });
    res.render('cart', { cart, loggedIn: true });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
