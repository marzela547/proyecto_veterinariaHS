const { Sequelize } = require('sequelize');
const Sequelize  = require('sequelize');
const bcrypt = require('bcrypt');
const db=require('../config/db');
const Clientes=db.define(
    "clientes",
    {
        Id_cliente:{
            type: Sequelize.INTEGER,
            primarykey:true,
            autoIncrement: true,
            allowNull: false,
            validate: {
                is:{
                    args: [/^[0-9]+$/],
                    msg: "ID del cliente invalido."
                }
            },
        },
        Nom_cliente:{
            type: Sequelize.VARCHAR(45),
            allowNull: false,
        },
        Tel_cliente:{
            type: Sequelize.VARCHAR(12),
            allowNull: false,

        },
        Correo_cliente:{
            type: Sequelize.VARCHAR(100),
            allowNull: false,
        },

        Contrasenia:{
            type: Sequelize.VARCHAR(250),
            allowNull: false,

        },
        Direc_cliente:{
            type: Sequelize.VARCHAR(250),
            allowNull: false,

        },
    },
    {
        tableName: "clientes",
        timestamps: false,
        hook: {
            beforeCreate(cliente){
                const hash = bcrypt.hashSync(cliente.contrasenia, 10);
                cliente.contrasenia = hash;
            },
            beforeUpdate(cliente) {
                const hash = bcrypt.hashSync(cliente.contrasenia, 10);
                cliente.contrasenia = hash;
            }
        }
    }
);

Clientes.verificarContrasena=(con)=>{
    return bcrypt.compareSync(con, this.contrasenia);
}

module.exports=Clientes;