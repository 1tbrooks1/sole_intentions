const router = require('express').Router();

const userRoutes = require('./user-routes');
const shoeRoutes = require('./shoe-routes');
const cartRoutes = require('./cart-routes');
// const cartItemRoutes = require('./cartItem-routes');

router.use('/user', userRoutes);
router.use('/shoe', shoeRoutes);
router.use('/cart', cartRoutes);
// router.use('/cartitem', cartItemRoutes);

module.exports = router;
