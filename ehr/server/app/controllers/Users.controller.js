/************************************************************************** 
Name: user.controller.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: functions that separate out the code to route requests from the code that actually processes requests
         These controllers are all of the user functions. 

Modified:

**************************************************************************/
/* require() (import) bcryptjs */
const bcrypt = require("bcryptjs");
/* require() (import) jsonwebtoken {sign} function */
const { sign } = require("jsonwebtoken");
/* require() (import) models */
const db = require("../models")
/* assign var to Sequelize Operations. Sequelize exposes symbol operators that can be used for to create more complex comparisons we will be using operators in out queries on this page. */ 
const Op = db.Sequelize.Op;
/* import user models and assign var */
const User = db.user;
/* import role models and assign var */
const Role = db.role
/* require() (import) auth.config (this is the 'secret' that is set on the auth.config page) */
const authConfig = require("../config/auth.config");

/* post request to create a user. Include authJwt.validateToken to make sure that the user making this request is logged in.
   'users.create' is the function from the Users.controller that is being called here. 
    You will be required to send {firstName, lastName, email, password, isAdmin} in the request. The password will be hashed using bcryptjs.
    The role is not required but if you do not select one it will default to 'user/student'. */
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
  }).catch(err => {
    console.log("BCRYPT ERROR!!")
    console.log(err);
  });
}; //end create

/* get request to getAll users. Include authJwt.validateToken and authJwt.isAdmin to make sure that the user 
   making this request is logged in AND check that the user is an admin. 
   'users.getAll' is the function from the Users.controller that is being called here. 
   This function uses sequelize's 'findAll()' function to get all rows from user table. The response is JSON */
exports.getAll = (req, res, next) => {
  User.findAll()
  .then((data) => {
    res.json(data);
  })
  .catch(err => {
    console.log(err);
  });
};

/* get request to get and individual user. ':user_id' will be the users id that you wish to query. 
   Include authJwt.validateToken to make sure that the user making this request is logged in  
   'users.getUser' is the function from the Users.controller that is being called here. The user_id is required for this request. 
   This function uses sequelize's 'findAll()' function to get the user from user table based 
   on the user_id in the request body. The response is JSON*/
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

/* put request to update user information. We do not need to include the user_id in this request because the user_id will be pulled from the request body.
   Include authJwt.validateToken to make sure that the user making this request is logged in.
   'users.updateUser' is the function from the Users.controller that is being called here. 
  This function requires {user_id}. The params { firstName, lastName, email, password, isAdmin } are optional. The information that is not changed is sent from client-side state.
  This function will hash the password and use sequelize's update() function to update in the DB. A success will be returned on success or it will console.log an error. */

exports.updateUser = (req, res, next) => {
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
  }).catch(err=>{
    console.log("bcrypt Error!");
    console.log(err);
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
  var role = 0;
  User.findOne({ where: {email: email }})
    .then(user => {
      if (!user) {
        res.json({error: 'Invalid email or password.'});
      }else{
       /*  user.getRoles({raw: true,})
        .then(roles => {
          console.log("role before set: " + role);
          console.log("THis one Chts: " + JSON.stringify(roles))
          console.log("here too " + roles[0].id);
          role=roles[0].id;
          console.log("role after set: " + role);
          }
        ) */
          bcrypt.compare(password, user.password)
          .then(doMatch => {
            if (doMatch) {
              console.log("role in doMatch: " + role);
              const accessToken = sign(
                { email: user.email, id: user.user_id, roles: user.roles },
                authConfig.secret,{
                  expiresIn: 86400 // 24 hours
                });

              user.getRoles({raw: true,})
                .then(roles => {
                  role=roles[0].id;
                  console.log("role after set: " + role);
                  console.log("role before send!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!: " + role)
                  res.json({ token: accessToken, id: user.user_id, fName: user.first_name, lName: user.last_name, email: email, roles:role})
                  }
                )
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


