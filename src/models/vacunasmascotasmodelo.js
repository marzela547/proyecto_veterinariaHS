const Sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const VacunasMascotas = bd.define(
    "vacunas_mascotas",
    {
        Id_vacuna: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            references: {
                model: vacunas,
                key: 'Id_vacuna',
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
        Cantidad_minima: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },
    {
        tableName: "vacunas_mascotas",
        timestamps: false
    }
);

module.exports = VacunasMascotas;