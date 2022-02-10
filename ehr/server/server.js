const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const app = express();

const sequelize = require('./app/utils/database');
const User = require("./app/models/User.model");

/* //Configures the Access-Control-Allow-Origin CORS header.
var corsOptions = {
  origin: "http://localhost:8081"
}; */

/* app.use(cors(corsOptions)); */

app.use(cors());
// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Clark State EHR" });
});
// set port, listen for requests
const PORT = process.env.PORT || 3001;
//require("./app/routes/tutorial.routes.js")(app);
const userRoutes = require("./app/routes/users.routes");

const databaseTest = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'password',
  database: 'clark_state_ehr'
});

app.use(userRoutes);


app.delete('/user/delete', (req, res) => {
  const user_id = req.body.user_id;
  databaseTest.query(
      'DELETE FROM users WHERE user_id = ?', 
      [user_id],
      (err, result) => {
          if(err){
              console.log(err);
          } else {
              console.log("User Deleted");
          }
      }
  ); // insert array and '?' for security purposes
});

sequelize.sync().then(result =>{
    console.log(result);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch(err => {
      console.log(err);
  });
