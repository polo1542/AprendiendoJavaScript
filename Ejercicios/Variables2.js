/*
Existen tres tipos de variables
var,let y const 
en este caso estamos usando Cadenas de texto
*/
//var
var nombre = "Paul";
//ventajas puedes cambiar el nombre sin ningun problema y la puedes volver a declarar
//tambien se pueden incializar sola
var nombre;
console.log('====================================');
console.log(nombre);
console.log('====================================');
//Otro ejemplo de incilizar 
var carrito = 'Libro',
     carrito1 = 'Libro 2';
console.log('====================================');
console.log(carrito);
console.log('====================================');
console.log('====================================');
console.log(carrito1);
console.log('====================================');

//Formas de declarar
//camelCase(Recomendado)
var primerNombre;
//underscore
var primer_nombre;
//pascal case
var PrimerNombre;

//let
let nombre2 = "Paul",
     producto = "papas";
     //en let no deja redeclarar las variables
//usar let cuando el valorcambie en un futuro
console.log('====================================');
console.log(producto);
console.log('====================================');
//CONST 
//siempre deben de tener un valor de incio
//usar cuando no cambia el valor
const otracosa ='xdxd'; 
console.log('====================================');
console.log(otracosa);
console.log('====================================');

//curiosidades en strings

let mensaje;
//como citar por si las moscas
 mensaje = 'Y entonces dije "Buen Curso!" ';
let mensaje2 = "el gringo dijo 'yes of course'";
let mensaje3 = 'No juimos todos \'what\'s your ranfla man\'? insistian mucho';
console.log('====================================');
console.log(mensaje, mensaje2, mensaje3);
console.log('====================================');

//Como concatenar strings
let msg ='Java'+'Script';
console.log('====================================');
console.log(msg);
console.log('====================================');

//uniendo variables
let aprendiendo = 'Aprendiendo',
tecnologias = "JavaScript";
console.log('====================================');
//forma vieja de hacerlo
console.log(aprendiendo + " " +tecnologias);
//nueva forma papipchiludo templates literals
console.log(`${aprendiendo} ${tecnologias}`);
console.log('====================================');
//funciones a cadeans de texto(leer documentacion)
console.log(aprendiendo.toUpperCase());




//variables numericas van sin '' o ""
let numero = 44,
 numero2 = 44,
 res;
 res = numero + numero2; 
 res2 = numero * numero2;
 res3 = numero - numero2;
 res4 = numero / numero2;
 res5 = numero % numero2;

console.log('====================================');
console.log(res,res2,res3,res4,res5);
console.log('====================================');