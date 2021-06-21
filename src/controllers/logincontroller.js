const Clientes = require('../models/clientesmodelo'); //se manda a traer el modelo de la tabla que se va a ocupar

const TipoProductos = require('../models/tipoproductosmodelo');

exports.iniciarSesion = async(req, res)=>{ //Aqui se declara la función que nosotros utilizaremos para hacer las consultas

    const {correo, contrasena} = req.body; //Declaramos un objeto (supongamos que es objeto xd) el cual recibirá los datos que nosotros
                                          //le mandamos por medio de la aplicación (el postman en este caso)

    const buscar = await Clientes.findOne({ //aquí hacemos la consulta a la tabla y le pedimos que nos traiga UN SOLO usuario
        where: { //Le mandamos la condición WHERE
            correo: correo, //Comparamos correo, contraseña y si el usuario está activo, esa son las condiciones del WHERE
            contrasena: contrasena,
            activo: true
        }
    })

    if(buscar){ //Verificamos si encontró al usuario o no
        console.log("Usuario existe"); //Si lo encontró, le mandamos a imprimir en la consola este mensaje
    }else{
        console.log("Usuario no existe"); //Y si no lo encontró, le mandamos a imprimir en la consola este mensaje este otro
    }
};

exports.listatipoproductos= async (req, res) => { //Aqui pasa lo mismo que arriba, declaramos la función
    var mensajes = { //declaramos un objeto con diferentes campos como el estado que retornará la consulta, el mensaje que 
                    //se mostrará y el arreglo que obtuvo de la consulta
        estado: 200,
        mensaje: "Datos procesados correctamente",
        data: []
    };
    var listaUsuario = await TipoProductos.findAll(); //Aquí mandamos a pedir todos los datos de la tabla TipoProductos
    mensajes.data = listaUsuario; //Aquí le ingresamos esos al objeto con id de data
    res.status(200).json(mensajes); //Devolvemos el objeto mensaje
};