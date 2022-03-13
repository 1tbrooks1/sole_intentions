require('dotenv').config();

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const stripePublicKey = process.env.STRIPE_PUBLIC_KEY;

const stripe = require('stripe')(stripeSecretKey);

module.exports = stripe;
