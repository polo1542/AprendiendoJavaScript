// lo tipico de los ciclos
for (let index = 0; index < 10; index++) {
     if (index == 5) {
          console.log("Voy en el 5");
          continue;
          //break pa romper
     } 
     console.log(`${index}`);
}
for (let index = 0; index < 10; index++) {
     if (index % 2 == 0) {
          console.log(`El numero ${index} es Par`);
     } else {
          console.log(`El numero ${index} es Impar`);
     }     
}
const prod = ['camisa', 'boleto', 'gorrar', 'guitarra'];

for (let index = 0; index < prod.length; index++) {
     console.log(`Tu producto ${prod[index]} fue agregado`);
     
}
let i = 10;
while (i < 10) {
     console.log(`xsx ${i}`);
     i++;
}