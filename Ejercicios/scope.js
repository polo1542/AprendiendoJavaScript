//Es la visibilidad de un valor dentro de una funcion o un bloque etc etc

var a = 'a';
let b = 'b';
const c  = 'c';
/**
 * Scope de la funcion
 */
function functionScope() {
     var a = 'A';
     let b = 'B';
     const c = 'C';
     console.log('Funcion: '+ a,b,c);
     
}
functionScope();
/**
 * Scope en Bloque{}
 */
if (true) {
     var a = 'AA';
     //let y cons se queddan en sus propias funciones sin afectar a las variables globales
     let b = 'BB';
     const c  = 'CC';
     console.log('BLOQUE: ' + a,b,c);
     
}
//for
for (var a = 0; a < 10; a++) {
     console.log(a);      
}
console.log('Globales: ' + a,b,c);
