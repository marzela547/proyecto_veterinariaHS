const { Sequelize } = require('sequelize');
const sequelize  = require('sequelize');
const db=require('../config/db');
const Marcas=db.define(
    "marcas",
    {
        Id_marca:{
            type: Sequelize.INTEGER,
            primarykey:true,
            autoIncrement: true,
            allowNull: false,
        }, 
        Nom_marca:{
            type: Sequelize.VARCHAR(50),
            allowNull: false,
        },

    },
    {
        tableName: "marcas",
        timestamps: false,
    }
);

module.exports=Marcas;