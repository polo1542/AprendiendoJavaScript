const p1 = 'pizza',
precio = 30,
p2 = 'torta',
precio2 = 40;

let html;
//forma vieja de hacer esto
html = '<ul>' + 
          '<li>Orden: ' + p1 +'</li>' +
          '<li>Precio: ' + precio +'</li>' +
          '<li>Orden 2: ' + p2 +'</li>' +
          '<li>Precio 2: ' + precio2 +'</li>' +
          '<li>Total: ' + (precio + precio2) +'</li>' +
          '</ul>';

document.getElementById('app').innerHTML = html;

console.log('====================================');
console.log(html);
console.log('====================================');
//Forma Pro papu
let html2;

html2 =   `
               <ul>
                    <li>Orden: ${p1} </li>
                    <li>Precio: ${precio} </li>
                    <li>Orden 2: ${p2} </li>
                    <li>Precio 2: ${precio2} </li>
                    <li>Total: ${ total(precio,precio2) }</li>
               </ul>
          `;

function total(precio, precio2) {
     return precio + precio2;
}

document.getElementById('app2').innerHTML = html2;
console.log('====================================');
console.log(html2);
console.log('====================================');
