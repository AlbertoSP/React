const express = require('express');

const morgan = require('morgan');
const app = express();
//configuracion
app.set('port', process.env.PORT || 3000)
//middlewares
app.use(morgan('dev'));
app.use(express.json());


//rutas

app.use(require('./routes/tareas.routes'))
//static files




//empezando servidor
app.listen(app.get('port'),  () => {
    console.log(`Server on port ${app.get('port')}`);
})