"use strict";
exports.__esModule = true;
var file_class_1 = require("./file_class");
console.log('Prueba de archivos');
var contenidoArchivo = [];
var archivo = new file_class_1["default"](';', ',');
archivo.readFile('1.txt');
contenidoArchivo = archivo.getContenido();
console.log(contenidoArchivo);
console.log("Cantidad de Filas: ".concat(archivo.getCantidadFilas()));
console.log("Cantidad de Columnas tiene la Fila 0: ".concat(archivo.getCantidadColumnas(0)));
archivo.saveFile('2.txt', contenidoArchivo);
