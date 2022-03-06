const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Shoe, User } = require('../../models');

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
        in_cart: true,
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
        in_cart: false,
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
