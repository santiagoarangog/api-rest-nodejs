//Establecemos todos los endpoints de nuestro proyecto
let router = require('express').Router();

let payments = require('../../app/controllers/paymentsController');

//Aca vamos a establecer todas las rutas ya sean:
//Get, Post, Put, Delete -- En este caso solo utilizaremos GET y POST

//Endpoint: pagosArrendamiento.com/v1
router.get('/', function(req, res) {
    res.json({
        status: true,
        message: 'Bienvenido a tu sistema de pago de arrendamientos! En nuestra v1'
    });
});

//Endpoint: pagosArrendamiento.com/v1/getPagos/
router.get('/getPagos', (req, res) => payments.getPagos(req, res));

router.post('/addPago', (req, res) => payments.addPago(req, res));

//Exportamos API ROUTES
module.exports = router;