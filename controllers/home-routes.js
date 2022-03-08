const router = require('express').Router();
const sequelize = require('../config/connection');
const { Shoe, User, CartItem } = require('../models');
const stripe = require('stripe')(
  'sk_test_51KYkduDT393wRvxW2rJP7fKH7P7eZk3WEi2w4mt4vcK2N8pCuovVnd63lNBoAQQw17cpiRLAj5ExVooEVzhcMzab00m10g4G9X'
);

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
    attributes: ['id', 'stripe_price_id'],
  });
  const shoes = shoeData.map((shoe) => shoe.get({ plain: true }));
  //const cartShoes = shoes.filter((shoe) => shoe.id === ???needs to loop through second array with all the ids and grab what is ===);
  console.log(cartShoes);
  console.log(shoes);
  console.log(cartItems);
  console.log(shoeIds);
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1KaWP8DT393wRvxWYgEoTnOv',
        quantity: 1,
      },
      {
        price: 'price_1KaTXwDT393wRvxWAah2oY1Z',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: 'http://google.com',
    cancel_url: 'http://google.com',
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

router.get('/limit=8', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      limit: 8,
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

router.get('/limit=12', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      limit: 12,
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

router.get('/limit=24', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      limit: 24,
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
      attributes: ['id', 'name', 'price', 'filename', 'description', 'year'],
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
