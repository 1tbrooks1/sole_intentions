const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Shoe, User, Cart } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const dbCartData = await Cart.create({
      user_id: req.session.id,
    });
    res.json(dbCartData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
  try {
    const dbCartData = await Cart.findOne({
      where: {
        user_id: req.session.id,
      },
      attributes: [
        'id',
        'user_id',
        [
          sequelize.literal('(SELECT COUNT(*) FROM shoe WHERE in_cart = true)'),
          'quantity',
        ],
        [
          sequelize.literal(
            '(SELECT SUM(shoe.price) FROM shoe WHERE in_cart = true)'
          ),
          'total',
        ],
      ],
      include: [
        {
          model: Shoe,
          attributes: ['id', 'name', 'price', 'filename', 'in_cart'],
        },
      ],
    });
    res.json(dbCartData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
