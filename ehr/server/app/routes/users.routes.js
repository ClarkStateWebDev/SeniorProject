/************************************************************************** 
Name: user.routes.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: In combination with a request method, define the endpoints at which requests can be made.
         These routes handle all requests to user data.

         authJWT will verify the token and stop requests if the user is not listed as an admin in the DB.

Modified:

**************************************************************************/

/* require() (import) the express module and create an Express application. 
   This object has methods for routing HTTP requests,  */
const express = require('express');

/* Routing refers to how an application’s endpoints (URIs) respond to client requests. 
   Use the express.Router class to create modular, mountable route handlers. A Router 
   instance is a complete middleware and routing system; for this reason, it is often 
   referred to as a “mini-app”.*/
const router = express.Router();

/* require() (import) the user controller. We can then call the controller 
   functions to get the requested data from the user models using the assigned variable name 'users'  */
const users = require("../controllers/Users.controller");

/* require() (import) the AuthMiddleware and assign the variable name 'authJwt'.
   There are two functions in this middleware 'validateToken', and 'isAdmin'
   which will be used to prevent users from making the request unless those functions return true. */
const authJwt = require("../middleware/AuthMiddleware");

/* get request to getAll users. Include authJwt.validateToken and authJwt.isAdmin to make sure that the user 
   making this request is logged in AND check that the user is an admin. 
   'users.getAll' is the function from the Users.controller that is being called here. */
router.get('/getAll', [authJwt.validateToken, authJwt.isAdmin], users.getAll);

/* get request to get and individual user. ':user_id' will be the users id that you wish to query. 
   Include authJwt.validateToken to make sure that the user making this request is logged in  
   'users.getUser' is the function from the Users.controller that is being called here. */
router.get('/getUser/:user_id', authJwt.validateToken, users.getUser);

/* put request to update user information. We do not need to include the user_id in this request because the user_id will be pulled from the request body.
   Include authJwt.validateToken to make sure that the user making this request is logged in.
   'users.updateUser' is the function from the Users.controller that is being called here.  */
router.put('/updateUser/', authJwt.validateToken, users.updateUser);

/* post request to create a user. Include authJwt.validateToken to make sure that the user making this request is logged in.
   'users.create' is the function from the Users.controller that is being called here. */
router.post('/create',  authJwt.validateToken, users.create);

/* delete request to delete a user. Include authJwt.validateToken and authJwt.isAdmin to make sure that the user 
   making this request is logged in AND check that the user is an admin.
   'users.deleteUser' is the function from the Users.controller that is being called here.  */
router.delete('/deleteUser/:user_id', [authJwt.validateToken, authJwt.isAdmin], users.deleteUser);

/* post request to login the user. There is no need to include authJwt.validateToken OR authJwt.isAdmin because the user is not
   logged in so these will return false. */
router.post('/login', users.login);

/* MAY NOT BE NEEDED. */
router.get("/auth", authJwt.validateToken, users.auth);

/*  Used for defining what a module exports and makes available through require(). In this case we export everything. */
module.exports = router;