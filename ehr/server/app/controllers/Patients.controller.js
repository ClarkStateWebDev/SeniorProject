/************************************************************************** 
Name: patient.controller.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: functions that separate out the code to route requests from the code that actually processes requests
         These controllers are all of the patient functions. 

Modified:

**************************************************************************/
/* require() (import) models */
const db = require("../models")
/* require() (import) patient models */
const Patient = db.patient;
/* NOT NEEDED PROBABLY. WHO KNOWS REALLY */
const User = require('../models/User.model.js');

/* export getAllPatients function from the module so it can be used by other programs with the import statement.
   There are not any require params for this function. This function will return all patients in JSON format. 
*/
exports.getAllPatients = (req, res, next) => {
    Patient.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
  };

 /* export getPatient function from the module so it can be used by other programs with the import statement.
    A patient ID is required for this function. This function will return that patient in JSON format.
*/ 
exports.getPatient = (req, res, next) => {
  const patient_id = req.params.patient_id;
  Patient.findAll( {
    where: {
      patient_id: patient_id
    },
  })
  .then((data) => {
    console.log("DataDATA: " + data)
    res.json(data);
  })
  .catch(err => {
    console.log(err);
  });
};

/* export updatePatient function from the module so it can be used by other programs with the import statement.
   This function has optional params of {firstName, lastName, date_birth, bio_sex, gender, userId}
   patient_id is required. 
   This function will update the patient information based on which params are sent. 
   The only return will be a success message. 
*/
exports.updatePatient = (req, res, next) => {
  const {patient_id, firstName, lastName, date_birth, bio_sex, gender, userId} = req.body;
  console.log(req.body);
    Patient.update({
      first_name: firstName,
      last_name:lastName,
      date_of_birth: date_birth,
      biological_sex: bio_sex,
      gender: gender,
      userId: userId
    },{where: {patient_id: patient_id} }
    ).catch(err => {
      console.log(err);
    });
    res.json("SUCCESS");
};

/* export createPatient function from the module so it can be used by other programs with the import statement.
   { firstName, lastName, date_birth, bio_sex, gender, userId } are required for this function. 
   If no information is sent and error message will be returned.
   The medID is created using a random number.
   If successful a 'success' message will be returned. 
*/
exports.createPatient = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    randomNumber = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

    const { firstName, lastName, date_birth, bio_sex, gender, userId } = req.body;
    const medId = randomNumber(1,99999999)
      Patient.create({
        first_name: firstName,
        last_name:lastName,
        date_of_birth: date_birth,
        biological_sex: bio_sex,
        gender: gender,
        medical_record_number: medId,
        userId: userId
      }).catch(err => {
          console.log("Patient Add Error")
        console.log(err);
      });        
      res.json("SUCCESS");
  };

/* export deletePatient function from the module so it can be used by other programs with the import statement.
   This function requires a patient_id param. 
   This function will delete the patient based on the patient id sent. 
   On success a 'success' message will be returned. 
*/
  exports.deletePatient = (req, res, next) => {
    const patient_id = req.params.patient_id;
    Patient.destroy({
      where: {
        patient_id: patient_id
      },
    });
    res.json("DELETED SUCCESSFULLY");
  };

/* export getUserPatient function from the module so it can be used by other programs with the import statement.
   user_id is required for this function. 
   This function will find patients that are assigned to that user, then return in JSON format
*/
  exports.getUserPatient = (req, res, next) => {
    const user_id = req.params.user_id;
    Patient.findAll( {
      where: {
        userId: user_id
      },
    })
    .then((data) => {
      console.log("DataDATAdata: " + data)
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
  };
