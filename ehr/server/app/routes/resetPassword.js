/************************************************************************** 
Name: resetPassword.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: Find the user with the correct reset token and change their password

Modified:

**************************************************************************/

/* require() (import) the user controller. We can then call the controller 
   functions to get the requested data from the user models using the assigned variable name 'users'  */
const User = require('../models/User.model.js');

/* require() (import) sequelize */
const Sequelize = require('sequelize');


const Op = Sequelize.Op;

module.exports = (app) => {
  app.get('/reset', (req, res) => {
    User.findOne({
      where: {
        resetPasswordToken: req.query.resetPasswordToken,
        resetPasswordExpires: {
          [Op.gt]: Date.now(),
        },
      },
    }).then((user) => {
      if (user == null) {
        console.error('password reset link is invalid or has expired');
        res.status(403).send('password reset link is invalid or has expired');
      } else {
        res.status(200).send({
          email: user.email,
          message: 'password reset link a-ok',
        });
      }
    });
  });
};
