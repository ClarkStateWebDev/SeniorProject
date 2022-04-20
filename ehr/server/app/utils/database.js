/************************************************************************** 
Name: database.js

Created: 01 Feb 2022

Author: Blaylock 

Purpose: This page handles the database connection we will be using the database config file so that we can call in the database, username, password, and dialect.

Modified:

**************************************************************************/

/* require() (import) sequelize so that we can create a sequelize object*/
const Sequelize = require('sequelize');
/* require() (import) the sequelize config file which holds our configuration for the database (host, username, password, db, and dialect)*/
const config = require("../config/db.config");
/* create a sequelize object so that we can call elsewhere (i.e. the models)  */
const sequelize = new Sequelize(
        config.DB,
        config.USER,
        config.PASSWORD,
    {
        dialect: config.dialect
});

/*  export the sequelize object we just created */
module.exports = sequelize;
