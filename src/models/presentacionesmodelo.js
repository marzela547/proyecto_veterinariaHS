const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const  presentaciones = db.define(
"presentaciones",
{
Id_presentaciones: {

    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    allowNull: false
},
Descrip_presentacion: { 
    type: sequelize.STRING(50),
    alloNull: false
}
},
{
    tableName: "presentaciones",
    timestamps: false
}
);
module.exports = presentaciones;