const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

// crear el servidor de express

const app = express();

//Configurar CORS
app.use(cors());

//base de datos
dbConnection();

//Rutas
app.get( '/', (req, res) => {

    res.json({
        ok: true,
        msg: 'hola mundo'
    })

});







app.listen( process.env.PORT, () =>{
    console.log('servidor corriendo en puerto' + process.env.PORT)
});