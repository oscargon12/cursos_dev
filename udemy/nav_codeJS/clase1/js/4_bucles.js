// Ciclos

let numeroLeido = prompt('Introduzca un numero');
let contador = 0;

// Este bucle imprime números en consola hasta que oprima un número negativo para salir
/* while(numeroLeido > 0){
    numeroLeido = prompt('Ingresa otro número para continuar o un número negativo para salir')
    console.log(`intento ${contador} - numero; ${numeroLeido}`)
    contador++;
} */

// Ciclo do while 
// Muy similar al while

do{
    numeroLeido = prompt('Ingresa otro número para continuar o un número negativo para salir')
    console.log(`intento ${contador} - numero; ${numeroLeido}`)
    contador++;
} while(numeroLeido > 0)

// Ciclo for

for(i = 0; i<5; i++){
    console.log(`El numero es ${i}`)
}
// La segunda declaración es la más importante porque es la que pone la condición
// la tercera condición se cumple hasta ejecutar lo que está dentro del bucle