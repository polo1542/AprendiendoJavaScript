const n1 = "50",
n2 = 10,
n3 = 'tres';
//de string a numero
console.log('====================================');
//puedes usar Number() o parseInt()
console.log(parseInt(n1)+ n2);
console.log('====================================');

let dato;

dato = Number("20");
dato = Number("20.3896482749237");
dato = Number(true);//1
dato = Number(false);//0
dato = Number(null);//0
dato = Number(undefined);//detecta que no son numeros
dato = Number("Hola mundo");
dato = Number([1,2,3,4]);
//parseFloat
dato = parseFloat("100");
dato = parseFloat("100.23344334");
//toFixed solo aplica en numeros
dato = 212443.4567898765;
console.log('====================================');
console.log(dato);
console.log('====================================');
console.log(dato.toFixed(1));
console.log('====================================');
//De numero a string
let cp;
cp = 90510;
//conversion chida papu
cp = String(cp);

console.log('====================================');
console.log(typeof cp);
console.log(cp.length);
console.log('====================================');
//Arreglo a string
let dato2 = String([1,2,3,4]); 
//a que simple xdxdx pero tan facil de olvidar
//variable.toString(); y String(variable):
console.log('====================================');
console.log(dato2);
console.log(dato2.length);
console.log(typeof dato2);
console.log('====================================');