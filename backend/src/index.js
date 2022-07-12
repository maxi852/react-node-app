'use strict'

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

const port = 4000;

let url = 'mongodb://localhost:27017/api_rest_react';

mongoose.Promise = global.Promise; //evita fallos en la conexión

let articleRoutes = require('./routes/routesArticle');

app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

//cors permite peticiones AJAX y HTTP desde el frontend. Permitimos el uso de las funciones
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KYE, Origin, X-Requested-With, Content-type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next(); 
})

app.use('./api', articleRoutes)

mongoose.connect(url, {useNewUrlParser: true})
.then(() => {
    console.log('Conexión a la base de datos realizada con éxito');
    app.listen(port, () => {
        console.log('Corriendo aplicación en el puerto ' + port);
    }
    )
})