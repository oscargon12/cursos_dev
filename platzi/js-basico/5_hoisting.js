// Hoisting es cuando las variables y funciones 
// se ejecutan antes de procesar cualquier código
// En ecmaScript 6 ya no es necesario

// Declarar
var miNombre;

// Inicializar
miNombre = 'Oscar';
// Si debo declarar primero e inicializar después
// es porq no tengo el valor de la variable aún

// Ejemplo Hoisting

console.log(miNombre);
var miNombre = 'Diego';

// Acá el js identifica que el console.log tiene una variable
// pero como aún no la han inicializado le da un valor undefined


// También con funciones

hey();

function hey() {
    console.log('Hola ' + miNombre);
}

//imprime
// hola undefined
// undefined

// Lo mejor es siempre declarar la variables en las primeras líneas del js

