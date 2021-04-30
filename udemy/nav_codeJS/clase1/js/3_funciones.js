// Ejercicio edad

/* let edad = 16;

if (edad >= 18){
    console.log('Mayor de edad');
} else {
    console.log('Menor de edad :D');
}

// --------------------------------

let number = 0;

if (number == 0){
    console.log('Es un cero')
} else {
    console.log('NO es un cero')
} */


// ====== FUNCIONES =======
let edad = 16;
function comprobarEdad(param){

    if (param >= 18){
        console.log('Mayor de edad');
    } else {
        console.log('Menor de edad :D');
    }
}

comprobarEdad(edad);

function saludar(){
    console.log('Antes del return')
    return 'Hola';
    console.log('Despues del return')
}

console.log(saludar());