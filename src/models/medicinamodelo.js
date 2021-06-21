const { Sequelize } = require('sequelize');
const sequelize  = require('sequelize');
const db=require('../config/db');
const Medicina=db.define(
    "medicinas",
    {
        Id_medicina:{
            type: Sequelize.INTEGER,
            primarykey:true,
            autoIncrement: true,
            allowNull: false,
        }, 
        Descrip_medicina:{
            type: Sequelize.VARCHAR(50),
            allowNull: false,
        },

    },
    {
        tableName: "medicinas",
        timestamps: false,
    }
);

module.exports=Medicina;