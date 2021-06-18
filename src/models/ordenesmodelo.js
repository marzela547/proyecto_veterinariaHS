const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const  ordenes = db.define(
"ordenes",
{
Id_orden: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false

},
Anotaciones: {
    type: sequelize.STRING(200),
    alloNull: true,
},
Id_cliente:{
    type: sequelize.INTEGER,
    alloNull: false,
},
Subtotal: {
    type: sequelize.DOUBLE,
    alloNull: false,

},
Impuestos:{

    type: sequelize.DOUBLE,
    alloNull: true,
},
Descuento:{
    type: sequelize.DOUBLE,
    alloNull: true,
}
},
{
    tableName: "ordenes",
    timestamps: false
}
);
module.exports = ordenes;