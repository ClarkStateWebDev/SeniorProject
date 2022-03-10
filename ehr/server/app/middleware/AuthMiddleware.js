/************************************************************************** 
Name: AuthMiddleware.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: THIS MAY NOT BE NEEDED!

Modified:

**************************************************************************/

const { verify } = require("jsonwebtoken");
//const User = require('../models/User.model.js');
const authConfig = require("../config/auth.config");
const db = require("../models")
const User = db.user;
const validateToken = (req, res, next) => {
  const accessToken = req.header("x-access-token");

  if (!accessToken) return res.json({ error: "User not logged in!" });

  try {
    const validToken = verify(accessToken, authConfig.secret,);
    req.user = validToken;
    console.log(validToken);
    if (validToken) {
      const userID = validToken.id;
      //console.log("USerID: " + userID);
      return next();
    }
  } catch (err) {
    return res.json({ error: err });
  }
};

const isAdmin = (req, res, next) => {
  User.findByPk(req.user.id).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        console.log("Role: " + roles[i].name);
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }
        res.status(403).send({
          message: "Require Admin Role!"
        });
        console.log("Error 403");
        return;
    });
  });
};

const authJwt = {
  validateToken: validateToken,
  isAdmin: isAdmin,
};


/* module.exports = validateToken; */
module.exports = authJwt;