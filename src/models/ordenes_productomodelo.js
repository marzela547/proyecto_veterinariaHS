const { Sequelize } = require('sequelize');
const db=require('../config/conexionbd');
const  ordenes_producto = db.define(
"ordenes_producto",
{
Id_orden:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
        model: ordenes,
        key: 'Id_orden',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
    }
},
Id_producto: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNull: false,
    references: {
        model: productos,
        key: 'Id_producto',
        deferrable: Deferrable.INITIALLY_IMMEDIATE
    }

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