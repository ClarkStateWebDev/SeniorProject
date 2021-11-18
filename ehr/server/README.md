# Node.js Rest API with Express & MySQL

## Project Information

* Uses Express for building REST API
* cors provides Express middleware to enable CORS with various options.
* cors origin: http://localhost:8081
* Initially have defined a simple GET route for testing
* listens on port 8080 for incoming requests
* MySQL DB configuration located in app/config/db.config.js
* Note that as of version 4.16+ express now has body-parser built in so there is no need to install it as a dependency.

For detailed info on how this was created, visit: [Build Node.js Rest APIs with Express & MySQL](https://www.bezkoder.com/node-js-rest-api-express-mysql/)

---
## To run the project

### 1. Install dependencies
```
npm install
```

### 2. Run
```
node server.js
```

### 3. Open http://localhost:8080/ in your browser
You will see the message "Welcome to Clark State EHR"

---

## Project Structure Information

### Configure & Connect to MySQL database
1. Folder for configuration is app/config/db
In the file app/config/db.config.js you will see the following
        module.exports = {
		 HOST: "localhost",
         USER: "root",
         PASSWORD: "123456",
         DB: "testdb"
        };


2. create a database connection that uses configuration above.
The file for connection is db.js, we put it in app/models folder that will contain model in the next step.

		const mysql = require("mysql");
		const dbConfig = require("../config/db.config.js");

        // Create a connection to the database
        const connection = mysql.createConnection({
          host: dbConfig.HOST,
          user: dbConfig.USER,
          password: dbConfig.PASSWORD,
          database: dbConfig.DB
        });
        
        // open the MySQL connection
        connection.connect(error => {
          if (error) throw error;
          console.log("Successfully connected to the database.");
        });
        
        module.exports = connection;

### Define the Model
In models folder, there is a file called tutorial.model.js. Here, we've defined a constructor for Tutorial object, and we use the database connection above to write CRUD functions:
*create a new Tutorial
*find a Tutorial by id
*get all Tutorials
*get all published Tutorials
*update a Tutorial by id
*remove a Tutorial
*remove all Tutorials

### Define Routes

When a client sends request for an endpoint using HTTP request (GET, POST, PUT, DELETE), we need to determine how the server will response. It’s why we’re gonna setup the routes.

These are routes we define:

    /tutorials: GET, POST, DELETE
    /tutorials/:id: GET, PUT, DELETE

Create a routes folder inside app folder, then create tutorial.routes.js file

### Create the Controller

Now we create a controllers folder inside app folder, then we have a file named tutorial.controller.js. Our controller will be written inside this with CRUD functions:

* create
* findAll
*findOne
*findAllPublished
*update
*delete
*deleteAll

---

## Test the API 
Use Postman to test the API

1. Open Postman

2. Run the Node.js application with command: node server.js.
The console should show:

    Server is running on port 8080.
    Successfully connected to the database.
    
3. Using Postman, test all the APIs above.

Create a new Tutorial using **POST /tutorials**  API

[![Postman screenshot](https://www.bezkoder.com/wp-content/uploads/2019/09/nodejs-rest-api-express-mysql-create-tutorial.png)]
