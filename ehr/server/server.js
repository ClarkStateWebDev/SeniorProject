/************************************************************************** 
Name: server.js

Created: 31 Jan 2022

Purpose: handles app startup, routing and other functions of application

Modified: 

Modified:

**************************************************************************/

/* require() (import) the express module and create an Express application. 
   This object has methods for routing HTTP requests, configuring middleware, 
   rendering HTML views, registering a template engine, and modifying application 
   settings that control how the application behaves */
const express = require("express");

/* assign the imported express object the name app so we can reference on this page. */
const app = express();

/* Cross-origin resource sharing or CORS is a node.js package for providing a Connect/Express middleware that can be 
   used to enable CORS with various options. CORS is a mechanism that allows restricted resources on a web page to be 
   requested from another domain outside the domain from which the first resource was served. A web page may freely 
   embed cross-origin images, stylesheets, scripts, iframe, and videos. */
const cors = require('cors');

/* MAY NOT BE NEEDED 
 const mysql = require('mysql');
 const session = require('express-session');
 const MySQLStore = require('express-mysql-session')(session); */

 /*  */
const db = require("./app/models");
const errorController = require('./app/controllers/error');
app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); 


app.get("/login", (req, res) => {
  console.log("login page");
});



// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Clark State EHR" });
});

/* set server port, listen for requests to this port.
   The process.env property returns an object containing the user environment.  */
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

/* Call sequelize within the db and sync before listening for requests.
   Sequelize will automatically perform a SQL query to the database. 
   Note that this changes only the table in the database, not the model in the JavaScript side. 
   Then log any errors. */
db.sequelize.sync().then(result =>{
    console.log(result);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch(err => {
      console.log(err);
  });
