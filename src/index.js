const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
require('./config/passport');
const passport=require('passport');
const session = require('express-session');
app.set('port', process.env.port || 3001);

app.use(morgan('dev'));
app.use(express.json());
app.set('json spaces', 2);
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret:'abcdefg',
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use('/api/login', require('./routes/loginroutes'));
app.use('/api', require('./routes/index'));
app.use('/api/tienda', require('./routes/tiendaroutes'));
app.use('/api/citas', require('./routes/citasroutes'));
app.use('/api/agregar', require('./routes/agregarroutes'));
app.use('/api/historial', require('./routes/historialroutes'));
app.listen(app.get('port'), ()=>{
    console.log(`Servidor iniciado, en el puerto ${app.get('port')}`);
});
