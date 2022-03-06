// const router = require('express').Router();
// const sequelize = require('../config/connection');
// const { Shoe } = require('../models');
// const withAuth = require('../utils/auth');

// router.get('/', async (req, res) => {
//   try {
//     const dbCartData = await Shoe.findAll({
//       where: { id: req.session.id, in_cart: 1 },
//       attributes: ['id', 'price', 'name', 'filename', 'in_cart'],
//     });
//     console.log(dbCartData);
//     const shoes = dbCartData.map((shoe) => shoe.get({ plain: true }));
//     res.render('cart', {
//       shoes,
//       loggedIn: req.session.loggedIn,
//     });
//     if (!dbCartData) {
//       res.render('cart', {
//         loggedIn: req.session.loggedIn,
//       });
//     }
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
