/************************************************************************** 
Name: admin.routes.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose:

Modified: MAY NOT BE NEEDED AT THIS TIME

**************************************************************************/

/* require() (import) the express module and create an Express application. 
   This object has methods for routing HTTP requests,  */
const express = require('express');

/* require() (import) the user controller. We can then call the controller 
   functions to get the requested data from the user models using the assigned variable name 'users'  */
const users = require("../controllers/Users.controller");

/* Routing refers to how an application’s endpoints (URIs) respond to client requests. 
   Use the express.Router class to create modular, mountable route handlers. A Router 
   instance is a complete middleware and routing system; for this reason, it is often 
   referred to as a “mini-app”.*/
const router = express.Router();

/* require() (import) the AuthMiddleware and assign the variable name 'authJwt'.
   There are two functions in this middleware 'validateToken', and 'isAdmin'
   which will be used to prevent users from making the request unless those functions return true. */
const { validateToken } = require("../middleware/AuthMiddleware");

/* put request to update user information. We do not need to include the user_id in this request because the user_id will be pulled from the request body.
   Include authJwt.validateToken to make sure that the user making this request is logged in.
   'users.updateUser' is the function from the Users.controller that is being called here.  */
router.put('/updateUser/', validateToken, users.updateUser);

/* post request to create a user. Include authJwt.validateToken to make sure that the user making this request is logged in.
   'users.create' is the function from the Users.controller that is being called here. */
router.post('/create',  validateToken, users.create);

/* delete request to delete a user. Include authJwt.validateToken and authJwt.isAdmin to make sure that the user 
   making this request is logged in AND check that the user is an admin.
   'users.deleteUser' is the function from the Users.controller that is being called here.  */
router.delete('/deleteUser/:user_id', validateToken, users.deleteUser);

/*  Used for defining what a module exports and makes available through require(). In this case we export everything. */
module.exports = router;