const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('port', process.env.port || 3001);

app.use(morgan('dev'));
app.use(express.json());
app.set('json spaces', 2);
app.use(express.urlencoded({extended: false}));
//app.use(require('./routes/index'));
//app.use('/api/usuarios', require('./routes/usuarios'));
//app.use('/api/empleados', require('./routes/empleados'));

app.listen(app.get('port'), ()=>{
    console.log(`Servidor iniciado, en el puerto ${app.get('port')}`);
});
