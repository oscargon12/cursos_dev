// Con el scope tengo variables globales y locales

// desde las locales puedo acceder a las globales
// Pero las globales NO pueden acceder a las locales
// Las locales son una puerta que solo se puede abrir desde dentro

let minombre = 'Oscar';

function nombre() {
    let miApellido = 'Gonzalez';
    console.log(minombre + " " + miApellido);
}

// Si hago esto si funciona
nombre(); // Porq imprime la función nombre

// En cambio no podría imprimir esta
miApellido();
// Porque es una variable local