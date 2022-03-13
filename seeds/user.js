const { User } = require('../models');

const userData = [
    {
        username: 'The Shoe Gawd',
        email: 'shoegawd@yahoo.com',
        password: 'ShoeGawd',
        address: '1234 Easy St',
        cc: '123456789',
    },
    {
        username: 'Waffle Fry',
        email: 'wafflefry@yahoo.com',
        password: 'WaffleFry',
        address: '1234 Waffle Fry Rd',
        cc: '2345678910',
    },
    {
        username: 'Rigatoni Lover',
        email: 'iloverigatonis@yahoo.com',
        password: 'Rigatoni',
        address: '1234 Rigatoni Pl',
        cc: '34567891011',
    },
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;