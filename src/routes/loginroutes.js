const {Router } = require('express');
const controladorlogin = require('../controllers/logincontroller');
const router = Router();
router.get('/', controladorlogin.iniciarSesion);

module.exports=router;