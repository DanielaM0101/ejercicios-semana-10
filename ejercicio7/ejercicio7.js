'use strict'

//Escribir un programa que obtenga el ID de un recurso compartido de Gdrive.

let url = "https://drive.google.com/file/d/1FP3paEh4-Z6ExNQ_Lp4N9WO7XQ_3DPG1/view?usp=drive_link";
let startIndex = url.indexOf("/d/") + 3;
let endIndex = url.indexOf("/", startIndex);

let idRecurso = url.substring(startIndex, endIndex);

alert(idRecurso);