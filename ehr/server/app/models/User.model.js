/************************************************************************** 
Name: User.model.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: Models exist between the MySQL database storage and the logic of the application. 
         This is the User model.

Modified:

**************************************************************************/
const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        user_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        last_name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        email:{
            type: Sequelize.STRING,
            allowNull: false
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false
        },
        isAdmin:{
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },
        by_user:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "Admin"
        },
        resetPasswordToken: {
            type:Sequelize.STRING
        },
        resetPasswordExpires: {
            type:Sequelize.DATE
        },
    });
    return User;
};

