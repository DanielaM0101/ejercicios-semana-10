'use strict'

//Desarrollar un programa que genere la asignación de letras para las filas de computadoras en un laboratorio.
// Se debe tener en cuenta que la codificación sigue el formato LAB2#A, donde indica la fila A del laboratorio 2

let entrada = "LAB2#B";  

let fila = entrada.substring(entrada.length - 1); 

let siguiente_letra = String.fromCharCode(fila.charCodeAt(0) + 1);

let salida = siguiente_letra;

alert(salida);
