/************************************************************************** 
Name: roles.model.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: Models exist between the MySQL database storage and the logic of the application. 
         This is the Roles model.

Modified:

**************************************************************************/
const Sequelize = require('sequelize');
const sequelize = require('../utils/database');
const User = require('../models/User.model.js');
module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    }
  });
  return Role;
};

