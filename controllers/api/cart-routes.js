const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Shoe, User, Cart } = require('../../models');
const withAuth = require('../../utils/auth');

// create cart - assign user's id to model as owner

// delete cart when no value (?) or when checkout is done

// how do we change items within the cart (add, remove, etc)

// 'get' single cart- withAuth based on userID
// have to check if user is logged in and already has a cart ?
router.get('/cart', withAuth, async (req, res) => {
  try {
    const userCartData = await Cart.FindOne({
      where: {
        user_id: req.session.user_id,
      },
      attributes: {
        //??
      },
      include: [
        //??
      ],
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
