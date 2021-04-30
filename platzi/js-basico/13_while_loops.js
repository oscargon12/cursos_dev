// Ciclos while
// Mientras que...

var estudiantes = ['Maria', 'sergio', 'Rosa', 'Daniel'];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
    // Esta es la sintaxis para concatenar strings y variables
}

while (estudiantes.length > 0) {
    console.log(estudiantes);
    // Este console es para ver como el shift va eliminando 
    //elementos del array hasta que ya no se mayor a 0

    var estudiante = estudiantes.shift();
    // Esto va a sacar 1 elemento del array en cada ciclo
    // El shift saca elementos del array
    saludarEstudiantes(estudiante);
}

// Lo que deja ver el console de la 11 es esto:
// ['Maria', 'sergio', 'Rosa', 'Daniel']
// ['sergio', 'Rosa', 'Daniel']
// ['Rosa', 'Daniel']
// ['Daniel']

// Al final la longitud del array ya no es 
// > a 0 y se cierra el ciclo