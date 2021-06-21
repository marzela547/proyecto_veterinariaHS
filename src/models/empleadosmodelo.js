const { Sequelize } = require('sequelize');
const sequelize  = require('sequelize');
const db=require('../config/db');
const Empleados=db.define(
    "empleados",
    {
        Id_empleado:{
            type: Sequelize.INTEGER,
            primarykey:true,
            autoIncrement: true,
            allowNull: false,
        }, 
        Nom_empleado:{
            type: Sequelize.VARCHAR(45),
            allowNull: false,
        },
        Correo_empleado:{
            type: Sequelize.VARCHAR(100),
            allowNull: false,
        },
        Tel_empleado:{
            type: Sequelize.VARCHAR(12),
            allowNull: false,

        },
        Id_puesto:{
            type: Sequelize.INTEGER,
            foreingkey: true,
            allowNull: false,

        },
        Genero:{
            type: Sequelize.VARCHAR(1),
            allowNull: false,

        },
        Id_horario:{
            type: Sequelize.INTEGER,
            foreingkey: true,
            allowNull: false,

        },
        Fecha_contratacion:{
            type: Sequelize.DATE,
            allowNull: false,

        },
        Fecha_despido:{
            type: Sequelize.DATE,
            allowNull: false,

        },
        Activo:{
            type: Sequelize.TINYINTEGER(1),

        },

    },
    {
        tableName: "empleados",
        timestamps: false,
    }
);

module.exports=Empleados;