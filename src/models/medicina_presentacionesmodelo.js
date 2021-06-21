const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const  medicina_presentaciones = db.define(
"medicina_presentaciones",
{
    Id_medicina: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false
    },
    Id_presentacion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false

    }
},
 {
     tableName: "medicina_presentaciones",
     timestamps: false
 }

);
module.exports = medicina_presentaciones;