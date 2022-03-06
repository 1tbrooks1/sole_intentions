const router = require('express').Router();
const sequelize = require('../config/connection');
const { Shoe } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const dbCartData = await Shoe.findAll({
      where: { in_cart: true },
      attributes: ['id', 'price', 'name', 'filename'],
    });
    const shoes = dbCartData.map((shoe) => shoe.get({ plain: true }));
    res.render('cart', {
      shoes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
