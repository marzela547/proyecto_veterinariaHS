const { Sequelize } = require('sequelize');
const sequelize  = require('sequelize');
const db=require('../config/db');
const Horarios=db.define(
    "horarios",
    {
        Id_horario:{
            type: Sequelize.INTEGER,
            primarykey:true,
            autoIncrement: true,
            allowNull: false,
        }, 
        Descrip_horario:{
            type: Sequelize.VARCHAR(10),
            allowNull: false,
        },
        

    },
    {
        tableName: "horarios",
        timestamps: false,
    }
);

module.exports=Horarios;