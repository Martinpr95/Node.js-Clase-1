var fs = require("fs");
var archivoALeer = "";
var index = "";
var error = false;
var configuracion = function (request, response) {
    console.log(request.url);
    switch (request.url) {
        case "/index":
            archivoALeer = "./www/index.html";
            break;
        case "/perfil":
            archivoALeer = "./www/perfil.html";
            break;
        case "/google":
            archivoALeer = "./www/google.html";
            break;

        default:
            archivoALeer = "./www/error.html";
            error = true;
            break;
    }
    fs.readFile(archivoALeer, function (err,data) {
        if(err)
        {
            //console.log(err);
            response.writeHead(500, { 'Content-Type': 'text/html' });
            response.end("Error al leer");
            return;
        }
        if(error) {
            response.writeHead(404, { 'Content-Type': 'text/html' });
        }
        else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
        }
        
        response.end(data.toString());
    });

    //response.write("Inicio");
    //response.end("\nFin" + request.url); //request.url te devuelve lo que le escribís después de.. :3000/zaraza
    
};

module.exports = configuracion;

