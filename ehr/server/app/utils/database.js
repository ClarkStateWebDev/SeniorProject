const Sequelize = require('sequelize');

const sequelize = new Sequelize('clark_state_ehr', 'root', 'password', {
    dialect: 'mysql'
});

module.exports = sequelize;
