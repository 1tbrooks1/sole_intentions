const router = require("express").Router();
const sequelize = require("../config/connection");

router.get('/', (req, res) => {
    console.log('Edizzle is the man!')
});