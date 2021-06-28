const { Sequelize } = require('sequelize');
const db = require('../config/conexionbd');
const  medicina_presentaciones = db.define(
"medicina_presentaciones",
{
    Id_medicina: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: medicina,
            key: 'Id_medicina',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
    Id_presentacion: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: presentaciones,
            key: 'Id_presentacion',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    }
},
 {
     tableName: "medicina_presentaciones",
     timestamps: false
 }

);
module.exports = medicina_presentaciones;