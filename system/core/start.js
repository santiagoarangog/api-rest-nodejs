const bodyParser = require('body-parser');

//Creamos un archivo start que tendra todas las dependencias necesarias
module.exports = function(app) {
    let apiRoutes = require("../Router/routes");
    let apiVersion = 'v1';
    // app.get('/', (req, res) => res.send('Error 404 &bull; Esta página no puede ser accedida'));

    //Iniciamos las rutas de la Api Versionada
    app.use('/' + apiVersion, apiRoutes);

    //Iniciamos la App
    InitApp(app);
}

function InitApp(app) {
    //Creamos el puerto de salida
    const PORT = process.env.PORT || 8084; //Establecemos el puerto de salida
    //Iniciamos el Parser de tipo json
    app.use(bodyParser.json());
    //Iniciamos la App usando el puerto de salida establecido
    app.listen(PORT, () => console.log(`Server Run On Port: ${PORT}`));
}