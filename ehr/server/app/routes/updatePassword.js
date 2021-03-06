/************************************************************************** 
Name: updatePassword.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: 

Modified:

**************************************************************************/
import passport from 'passport';

/*  require() (import) bcryptjs */
const bcrypt = require('bcryptjs');

/* require() (import) the user controller. We can then call the controller 
   functions to get the requested data from the user models using the assigned variable name 'users'  */
import User from '../sequelize';

const BCRYPT_SALT_ROUNDS = 12;
module.exports = (app) => {
  app.put('/updatePassword', (req, res, next) => {
    passport.authenticate('jwt', { session: false }, (err, user, info) => {
      if (err) {
        console.error(err);
      }
      if (info !== undefined) {
        console.error(info.message);
        res.status(403).send(info.message);
      } else {
        User.findOne({
          where: {
            email: req.body.email
          },
        }).then((userInfo) => {
          if (userInfo != null) {
            console.log('user found in db');
            bcrypt
              .hash(req.body.password, BCRYPT_SALT_ROUNDS)
              .then((hashedPassword) => {
                userInfo.update({
                  password: hashedPassword,
                });
              })
              .then(() => {
                console.log('password updated');
                res
                  .status(200)
                  .send({ auth: true, message: 'password updated' });
              });
          } else {
            console.error('no user exists in db to update');
            res.status(404).json('no user exists in db to update');
          }
        });
      }
    })(req, res, next);
  });
};
