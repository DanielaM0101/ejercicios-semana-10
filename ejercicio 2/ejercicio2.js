
// Escribir un programa que permita obtener el numero de piso de un edificio de oficinas donde el 
//formato de numeración de las oficinas  es: “01.24” lo que significa piso 1 oficina 24.




let numeracionOficina = "01.24"; 

let numeroPiso = numeracionOficina.substring(0, numeracionOficina.indexOf("."));

alert(numeroPiso);
