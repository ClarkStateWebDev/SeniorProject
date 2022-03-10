/************************************************************************** 
Name: index.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: . Models exist between the MySQL database storage and the logic of the application. 

Modified:

**************************************************************************/
const config = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
{
  dialect: config.dialect
});
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("../models/User.model")(sequelize, Sequelize);
db.role = require("../models/roles.model")(sequelize, Sequelize);
db.patient = require("../models/patient.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.user.hasOne(db.patient, {
  foreignKey: "userId",
});

// Uncomment this to create an admin user when app is first deployed. 

/*   db.role.create({
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
  }) */
  

db.ROLES = ["user", "admin"];

module.exports = db;