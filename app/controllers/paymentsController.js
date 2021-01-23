//Llamamos el modelo
const mPayments = require('../models/paymentsModel');

module.exports.getPagos = function(req, res) {
    return mPayments.getPagos(req, res);
}

module.exports.addPago = function(req, res) {
    return mPayments.addPago(req, res);
}