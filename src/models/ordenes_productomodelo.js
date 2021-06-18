const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const  ordenes_producto = db.define(
"ordenes_producto",
{
Id_orden:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    allowNull: false
},
Id_producto: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false,
    allowNull: false

},
Cantidad: {
    type: sequelize.STRING(45),
    alloNull: false
}
},
{
    tableName: "ordenes_producto",
    timestamps: false
}
);
module.exports = ordenes_producto;