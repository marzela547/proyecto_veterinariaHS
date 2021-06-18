const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const  medicinas_mascotas = db.define(
"medicinas_mascotas",
{
 Id_medicina:
 {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    allowNull: false
    
 },
 Id_mascotas: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    allowNull: false
 },
    Cantidad: { 
        type: sequelize.INTEGER,
        alloNull: false,
    }

    
},
{
    tableName: "medicinas_mascotas",
    timestamps: false
}
);
module.exports = medicinas_mascotas;