const Clientes = require('../models/clientesmodelo');

exports.iniciarSesion = async(req, res)=> {
    const valida = validationResult(req); 

    var mensajes = {
        mensaje: "Datos procesados correctamente",
        data: []
    };

    if(!valida.isEmpty()){
        mensajes.mensaje="Los datos ingresados no son válidos";
        mensajes.data= valida.array();
        return res.status(200).json(mensajes);
    }
    else{
        const {correo, contrasenia} = req.body;
        console.log(req.body);
        const buscar = await Clientes.findOne({
            where: {
                correo:correo,
                activo: true
            }
        });
        if(buscar){
            mensajes.mensaje="El usuario si existe";
            res.status(200).json(mensajes);

        }else{
            mensajes.mensaje="Error";
            res.status(200).json(mensajes);
        }
    }
};

exports.regristrarCliente = async (req, res) => {
    const {Nom_cliente, Tel_cliente, Correo_cliente, Contrasenia, Direc_cliente} = req.body;
    var mensajes = {
        estado: 200,
        mensaje: "Datos ingresados correctamente",
        data: []
    };

    if(Nom_cliente && Tel_cliente && Correo_cliente && Contrasenia && Direc_cliente){

        var agregarCliente = await Clientes.create({
            Nom_cliente: Nom_cliente,
            Tel_cliente: Tel_cliente,
            Correo_cliente,
            Contrasenia: Contrasenia,
            Direc_cliente: Direc_cliente
        });
        mensajes.data=agregarCliente;
        res.status(200).json(mensajes);
    }
    else{
        mensajes.mensaje="Faltan algunos datos necesarios";
        res.status(200).json(mensajes);
    }
};

exports.actualizarContrasenia = async (req, res) => {
    const {id }=req.params;
    const {Contrasenia1, Contrasenia2} = req.body;
    var mensajes = {
        estado: 200,
        mensaje: "Contraseña actualizada",
        data: []
    };

    if(Contrasenia1 && Contrasenia2){

        var actualizarContra = await Clientes.update({
            Nom_cliente: Nom_cliente,
            Tel_cliente: Tel_cliente,
            Correo_cliente,
            Contrasenia: Contrasenia,
            Direc_cliente: Direc_cliente
        });
        mensajes.data=agregarCliente;
        res.status(200).json(mensajes);
    }
    else{
        mensajes.mensaje="Faltan algunos datos necesarios";
        res.status(200).json(mensajes);
    }
};