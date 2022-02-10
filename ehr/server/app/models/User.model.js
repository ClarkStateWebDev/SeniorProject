const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const User = sequelize.define('user', {
        user_id:{
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
        email:{
            type: Sequelize.STRING,
            allowNull: false
        },
        privileges:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "Student"
        },
        password:{
            type: Sequelize.STRING,
            allowNull: false
        },
        created_at:{
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('now')
        },
        updated_at:{
            type: Sequelize.DATE,
            allowNull: false,
            defaultValue: Sequelize.fn('now')
        },
        by_user:{
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: "Student"
        }
    });

    module.exports = User;
