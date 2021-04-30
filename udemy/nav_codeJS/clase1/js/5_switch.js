// Entrada: insertar dato 
// pintar diferentes  causísticas
// Salida: pintar resultado por consola

let entrada = parseInt(prompt('Introduzca un numero para saber el día de la semana'));

let salida = null;

switch(entrada){
    
    case 0: salida = 'Lunes';
    break;
    case 1: salida = 'Martes';
    break;
    case 2: salida = 'Miercoles';
    break;
    case 3: salida = 'jueves';
    break;
    case 4: salida = 'viernes';
    break;
    case 5: salida = 'sabado';
    break;
    case 6: salida = 'domingo';
    break;
    default: 
    salida = 'Debe introducir un numero del 0 al 6';
}
// Siempre es mejor escribir el default primero y luego os casos

console.log(salida)