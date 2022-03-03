const router = require('express').Router();
const sequelize = require('../config/connection');
const { Shoe, User } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      attributes: ['id', 'name', 'price', 'picture'],
    });
    const shoes = dbShoeData.map((shoe) => shoe.get({ plain: true }));
    // unsure on above and below ^v
    res.render('homepage', {
      shoes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/shoe/:id', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'name', 'price', 'picture', 'description'],
    });
    //unsure on below
    const shoe = dbShoeData.get({ plain: true });
    res.render('single-item', {
      shoe,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});
// above copied from previous

module.exports = router;
