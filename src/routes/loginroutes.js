const {Router } = require('express');
const controladorlogin = require('../controllers/logincontroller');
const Cliente = require('../models/clientesmodelo');
const {body } = require('express-validator');
const router = Router();
router.post('/login', body('Correo_cliente').isEmail().withMessage('Formato de correo inválido'),
            body('Contrasenia').isLength({min: 8}).withMessage("Contraseña debe tener mínimo 8 caracteres"), controladorlogin.iniciarSesion );

router.post('/',  body('Correo_cliente').isEmail().withMessage('Formato de correo inválido'), body('Contrasenia')
            .isLength({min:6}).withMessage('La longitud mínima de la contraseña es de 6 caracteres'), body('Nom_cliente')
            .isLength({min:3}).withMessage('La longitud mínima del nombre es de 3 caracteres'),
            body('Correo_cliente')
            .custom(
                value => {
                    return Cliente.findOne({
                        where: {
                            Correo_cliente: value,
                        }
                    }).then(data => {
                        if(data)
                        {
                            return Promise.reject('El correo ya se encuentra en uso');
                        }
                    });
                }
            ).withMessage('El correo ya se encuentra en uso'), controladorlogin.regristrarCliente);



module.exports=router;