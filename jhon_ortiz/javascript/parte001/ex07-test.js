console.log('Javascript es tremendo');

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

saludar('Oscar Eduardo');

//----------

setTimeout(()=> {
    console.log('Este mensaje se mostrará despues de 5 segundos');
}, 5000);

console.log('Fin');