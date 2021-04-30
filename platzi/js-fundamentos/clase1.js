// Variables

var nombre = 'Oscar';
var apellido = 'Gonzalez';
// var edad = 34;

// var edad = '34 años'

// console.log('Hola '+ nombre + ' ' + apellido);
// console.log('Tengo ' + edad);


// var peso = '60kg';

// Se puede pasar a Upper con esta función
var nombreMayusculas = nombre.toUpperCase()

//Puedo identificar la primera letra del nombre
var primeraLetraNombre = nombre.charAt(0);
// el parámetro es 0 porque es la primera posición

// O la cantidad de caracteres
var cantidadLetrasNombre = nombre.length

// Concatenar strings
var nombreCompleto = nombre + ' ' + apellido

// Concatenacion compuesta
var nombreComp = `${nombre} ${apellido}`

// Trae las letras de la posición que ponga como parámetro
var str = nombre.substr(1, 2)

// Trae la ultima letra del string
var ultimaLetraNombre = nombre.substr(-2)
