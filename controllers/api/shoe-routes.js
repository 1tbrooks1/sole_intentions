const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Shoe } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      attributes: ['id', 'name', 'price', 'filename', 'in_cart'],
    });
    res.json(dbShoeData);
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

router.get('/:brand', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findAll({
      where: { brand: req.params.brand },
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

router.get('/:id', async (req, res) => {
  try {
    const dbShoeData = await Shoe.findOne({
      where: {
        id: req.params.id,
      },
      attributes: ['id', 'name', 'price', 'filename', 'description'],
    });
    res.json(dbShoeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/add/:id', async (req, res) => {
  try {
    const dbShoeData = await Shoe.update(
      {
        in_cart: 1,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json(dbShoeData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put('/remove/:id', async (req, res) => {
  try {
    const dbShoeData = await Shoe.update(
      {
        in_cart: 0,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.json(dbShoeData);
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
