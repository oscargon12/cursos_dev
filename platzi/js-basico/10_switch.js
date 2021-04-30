//Switch
// Hecho para validar casos

let number = 1;

switch (number) {
    case 1:
        console.log('Soy un uno');
        break;
        // Si la validación es correcta el break la detiene
    case 10:
        console.log('Soy un diez');
        break;
    case 100:
        console.log('Soy un cien');
        break;
    default:
        console.log('No soy nada');
}

// Si no pongo el breack el switch sigue validando así allá uno cierto
