const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const  productos = db.define(
"productos",
{
 Id_producto: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false

 },
 Descrip_producto: {
    type: sequelize.STRING(70),
    alloNull: false

 },
 Expiracion: {
    type: sequelize.DATE, //hay que cambiarlo pk no se la variable
    alloNull: true

 },
 Cantidad: {

    type: sequelize.INTEGER,
    alloNull: true
 },
 Id_marca: {
    type: sequelize.INTEGER,
    alloNull: false
 },
 Activo: {
    type: sequelize.BOOLEAN,//hay que cambiarlo pk no se la variable
    alloNull: false

 }


},
{
    tableName: "productos",
    timestamps: false
}
);
module.exports = productos