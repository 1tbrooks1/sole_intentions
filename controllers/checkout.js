const router = require('express').Router();
const sequelize = require('../config/connection');
//const { Shoe, User, CartItem } = require('../models');

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1KaTYKDT393wRvxWX8bF31Hm',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: res.render('success'),
    cancel_url: res.render('cancel'),
  });

  res.redirect(303, session.url);
});

module.exports = router;

// Shoe Model has references to prod and price ID's
// need prod name, price id, and prod id passed to stripe
// when stripe checkout session is created, how do we pull those values and insert them as line items
// line_items: [
//   {
//     price_data: {
//       currency: 'usd',
//       product_data: {
//         name: 'T-shirt',
//       },
//       unit_amount: 2000,
//     },
//     quantity: 1,
//   },
// ],
