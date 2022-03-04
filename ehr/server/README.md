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
      

### 2. Run
```
node server.js
```

### 3. Open http://localhost:8080/ in your browser
You will see the message "Welcome to Clark State EHR"

---