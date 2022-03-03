const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

// do we have to add a cart id to User model? probably? , yes and vice versa

// why is the data not formating correctly

// /api/user/login - 'get' route , first check if there is a user with email entered, if yes, validate password

// do i need to add 'include' things to api routes to show joins? (what would we need this for)

// if we end up doing a favorites page, we need a set up similar to the Vote model (module 13.4)

module.exports = router;
