/************************************************************************** 
Name: user.routes.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: In combination with a request method, define the endpoints at which requests can be made.
         These routes handle all requests to user data.

         authJWT will verify the token and stop requests if the user is not listed as an admin in the DB.

Modified:

**************************************************************************/
const express = require('express');
const users = require("../controllers/Users.controller");
const router = express.Router();
const authJwt = require("../middleware/AuthMiddleware");

router.get('/getAll', [authJwt.validateToken, authJwt.isAdmin], users.getAll);

router.get('/getUser/:user_id', authJwt.validateToken, users.getUser);

router.put('/updateUser/', authJwt.validateToken, users.updateUser);

router.post('/create',  authJwt.validateToken, users.create);

router.delete('/deleteUser/:user_id', [authJwt.validateToken, authJwt.isAdmin], users.deleteUser);

router.post('/login', users.login);

router.get("/auth", authJwt.validateToken, users.auth);

module.exports = router;