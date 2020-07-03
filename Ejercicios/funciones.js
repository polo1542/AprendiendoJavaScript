//Funciones
/**
 * Formas de declaras
 * 1) Function Declaration
 * sintaxis
 * function name(params) {
 *   todo lo que hara tu funcion
 * }
 * 
 * llamar una funcion
 * name();
 * function saludar() {console.log('Hola Amigo');}
 * saludar();
 * Tambien se puede con argumentos
 * 
 */
function saludar(nombre) {
     console.log(`Hola ${nombre}`);
}
saludar('Paul');
saludar('Juan');
saludar('Claudia');
saludar('Shary');
saludar('Ivan');
//Funcion para sumar
function sumar(a , b) {
     console.log(a + b);
}
sumar(4,9);

//con return :v 
function sum(c, d) {
     return c + d;
}
let more;
more = sum(1,2);
console.log(more);

let sal;
sal = salu2();
console.log(sal);
function salu2(nombre = 'Amigo') {
     return `Hola ${nombre}`;
}
/**
 * 2)Function expression
 * const variable = function(){
 * return a -  b;
 * }
 * variable(argumento1, argumento2);
 */
const resta = function (a = 0, b = 0) {
     return a - b; 
}
console.log( resta(1, 9) );
/**
 * 3) funciones que se invocan inmediatamente IIFE
 * (function()
 *   {
 * 
 *   }
 * )();
 */
(function(tec)
     {
          console.log(`Creando un IIFE en ${tec}`);
           
     }
)('JavaScript');
/**
 * 4)Metodos de propiedad
 * Cuando una funcion se pone dentro de un objecto
 */
const musica = {
     reproducir: function (id) {
          console.log(`Ya esta sonando la cancion no ${id} man`);
     },
     pausar: function () {
          console.log(`oye porque me detienes`);
          
     }
}
//los metodos tambien pueden guardarse/crearse fuera del objecto
musica.borrar = function (id) {
     console.log(`Seguro que quieres borrar la cancion no ${id} ?`);
}
musica.reproducir(30);
musica.pausar();
musica.borrar(3);