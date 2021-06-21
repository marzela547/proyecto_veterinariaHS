const { Sequelize } = require('sequelize');
const sequelize  = require('sequelize');
const db=require('../config/db');
const Citas=db.define(
    "citas",
    {
        Id:{
            type: Sequelize.INTEGER,
            primarykey:true,
            autoIncrement: true,
            allowNull: false,
        }, 
        Fecha_cita:{
            type: Sequelize.DATETIME,
            allowNull: false,
        },
        Id_tipo_cita:{
            type: Sequelize.INTEGER,
            foreingkey: true,
            allowNull: false,
        },
        Id_cliente:{
            type: Sequelize.INTEGER,
            foreingkey: true,
            allowNull: false,

        },

    },
    {
        tableName: "citas",
        timestamps: false,
    }
);

module.exports=Citas;