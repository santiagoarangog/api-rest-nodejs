//var apiConfig = require('../../system/libs/Database/database').apiConfig;

let db = require('../../system/Database/database');
var con = db.con;

module.exports.getPagos = function(req, res) {
    //Extraemos los parametros
    // var { status } = req.params;
    //Extraemos las queries
    var sql = `SELECT documentoIdentificacionArrendatario,codigoInmueble,valorPagado,fechaPago
                 FROM pagos`;

    (async() => {
        try {
            return await con.query(sql, (error, results) => {
                if (error) throw error;
                if (results.length > 0) {
                    res.json(results);
                } else {
                    res.json({ 'status': false, 'msg': 'No contamos con pagos registrados' });
                }
            });
        } catch (err) {
            console.error(err);
            process.exit(1);
        }
    })();
}

//Metodo para insertar
module.exports.addPago = function(req, res) {
    var sql = `INSERT INTO pagos(documentoIdentificacionArrendatario,codigoInmueble,valorPagado,fechaPago)
    VALUES(?,?,?,?)`
        (async() => {
            try {
                return await con.query(sql, (error, results) => {
                    if (error) throw error;
                    if (results.length > 0) {
                        res.json(results);
                    } else {
                        res.json({ 'status': false, 'msg': 'No contamos con pagos registrados' });
                    }
                });
            } catch (err) {
                console.error(err);
                process.exit(1);
            }
        })();
}