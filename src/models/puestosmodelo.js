const { Sequelize } = require('sequelize');
const sequelize = require('sequelize');
const bd = require('../config/conexionbd');
const  puestos = db.define(
"puestos",
{
    Id_puesto: {


    },
    Descrip_puesto:
    {
        type: sequelize.STRING(50),
        alloNull: false
    }

},
{
    tableName: "puestos",
    timestamps: false
}
);
module.exports = puestos