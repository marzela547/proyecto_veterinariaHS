const Sequelize = require('sequelize');
const base = new Sequelize(
    'vethuellitasdesol', //base de datos
    'movil', //usuario
    'Movil2', //contraseña
    {
        host: 'localhost', //servidor
        dialect: 'mysql', //DBMS
        port: '3306', //puerto
    },
);

module.exports = base;