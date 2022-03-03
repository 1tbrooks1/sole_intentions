const router = require('express').Router();

const userRoutes = require('./user-routes');
const shoeRoutes = require('./shoe-routes');
const cartRoutes = require('./cart-routes');

router.use('/users', userRoutes);
router.use('/shoe', shoeRoutes);
router.use('/cart', cartRoutes);

module.exports = router;
