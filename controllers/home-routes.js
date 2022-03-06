const router = require('express').Router();
const sequelize = require('../config/connection');
const { Shoe } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      attributes: ['id', 'name', 'price', 'filename'],
    });
    const shoes = dbShoeData.map((shoe) => shoe.get({ plain: true }));

    res.render('homepage', {
      shoes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/sort=priceDesc', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      order: [['price', 'DESC']],
      attributes: ['id', 'name', 'price', 'filename'],
    });
    const shoes = dbShoeData.map((shoe) => shoe.get({ plain: true }));

    res.render('homepage', {
      shoes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/sort=priceAsc', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      order: [['price', 'ASC']],
      attributes: ['id', 'name', 'price', 'filename'],
    });
    const shoes = dbShoeData.map((shoe) => shoe.get({ plain: true }));

    res.render('homepage', {
      shoes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/sort=yearDesc', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      order: [['year', 'DESC']],
      attributes: ['id', 'name', 'price', 'filename'],
    });
    const shoes = dbShoeData.map((shoe) => shoe.get({ plain: true }));

    res.render('homepage', {
      shoes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/sort=yearAsc', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      order: [['year', 'ASC']],
      attributes: ['id', 'name', 'price', 'filename'],
    });
    const shoes = dbShoeData.map((shoe) => shoe.get({ plain: true }));

    res.render('homepage', {
      shoes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/:year', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      where: { year: req.params.year },
      attributes: ['id', 'price', 'name', 'filename', 'year'],
    });
    const shoes = dbShoeData.map((shoe) => shoe.get({ plain: true }));
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
      attributes: ['id', 'name', 'price', 'filename', 'description'],
    });
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

// this doesn't work
router.get('/limit=6', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      limit: 6,
      attributes: ['id', 'price', 'name', 'filename'],
    });
    const shoes = dbShoeData.map((shoe) => shoe.get({ plain: true }));
    res.render('homepage', {
      shoes,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/cart', async (req, res) => {
  try {
    const dbCartData = await Shoe.findAll({
      where: { in_cart: 1 },
      attributes: ['id', 'price', 'name', 'filename', 'in_cart'],
    });
    console.log(dbCartData);
    const shoes = dbCartData.map((shoe) => shoe.get({ plain: true }));
    res.render('cart', {
      shoes,
      loggedIn: req.session.loggedIn,
    });
    if (!dbCartData) {
      res.render('cart', {
        loggedIn: req.session.loggedIn,
      });
    }
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

module.exports = router;
