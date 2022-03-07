require('dotenv').config();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

const stripe = require('stripe')(stripeSecretKey);
const router = require('express').Router();
const sequelize = require('../config/connection');

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: '{{PRICE_ID}}',
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
