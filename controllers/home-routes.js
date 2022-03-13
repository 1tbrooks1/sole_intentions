const router = require('express').Router();
const sequelize = require('../config/connection');
const stripe = require('../config/stripe');
const { Shoe, CartItem } = require('../models');

router.get('/', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      attributes: ['id', 'name', 'our_price', 'filename'],
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

router.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/html/success.html'));
});

router.post('/create-checkout-session', async (req, res) => {
  const cartData = await CartItem.findAll({
    where: {
      user_id: req.session.id,
    },
    attributes: ['shoe_id'],
  });
  const cartItems = cartData.map((cartItem) => cartItem.get({ plain: true }));
  const shoeIds = cartItems.map((cartItem) => cartItem.shoe_id);
  const shoeData = await Shoe.findAll({
    where: {
      id: shoeIds,
    },
    attributes: ['price'],
  });
  const shoes = shoeData.map((shoe) => shoe.get({ plain: true }));
  shoes.forEach((shoe) => {
    shoe.quantity = 1;
  });
  const session = await stripe.checkout.sessions.create({
    line_items: shoes,
    mode: 'payment',
    allow_promotion_codes: true,
    success_url: 'https://soleintentions.herokuapp.com/success',
    cancel_url: 'https://soleintentions.herokuapp.com',
  });
  res.redirect(303, session.url);
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/sort=priceDesc', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      order: [['our_price', 'DESC']],
      attributes: ['id', 'name', 'our_price', 'filename'],
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
      order: [['our_price', 'ASC']],
      attributes: ['id', 'name', 'our_price', 'filename'],
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
      attributes: ['id', 'name', 'our_price', 'filename'],
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
      attributes: ['id', 'name', 'our_price', 'filename'],
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
      attributes: ['id', 'our_price', 'name', 'filename', 'year'],
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
      attributes: [
        'id',
        'name',
        'our_price',
        'filename',
        'description',
        'year',
      ],
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

module.exports = router;
