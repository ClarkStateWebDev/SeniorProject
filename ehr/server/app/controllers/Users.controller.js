const User = require('../models/User.model.js');

exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  User.create({
    first_name: firstName,
    last_name:lastName,
    email: email,
    password: password
  }).catch(err => {
    console.log(err);
  });
  
};

exports.getAll = (req, res, next) => {
  User.findAll()
  .then((data) => {
    res.json(data);
  })
  .catch(err => {
    console.log(err);
  });
};
