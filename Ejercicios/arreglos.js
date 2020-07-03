//Creando arreglo
const num = [10,20,30,40,50];
console.log(num);

//Arreglo mezclado 7u7
 const mezclado = ['Hola', true, false, 2, null, undefined];
 console.log(mezclado);
 
 //forma alternativa
const meses = new Array("enero", "febrero", "marzo","abril");
console.log(meses);

//funciones papu
console.log(meses.length);
//comporbar
console.log(Array.isArray(meses));
//como acceder a los arreglos
//variable[posision]
console.log(meses[3]);
//agregar algo al arreglo
meses[4] = 'Mayo';
//best forma [posible ] agrega al final
meses.push('Junio');
//agregaral inicio
meses.unshift('Mes 0');
//encontrar algo en el arreglo
console.log(meses.indexOf('abril'));
//eliminar ultimo elemento
meses.pop();
//eliminar primer elemento
meses.shift();
//un intermedio por medio de rangos
meses.splice(2,1);
//revertir orden :v
meses.reverse();
console.log(meses);

//unir arreglos

let a1 = [123,322,354,8,123,4543,78667,3,245,76,43,2],
 a2 = [4,5,6];
 console.log(a1.concat(a2));
 //ordenar un arreglo tambien se puede con numeros ajiojio
 const frutas = ['platano','pera','manzana','sandia','mango','zanahoria'];
 console.log(frutas.sort());
 
 //ordenando chido
 a1.sort(
     function (x, y) {
          return x - y;    
          //mmenor a mayor y - x   
     }
 );
 console.log(a1);
 