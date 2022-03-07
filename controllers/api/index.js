const router = require('express').Router();

const userRoutes = require('./user-routes');
const shoeRoutes = require('./shoe-routes');

router.use('/user', userRoutes);
router.use('/shoe', shoeRoutes);

module.exports = router;
