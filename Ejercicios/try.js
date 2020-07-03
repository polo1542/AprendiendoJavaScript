try {
     //funcion que no existe
     algo();
} catch (error) {
    console.log(error);
     
}finally{
     console.log(`No le importa, lo ejecuta este bloque siempre`);
}

obtenerClientes();

function obtenerClientes() {
     console.log('Descargando....');
    setTimeout( function () {
         console.log(`Finalizado`);
         
    }, 3000); 
}