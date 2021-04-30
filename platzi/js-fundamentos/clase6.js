var oscar = {
    nombre: 'Oscar',
    apellido: 'Gonzalez',
    edad: 34,
}

var marce = {
    nombre: 'Marce',
    apellido: 'Nieto',
    edad: 32,
}

function imprimirMayus({nombre}){
    console.log(nombre.toUpperCase());
}

imprimirMayus(oscar)
imprimirMayus(marce)
imprimirMayus({nombre: 'Pepe',})

// Desestructurar objetos


function imprimirEdad({edad}){
    var edad = persona.edad
    console.log(edad);
}

imprimirEdad(oscar)
imprimirEdad(oscar)