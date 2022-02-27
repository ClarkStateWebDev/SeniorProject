/************************************************************************** 
Name: user.controller.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: functions that separate out the code to route requests from the code that actually processes requests
         These controllers are all of the user functions. 

Modified:

**************************************************************************/

const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const db = require("../models")
const Op = db.Sequelize.Op;
const User = db.user;
const Role = db.role
const authConfig = require("../config/auth.config");

exports.create = (req, res) => {
  const { firstName, lastName, email, password, isAdmin } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
  User.create({
    first_name: firstName,
    last_name:lastName,
    email: email,
    password: hash,
    isAdmin: isAdmin
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User was registered successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User was registered successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
  });
}; //end create


exports.getAll = (req, res, next) => {
  User.findAll()
  .then((data) => {
    res.json(data);
  })
  .catch(err => {
    console.log(err);
  });
};

exports.getUser = (req, res, next) => {
  const userId = req.params.user_id;
  User.findAll( {
    where: {
      user_id: userId
    },
  })
  .then((data) => {
    res.json(data);
  })
  .catch(err => {
    console.log(err);
  });
};

exports.updateUser = (req, res, next) => {
  //const user_id = req.params.user_id;
  const {user_id, firstName, lastName, email, password, isAdmin } = req.body;
  
  bcrypt.hash(password, 10).then((hash) => {
    User.update({
      first_name: firstName,
      last_name:lastName,
      email: email,
      isAdmin: isAdmin,
    },{where: {user_id: user_id} }
    ).catch(err => {
      console.log(err);
    });
    res.json("SUCCESS");
  });

};

exports.deleteUser = (req, res, next) => {
  const user_id = req.params.user_id;
  User.destroy({
    where: {
      user_id: user_id
    },
  });
  res.json("DELETED SUCCESSFULLY");
};

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ where: {email: email }})
    .then(user => {
      if (!user) {
        res.json({error: 'Invalid email or password.'});
      }else{
        var role = ""
        user.getRoles().then(roles => {
          for (let i = 0; i < roles.length; i++) {
            role = roles[i].id;
        }})
        bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            const accessToken = sign(
              { email: user.email, id: user.user_id, roles: user.roles },
              authConfig.secret,{
                expiresIn: 86400 // 24 hours
              });
            res.json({ token: accessToken, id: user.user_id, fName: user.first_name, lName: user.last_name, email: email, roles:role});
          }else{
            res.json({error: 'Invalid email or password.'});
          }
          
        })
        .catch(err => {
          console.log(err);
          res.redirect('/login');
        });
      }
      
    })
    .catch(err =>  {
      const error = new Error(err);
      error.httpStatusCode = 500;
    });
};

exports.auth =  (req, res) => {
  res.json(req.user);
};

exports = checkAdmin = (req, res, next) => {
  User.findByPk(req.userId).then(user => {
    user.getRoles().then(roles => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }
      res.status(403).send({
        message: "Require Admin Role!"
      });
      return;
    });
  });
};


