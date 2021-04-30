var nombre = 'Oscar'; // Variable global porque no está definida dentro de una función

// function imprimirMayus(n){
//     n = n.toUpperCase()
//     console.log(n);
// }
// Así esta variable es solo local

// de esta manera no se pisan las variables locales y globales

function imprimirMayus(nombre){
    nombre = nombre.toUpperCase()
    console.log(nombre);
}

imprimirMayus(nombre)
