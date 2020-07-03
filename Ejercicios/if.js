const edad = 18;

if (edad >= 18) {
     console.log("Pasale a la tuza");
} else {
     console.log("No puede entrar");
}
//Comprobando el valor de una variable
let puntuaje;

if (puntuaje) {
     console.log(`obtuviste ${puntuaje} puntos`);
     
} else {
    console.log(`no hay puntos`);
     
}

let efectivo = 500;
let totalCarrito = 300;

if (efectivo > totalCarrito) {
     console.log(`Pago correcto`);
     
} else {
     console.log(`No tienes feria pa pagar`);
     
}
 let hora = 3;

 if ( hora > 0 && hora<=10 ) {
      console.log(`Buenos dìas`);
      
 } else if ( hora > 10 && hora <= 18 ){
      console.log(`Buenas tardes`);
      
 } else if ( hora > 18 && hora <= 24 ){
      console.log( `Buenas Noches` );
 }else{
     console.log( `Hora no valida` );
     
 }
 //Operador ||
 let efe = 300,
 credit = 700,
 disponible = efe + credit;
 total = 500;
 
 if (total < efe || total < credit || total < disponible) {
      console.log(`Puedo pagar`);
      
 } else {
      console.log(`No tienes feria pa pagar`);
      
 }
 // if Ternario
 const log = true;
 console.log( log === true ? 'SI ENTRASTE' : 'No pudo :c');
 