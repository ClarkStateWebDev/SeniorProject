/************************************************************************** 
Name: patients.routes.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: In combination with a request method, define the endpoints at which requests can be made.
         These routes handle all requests to patient data.

         authJWT will verify the token and stop requests if the user is not listed as an admin in the DB.

Modified: 20 Feb 2022 - Blaylock - Add updatePatient, createPatient, deletePatient

**************************************************************************/
const express = require('express');
const patients = require("../controllers//Patients.controller");
const router = express.Router();
const authJwt = require("../middleware/AuthMiddleware");

router.get('/getAllPatients',   [authJwt.validateToken, authJwt.isAdmin], patients.getAllPatients);

router.get('/getPatient/:patient_id', authJwt.validateToken, patients.getPatient);

router.get('/getUserPatient/:user_id', /* authJwt.validateToken, */ patients.getUserPatient);

router.put('/updatePatient/', authJwt.validateToken, patients.updatePatient);

router.post('/createPatient', [authJwt.validateToken, authJwt.isAdmin], patients.createPatient);

router.delete('/deletePatient/:patient_id', [authJwt.validateToken, authJwt.isAdmin], patients.deletePatient);

module.exports = router;