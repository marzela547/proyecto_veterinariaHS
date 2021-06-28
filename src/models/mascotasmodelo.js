const { Sequelize } = require('sequelize');
const db=require('../config/conexionbd');
const Mascotas=db.define(
    "mascotas",
    {
        Id_mascotas:{
            type: Sequelize.INTEGER,
            primarykey:true,
            autoIncrement: true,
            allowNull: false,
        }, 
        Nom_mascotas:{
            type: Sequelize.VARCHAR(45),
            allowNull: false,
        },
        Peso:{
            type: Sequelize.VARCHAR(45),
            allowNull: false,
        },
        Altura:{
            type: Sequelize.VARCHAR(45),
            allowNull: false,

        },
        Id_raza:{
            type: Sequelize.INTEGER,
            foreingkey:true,
            allowNull: false,
        },
        Id_cliente:{
            type: Sequelize.INTEGER,
            foreingkey:true,
            allowNull: false,
        },
    },
    {
        tableName: "mascotas",
        timestamps: false,
    }
);

module.exports=Mascotas;