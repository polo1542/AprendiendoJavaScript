const cities = ['londres', 'new york', 'Madrid', 'Paris'];
const ordenes = new Set([123,321,131,102]);
const datos = new Map();
datos.set('nombre','Paul');
datos.set('profesion','desarrollador');
//Entries iterador
//Entries a las ciudades
for (let entrada of cities.entries()) {
     console.log(entrada);     
}
for (let orden of ordenes.entries()) {
     console.log(orden);     
}
for (let mapas of datos.entries()) {
     console.log(mapas);     
}
//Values iterador
for (let entrada of cities.values()) {
     console.log(entrada);
     
}
//Key iterador
for (let entrada of cities.keys()) {
     console.log(entrada);
}
/**
 * 
 */
const mensaje = 'Aprendiendo JavaScript';
for (let letra of mensaje) {
     console.log(letra); 
}
const enlaces = document.getElementsByTagName('a');
for(let enlace of  enlaces){
     console.log(enlace.href);
}


