const mysql = require('mysql');
const fs = require('fs');
const ini = require('ini');

var config = ini.parse(fs.readFileSync('system/config/config.ini', 'utf-8'));

//Realizamos la conexión a nuestra base de datos
var con = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
});

//Validamos el estado de la conexión a la base de datos
con.connect(error => {
    if (error) throw error;
    console.log('Database On Run!');
});

var apiConfig = config.api;

module.exports = {
    con,
    apiConfig,
};