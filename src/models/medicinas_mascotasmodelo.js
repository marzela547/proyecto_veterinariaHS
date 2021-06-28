const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const db = require('../config/conexionbd');
const  medicinas_mascotas = db.define(
"medicinas_mascotas",
{
 Id_medicina:
 {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
        model: medicina,
        key: 'Id_medicina',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
 },
 Id_mascotas: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
        model: mascotas,
        key: 'Id_mascotas',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
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