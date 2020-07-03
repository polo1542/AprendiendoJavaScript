//Arreglo de objectos
const autos = [
     {
          modelo: 'mustang', motor: 6.6
     },
     {
          modelo: 'camaro', motor: 6.1
     },
     {
          modelo: 'challenger', motor: 6.2
     },
];
//se pueden modificar sus valores por individuamente
for (let index = 0; index < autos.length; index++) {
     console.log(`${autos[index].modelo} ${autos[index].motor}`);
}
console.log(autos.length);
