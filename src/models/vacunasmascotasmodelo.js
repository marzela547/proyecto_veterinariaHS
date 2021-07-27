const Sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const VacunasMascotas = bd.define(
    "vacunas_mascotas",
    {
        Id_vacuna: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            foreignKey: true,
            allowNull: false
        },
        Id_mascotas: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            foreignKey: true,
            allowNull: false
        },
        Cantidad_minima: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        Fecha_primera: {
            type: Sequelize.DATE,
            allowNull: true
        },
        Fecha_segunda: {
            type: Sequelize.DATE,
            allowNull: true
        }
    },
    {
        tableName: "vacunas_mascotas",
        timestamps: false
    }
);

module.exports = VacunasMascotas;