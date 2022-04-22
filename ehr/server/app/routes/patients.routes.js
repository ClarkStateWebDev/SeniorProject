/************************************************************************** 
Name: patients.routes.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: In combination with a request method, define the endpoints at which requests can be made.
         These routes handle all requests to patient data.

         authJWT will verify the token and stop requests if the user is not listed as an admin in the DB.

Modified: 20 Feb 2022 - Blaylock - Add updatePatient, createPatient, deletePatient

**************************************************************************/

/* require() (import) the express module and create an Express application. 
   This object has methods for routing HTTP requests,  */
const express = require('express');

/* require() (import) the patient controller. We can then call the controller 
   functions to get the requested data from the patient models using the assigned variable name 'patient'  */
const patients = require("../controllers//Patients.controller");

/* Routing refers to how an application’s endpoints (URIs) respond to client requests. 
   Use the express.Router class to create modular, mountable route handlers. A Router 
   instance is a complete middleware and routing system; for this reason, it is often 
   referred to as a “mini-app”.*/
const router = express.Router();

/* require() (import) the AuthMiddleware and assign the variable name 'authJwt'.
   There are two functions in this middleware 'validateToken', and 'isAdmin'
   which will be used to prevent users from making the request unless those functions return true. */
const authJwt = require("../middleware/AuthMiddleware");

/* get request to getAll patients. Include authJwt.validateToken and authJwt.isAdmin to make sure that the user 
   making this request is logged in AND check that the user is an admin. 
   'patients.getAllPatients' is the function from the patients.controller that is being called here. */
router.get('/getAllPatients',   [authJwt.validateToken, authJwt.isAdmin], patients.getAllPatients);

/* get request to get an individual patient. ':patient_id' will be the patients id that you wish to query. 
   Include authJwt.validateToken to make sure that the user making this request is logged in  
   'patients.getPatient' is the function from the Patients.controller that is being called here. */
router.get('/getPatient/:patient_id', authJwt.validateToken, patients.getPatient);

/* get request to get patient assigned to a user. ':user_id' will be the user id that you wish to query. 
   Include authJwt.validateToken to make sure that the user making this request is logged in  
   'patients.getUserPatient' is the function from the Patients.controller that is being called here. */
router.get('/getUserPatient/:user_id', /* authJwt.validateToken, */ patients.getUserPatient);

/* put request to update user information. We do not need to include the patient_id in this request because the patient_id will 
   be pulled from the request body. Include authJwt.validateToken to make sure that the user making this request is logged in.
   'patients.updatePatient' is the function from the Patients.controller that is being called here.  */
router.put('/updatePatient/', authJwt.validateToken, patients.updatePatient);

/* post request to create a patient. Include authJwt.validateToken to make sure that the user making this request is logged in.
   'patients.createPatient' is the function from the Patients.controller that is being called here. */
router.post('/createPatient', [authJwt.validateToken, authJwt.isAdmin], patients.createPatient);

/* delete request to delete a patient based on the patient_id you send. Include authJwt.validateToken and authJwt.isAdmin 
   to make sure that the user making this request is logged in AND check that the user is an admin.
   'patients.deletePatient' is the function from the Patients.controller that is being called here.  */
router.delete('/deletePatient/:patient_id', [authJwt.validateToken, authJwt.isAdmin], patients.deletePatient);

/*  Used for defining what a module exports and makes available through require(). In this case we export everything. */
module.exports = router;