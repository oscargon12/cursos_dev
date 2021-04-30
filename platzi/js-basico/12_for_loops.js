// Ciclo For
// Hasta que ...


var estudiantes = ['Maria', 'sergio', 'Rosa', 'Daniel'];

// Primero definimos la TAREA a cumplir
// En este caso, saludar
function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

// --- Opción 1 ---
// Definimos el ciclo
// Y se barre el ciclo
// Mandando llamar la funcion saludarEstudiantes
for (let i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i])
    // Las partes del for son desde dondi se inicia el barrido, hasta cuando se barre, de cuanto en cuanto se incrementa
    // El parametro es todas las posiciones del arreglo (index) del 1 al 4 elementos
}

// --- Opción 2 ---
for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
    // A esta función le damos el parámetro estudiante
}
// Con esto me trae cada estudiante del array estudiantes
// barre casi de la misma forma el array

// El of significa:
// Inicializar una variable en singular
// De un array que está en prural
// Mientras queden elementos en el array, 
// va a seguir ejecutando la tarea