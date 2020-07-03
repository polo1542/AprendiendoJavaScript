// Eliminar de Local Storage
//localStorage.clear();
let elemento;

elemento = document;
elemento = document.all;
elemento = document.all[10];
elemento = document.head;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.forms[0].classList[2];
elemento = document.images;
elemento = document.images[2];
elemento = document.images[2].src;
//Scrips
elemento = document.scripts;
//EJERCICIO Seleccionar todas las imagenes del DOM y pasarlas dentro de un arreglo

elemento = document.images;
let imagenes = document.images;
let imagenesArr = Array.from(imagenes);
console.log(imagenesArr);

imagenesArr.forEach( function (imagen) {
     console.log(imagen);
});
