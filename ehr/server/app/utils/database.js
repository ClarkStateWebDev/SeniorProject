const Sequelize = require('sequelize');
const config = require("../config/db.config");

const sequelize = new Sequelize(
        config.DB,
        config.USER,
        config.PASSWORD,
    {
        dialect: config.dialect
});

module.exports = sequelize;
