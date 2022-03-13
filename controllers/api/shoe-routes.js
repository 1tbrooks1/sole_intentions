const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Shoe, CartItem, User } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      attributes: ['id', 'name', 'our_price', 'filename'],
    });
    res.json(dbShoeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/cart', async (req, res) => {
  try {
    const dbCartData = await CartItem.findAll({
      where: {
        user_id: req.session.id,
      },
      include: [
        {
          model: Shoe,
          attributes: ['id', 'our_price', 'name', 'filename', 'price'],
        },
      ],
    });
    const cartItems = dbCartData.map((cartItem) =>
      cartItem.get({ plain: true })
    );
    res.render('cart', {
      cartItems,
      loggedIn: req.session.loggedIn,
    });
    if (!dbCartData) {
      res.render('cart', {
        loggedIn: req.session.loggedIn,
      });
    }
  } catch (err) {
    console.log(err);
    res.status(err).json(err);
  }
});

router.get('/:brand', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      where: { brand: req.params.brand },
      attributes: ['id', 'our_price', 'name', 'filename'],
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

router.get('/:id', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'name', 'our_price', 'filename', 'description'],
    });
    res.json(dbShoeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/addtocart/:id', async (req, res) => {
  try {
    const dbCartItem = await CartItem.create({
      user_id: req.session.id,
      shoe_id: req.params.id,
    });
    console.log(dbCartItem);
    res.json(dbCartItem);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/cart/removefromcart/:id', async (req, res) => {
  try {
    const dbCartItem = await CartItem.destroy({
      where: {
        user_id: req.session.id,
        shoe_id: req.params.id,
      },
    });
    console.log(dbCartItem);
    res.json(dbCartItem);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  if (req.session) {
    try {
      const dbShoeData = await Shoe.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
      });
      res.json(dbShoeData);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const dbShoeData = await Shoe.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(dbShoeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
