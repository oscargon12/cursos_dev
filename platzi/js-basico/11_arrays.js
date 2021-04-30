// Son estructura de datos tipo objetos
// Puede guardar strings, números, objetos, incluso otros arrays

var frutas = ['Manzana', 'Plátano', 'Cereza', 'Fresa'];

// Para imprimir los valores del array
console.log(frutas);

// Para imprimir la longitud (Cuantos valores) tiene el array
console.log(frutas.length);

// Para acceder a una posición específica del array
// JS es con base 0
console.log(frutas[0]);
// Esto imprimiría 'Manzana'

// --- MUTAR LOS ARRAYS ---

// 1. Agregar elementos al final del array
var masFrutas = frutas.push('Uvas');

// 2. Quitar elementos al final del array
var ultimo = frutas.pop('Uvas');

// 3. Agregar elementos al inicio del array
var newLength = frutas.unshift('Peras');

// 4. quitar elementos al inicio del array
var newLength = frutas.shift('Peras');

// 5. Saber la posición de un elemento dentro del array
var posicion = frutas.indexOf('Plátano');




var comida = ['Hamburguesa', 'pizza',]

var masComida = comida.push('lasagna');
// Agrega lasagna de ùltimas

var delLast = comida.pop('uvas');