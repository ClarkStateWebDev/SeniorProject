/************************************************************************** 
Name: patient.controller.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: functions that separate out the code to route requests from the code that actually processes requests
         These controllers are all of the patient functions. 

Modified:

**************************************************************************/
const db = require("../models")
const Patient = db.patient;
const User = require('../models/User.model.js');

exports.getAllPatients = (req, res, next) => {
    Patient.findAll()
    .then((data) => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
    });
  };

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

  exports.deletePatient = (req, res, next) => {
    const patient_id = req.params.patient_id;
    Patient.destroy({
      where: {
        patient_id: patient_id
      },
    });
    res.json("DELETED SUCCESSFULLY");
  };

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
