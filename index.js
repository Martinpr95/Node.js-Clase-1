
//var _gulp = require("gulp"); //te traes el módulo
//Cuando ve solo un nombre, lo va a buscar al corazón de Node, si no lo encuentra, lo busca entre las dependencias.
//Cuando encuentra un nombre que no es nativo, lo va a buscar a la carpeta node_modules de nuestra aplicación, si no lo encuentra, va un nivel más arriba y así.
//Si encuentra el paquete, ejecuta el index.js si no lo encuentra, ejecuta el index.node
//Lo indicás como /gulp o ./gulp (relativa) ../gulp (nivel arriba)

/*
var _saludo = require("saludo");
console.log(_saludo);*/


/*var fs = require("fs");// modulo fs para leer y escribir archivos
fs.readFile("pepe.txt",function leer(err,data) //Siempre si hay error es el primer parámetro
{
    if(err)
    {
        console.log("Ocurrió un error");
        return;
    }
    console.log("Lectura Asíncrona");
    console.log(data.toString());
});

//Lectura sincrona
var contenido = fs.readFileSync("pepe.txt");

console.log("Lectura Síncrona");
console.log(contenido.toString());*/

var http = require("http");

/*http.createServer(function(request, response){

}).listen(3000);
O
*/
//var fs = require("fs");
//var index = fs.readFileSync("www/index.html");
var configuracion = require("./modulos/servidor");

/*
Original
http.createServer((request, response) => {
    //response.statusCode = 200;
    //o
    response.writeHead(200, {'Content-Type': 'text/html'});
    module.exports = reque
    //response.write("Inicio");
    //response.end("\nFin" + request.url); //request.url te devuelve lo que le escribís después de.. :3000/zaraza
    response.end(index);
}).listen(3000,function(){
    console.log("Escuchando...");
});*/

http.createServer(configuracion).listen(3000,function(){
    console.log("Escuchando...");
});

//Ver para la clase que viene el modulo request que tiene un método get(URL, function())