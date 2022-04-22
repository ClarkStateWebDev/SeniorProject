/************************************************************************** 
Name: forgotPassword.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: Use nodemailer to send a forgot password email. We include an emailConfig file where the user,password, and service are set. 

Modified:

**************************************************************************/

/* require() (import) crypto. The crypto module provides cryptographic functionality that includes a set of wrappers for OpenSSL's hash, HMAC, cipher, decipher, sign, and verify functions. */
const crypto = require('crypto');
/* require() (import) User.model.js */
const User = require('../models/User.model.js');
/* require() (import)email.config.js */
const emailConfig = require('../config/email.config');
/* require() (import) nodemailer. Nodemailer is a Node. js module that allows you to send emails from your server with ease. */
const nodemailer = require('nodemailer');


module.exports = (app) => {
  app.post('/forgotPassword', (req, res) => {
    const email = req.body.email;
    if (req.body.email === '') {
      res.status(400).send('email required');
    }
    console.error(req.body.email);
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user === null) {
        console.error('email not in database');
        res.status(403).send('email not in db');
      } else {
        const token = crypto.randomBytes(20).toString('hex');
        user.update({
          resetPasswordToken: token,
          resetPasswordExpires: Date.now() + 3600000,
        });
        // create reusable transporter object using the default SMTP transport.
        // we are also using the mail account that is setup in the email.config file. 
        const transporter = nodemailer.createTransport({
          service: emailConfig.SERVICE,
          auth: {
            user: emailConfig.USER,
            pass: emailConfig.PASSWORD,
          }
        });

        
        // the email portion is the 'text' option and each line must be written in single quotes with a '/n' at the end and a plus(+) sign to concat them. 
        // `http://localhost:3000/reset/${token}\n\n` is the line that the user will go to in order to reset their password. This must be included as well as the {token} so that the user can be found. 
        const mailOptions = {
          from: 'clarkstate.ehr@gmail.com',
          to: `${email}`,
          subject: 'Link To Reset Password',
          text:
            'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
            + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
            + `http://localhost:3000/reset/${token}\n\n`
            + 'If you did not request this, please ignore this email and your password will remain unchanged.\n',
        };
        // send mail with defined transport object and mailOptions
        transporter.sendMail(mailOptions, (err, response) => {
          if (err) {
            // console log the error if there is one. 
            console.error('there was an error: ', err);
          } else {
            // otherwise res with status 200 and a message that says 'recovery email sent'
            res.status(200).json('recovery email sent');
          }
        });
      }
    });
  });
};
