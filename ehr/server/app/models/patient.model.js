/************************************************************************** 
Name: patient.model.js

Created: 19 Feb 2022

Author: Blaylock 

Purpose: Models exist between the MySQL database storage and the logic of the application. 
         This is the Patient model.

Modified:

**************************************************************************/
const Sequelize = require('sequelize');

const sequelize = require('../utils/database');
module.exports = (sequelize, Sequelize) => {
    const Patient = sequelize.define('patients', {
        patient_id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        first_name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        last_name:{
            type: Sequelize.STRING,
            allowNull: false
        },
        date_of_birth:{
            type: Sequelize.DATEONLY,
            allowNull: false
        },
        biological_sex:{
            type: Sequelize.STRING,
            allowNull: false
        },
        gender:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 0
        },
        medical_record_number: {
            type:Sequelize.INTEGER
        },
        by_user:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "Admin"
        },
    });
    return Patient;
};
