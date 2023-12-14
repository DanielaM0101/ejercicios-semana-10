'use strict'

//Escribir un programa para obtener el nombre de usuario de un correo electrónico.

let correoElectronico = "nombredeuser@magbdigital.net"; 

let nombreUsuario = correoElectronico.substring(0, correoElectronico.indexOf("@"));

alert(nombreUsuario);
