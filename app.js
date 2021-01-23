//Vamos a incluir todas las dependencias
const express = require('express');
const jwt = require('jsonwebtoken');

//Creamos la app con express
const app = express();

//Incluimos el archivo de start.js pasamos el parametro app
const start = require('./system/core/start')(app);