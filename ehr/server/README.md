# Server Information

* Uses Express for building REST API
* cors provides Express middleware to enable CORS with various options.
* cors origin: http://localhost:8081
* Initially have defined a simple GET route for testing
* listens on port 3001 for incoming requests
* MySQL DB configuration located in app/config/db.config.js
* Note that as of version 4.16+ express now has body-parser built in so there is no need to install it as a dependency.

## Installation and Setup
If this is your fist time running the app you will need to GitBash to the server folder and follow these steps: 

### Step one: **Install all dependencies.**
```bash
npm install
```
### Step two: **Configure database, JWT, and the email service.**

Connect your database using your table name, user, and password. Do not change the dialect unless the email server has changed. This can be set in: ***server/app/config/db.config.js.*** It will look like the following code.
```javascript
module.exports = {
    HOST: "localhost",
    USER: "YourUserName",
    PASSWORD: "YourPassword",
    DB: "YourTableName",
    dialect: "mysql"
 };
```
Add secret code to : ***server/app/config/auth.config.js.*** The secret code is whatever you want it to be.
```javascript
module.exports = {
    secret: "secret password"
 };
```
Add password to: ***server/app/config/email.config.js.***
```javascript
module.exports = {
    USER: "",
    PASSWORD: "",
    SERVICE: ""
  };
```

### Step three: **Create tables and an admin user using sequelize.**

In server.js change the following line. 

**FROM:**
```javascript
db.sequelize.sync().then(result =>{
```

**TO:**
```javascript
db.sequelize.sync({force:true).then(result =>{
```
This will create the tables needed to run the current app. **After you run the app the first time and your tables are created change the code back or your tables will be dropped and your application will not work.**
You will now uncomment the following code in ***server/app/models/index.js*** 
```javascript
  db.role.create({
    id: 1,
    name:"user"
  })

  db.role.create({
    id: 2,
    name:"admin"
  })

  db.user.create({
  email:"admin@admin.com", 
  first_name:"Admin", 
  last_name:"Admin", 
  isAdmin:1, 
  password:"$2b$10$fX4p.34jAVzw/Nq622G/BOewxZG3Gl/Y34ytc88dxaFHDrvoqwS56"}
  ).then(user => {
    user.setRoles(2);
  }) 
  
  db.user.create({
  email:"user@user.com", 
  first_name:"User", 
  last_name:"User", 
  isAdmin:0, 
  password:"$2b$10$fX4p.34jAVzw/Nq622G/BOewxZG3Gl/Y34ytc88dxaFHDrvoqwS56"}
  ).then(user => {
    user.setRoles(1);
  }) 
```

This will create the initial Admin and User account. The password is the encrypted password so do not change anything. **After you run the app and the users are created comment it back** or it will keep creating that Admin and User account.

The login information is:

**Email: admin@admin.com Password: password**

**Email: user@user.com Password: password**

After you create an admin and user account through the app feel free to delete these Admin and User accounts. These are only so you can login as an admin or user to test the functionality. If you delete these accounts without creating another admin account you will lose the ability to create additional users unless you create the admin account again through the script. 
```javascript
  db.user.create({
  email:"admin@admin.com", 
  first_name:"Admin", 
  last_name:"Admin", 
  isAdmin:1, 
  password:"$2b$10$fX4p.34jAVzw/Nq622G/BOewxZG3Gl/Y34ytc88dxaFHDrvoqwS56"}
  ).then(user => {
    user.setRoles(2);
  }) 
```
You will not have to follow these steps again. This is only to create the tables.
## Troubleshooting
If you are having issues creating your initial database reread the instructions and try again. Make sure that your **user, roles, and user_roles** tables have been create. If not then something went wrong during the process. If you are still having issues refer to the [sequelize](https://sequelize.org/master/index.html) documentation to better understand how it is creating the tables.
