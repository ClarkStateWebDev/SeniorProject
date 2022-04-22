/************************************************************************** 
Name: updatePasswordViaEmail.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: 

Modified:

**************************************************************************/

/*  require() (import) bcryptjs */
const bcrypt = require('bcryptjs');
/* require() (import) User.model.js */
const User = require('../models/User.model.js');
/* require() (import) sequelize */
const Sequelize = require('sequelize');
/* Sequelize exposes symbol operators that can be used for to create more complex comparisons we will be using operators in out queries on this page. */
const Op = Sequelize.Op;

/* This is the cost factor. The cost factor controls how much time is needed to calculate a single BCrypt hash.  */
const BCRYPT_SALT_ROUNDS = 12;

module.exports = app => {
  app.put('/updatePasswordViaEmail', (req, res) => {
    User.findOne({
      where: {
        email: req.body.email,
        resetPasswordToken: req.body.resetPasswordToken,
        resetPasswordExpires: {
          [Op.gt]: Date.now(),
        },
      },
    }).then(user => {
      if (user == null) {
        console.error('password reset link is invalid or has expired');
        res.status(403).send('password reset link is invalid or has expired');
      } else if (user != null) {
        console.log('user exists in db');
        bcrypt
          .hash(req.body.password, BCRYPT_SALT_ROUNDS)
          .then(hashedPassword => {
            user.update({
              password: hashedPassword,
              resetPasswordToken: null,
              resetPasswordExpires: null,
            });
          })
          .then(() => {
            console.log('password updated');
            res.status(200).send({ message: 'password updated' });
          });
      } else {
        console.error('no user exists in db to update');
        res.status(401).json('no user exists in db to update');
      }
    });
  });
};
