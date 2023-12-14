'use strict'

//Escribir un programa que obtenga el nombre de usuario de facebook desde la url.

let url = "facebook.com/nombreuser"; 

let nombreUsuario = url.substring(url.lastIndexOf("/") + 1);

alert(nombreUsuario);


