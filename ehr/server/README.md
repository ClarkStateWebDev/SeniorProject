# Node.js Rest API with Express & MySQL

## Project Information
* This project is the backend/server for the Clark State EHR application.
* Uses Express for building REST API
* Uses Sequelize to interact with the MySQL Database
---

## Project Prerequisites
The following must be installed on your machine before you can run this project.
* MySQL server
* Git
* Node.js and npm 
---


## Project Setup

### 1. Database configuration
* To run the project, you must have MySQL server installed and **running** on the host machine. 
* You must create a schema/database called "clark_state_ehr" if it has not already been created
* You will then need to configure the following files to reflect the desired MySQL username and password:
	* server.js
	* app/utils/database.js

### 2. Clone or download code

### 3. Open Git Bash in the root folder of the project (/server) and install dependencies by running
```
npm install
```

### 4. Start the project by running the following command in Git Bash
```
node server.js
```

### 3. Open http://localhost:3001/ in your browser
You will see a message that says "Welcome to Clark State EHR"

---


## Project Structure Information

### Configure & Connect to MySQL database
1. File containing Sequelize configuration is app/utils/database.js
In the file app/utils/database.js you will see the following. Make sure to update this to reflect your user and password and that your user has admin access to the clark_state_ehr database.

	const sequelize = new Sequelize('clark_state_ehr', 'user, 'password', {
   		 dialect: 'mysql'
	});
	

2. create a database connection that uses configuration above.
The database connection is setup in the server.js file. Make sure to update this to reflect your user and password and that your user has admin access to the clark_state_ehr database.

	const databaseTest = mysql.createConnection({
  	user: 'user',
  	host: '127.0.0.1',
 	 password: 'password',
 	 database: 'clark_state_ehr'
	});


### Models
Currently, the models are setup so that when the app is started, a database table called "users" will be created if it does not already exist.

---

## Project Information

* Uses Express for building REST API
* cors provides Express middleware to enable CORS with various options.
* cors origin: http://localhost:8081
* Initially have defined a simple GET route for testing
* listens on port 8080 for incoming requests
* MySQL DB configuration located in app/utils/database.js
* MySQL DB connection created in server.js
* Note that as of version 4.16+ express now has body-parser built in so there is no need to install it as a dependency.

For detailed info on how this was created, visit: [Build Node.js Rest APIs with Express & MySQL](https://www.bezkoder.com/node-js-rest-api-express-mysql/)

---

