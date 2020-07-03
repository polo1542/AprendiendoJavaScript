//leer documentacion pero al menos lo basico si lo escribire

//Objecto Date
const diaHoy = new Date();
//Fecha en especifico mes, dia y a;o
let navidad2020 = new Date('12-25-2020');
//
let valor;
//mes
valor = diaHoy.getMonth();
// el dia del mes
valor = diaHoy.getDate();
//obtiene el dia de la semana
valor = diaHoy.getDay();
//a;o
valor = diaHoy.getFullYear();
//minutos
valor = diaHoy.getMinutes();
//la hora
valor = diaHoy.getHours();
//regresa milisegundos desde 1970 que raro xd
valor = diaHoy.getTime();
//
valor = diaHoy.getFullYear();
valor = diaHoy.setFullYear(2010);
valor = diaHoy.getFullYear();

console.log(valor);
