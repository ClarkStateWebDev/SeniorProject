/************************************************************************** 
Name: server.js

Created: 31 Jan 2022

Purpose: handles app startup, routing and other functions of application

Modified: 

Modified:

**************************************************************************/

const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const app = express();
const db = require("./app/models");
const errorController = require('./app/controllers/error');
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 


app.get("/login", (req, res) => {
  //res.json({ message: "Welcome to Clark State EHR" });
  console.log("login page");
});



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Clark State EHR" });
  //console.log("login: " +  res.locals.isAuthenticated);
});


app.get("/404", (req, res) => {
  console.log("Error 404")
});


// set port, listen for requests
const PORT = process.env.PORT || 3001;

/* routes to communicate between front/back end */
const userRoutes = require("./app/routes/users.routes");
const patientRoutes = require("./app/routes/patients.routes");
const { sequelize } = require("./app/models");
require('./app/routes/forgotPassword')(app);
require('./app/routes/resetPassword')(app);
require('./app/routes/updatePasswordViaEmail')(app);

/* use the created routes */
app.use("/user", userRoutes);
app.use("/patient", patientRoutes);
app.use(errorController.get404);
/* app.use((error, req, res, next) => {
  res.status(500).render('500', {
    pageTitle: 'Error!',
    path: '/500',
    isAuthenticated: req.session.isLoggedIn
  });
}); */


/* Call sequelize within the db and sync before listening for requests.
Sequelize will automatically perform an SQL query to the database. 
Note that this changes only the table in the database, not the model in the JavaScript side. 
Then log any errors.
*/

db.sequelize.sync().then(result =>{
    console.log(result);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch(err => {
      console.log(err);
  });
