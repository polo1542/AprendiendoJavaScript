//Generando un ejercicio donde prguntamos edad y lo pintamos en un div del html
let nombre = prompt('Cual es tu nombre?');
let edad = prompt('Cual es tu edad?');

document.getElementById('app').innerHTML = `Hola tu nombre es: ${nombre} tienes ${edad} años`;