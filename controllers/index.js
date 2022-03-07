const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');
const checkoutRoutes = require('./checkout');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/checkout', checkoutRoutes);

module.exports = router;
