/* Convierte el siguiente código en una función, pero, cambiando cuando sea necesario 
las variables constantes por parámetros y argumentos en una función */

// Opc 1 Funcion
const presentacion = (name, lastname, nickname) => {
    let completeName = name + lastname
    console.log(`Hola mi nombre es ${name} ${completeName} y me dicen ${nickname}`)
}

presentacion('Oscar2', 'Gonzalez2', 'Pollo2');

// Opc 2 Funcion constructora
function introduceMe(nombre, apellido, sobrenombre) {
    // Atributos
    this.nombre = nombre;
    this.apellido = apellido;
    this.sobrenombre = sobrenombre;

    //Metodos los saco del constructor
}

/* yo puedo sacar los metodos del prototipo, para que al instanciarlo 
x veces este método no se repita y solo se llame cuando yo lo 
quiera traer mejora en rendimiento y memoria en la programacion */
introduceMe.prototype.saludar = function () {
    console.log(`Hola mi nombre es ${this.nombre} ${this.apellido} y me dicen ${this.sobrenombre}`);
}

// Instanciando...
const introMe = new introduceMe('Oscar', 'Gonzalez', 'Pollo'); // Con el new Perro llamo la herencia de introduceMe Perro
console.log(introMe);

introMe.saludar();

// == Condicionales ==

/* Replica el comportamiento del siguiente código que usa
la sentencia switch utilizando if, else y else if */

const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
  case "Free":
    console.log("Solo puedes tomar los cursos gratis");
    break;
  case "Basic":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    break;
  case "Expert":
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    break;
  case "Free":
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    break;
}

const buyPlan = (plan) => {
  let suscription = plan

  if (suscription === 'Free') {
    console.log('Casi no puedes hacer nada, mejor paga');
  } else if (suscription === 'Basic') {
    console.log('Puedes tomar casi todos los cursos, pero estás limitado');
  } else if (suscription === 'Expert') {
    console.log('Puedes tomar TODOS los cursos de Platzi durante un año');
  } else if (suscription === 'Expert+') {
    console.log('TU Y TU COMPA  pueden tomar TODOS los cursos de Platzi durante un año');
  }
}

buyPlan('Free');
buyPlan('Basic');
buyPlan('Expert');
buyPlan('Expert+');

// Planes con solo if
const buyPlan2 = (plan2) => {
  let suscription2 = plan2

  if (suscription2 === 'Free') {
    console.log('Casi no puedes hacer nada, mejor paga 2');
  }
  if (suscription2 === 'Basic') {
    console.log('Puedes tomar casi todos los cursos, pero estás limitado 2');
  }
  if (suscription2 === 'Expert') {
    console.log('Puedes tomar TODOS los cursos de Platzi durante un año 2');
  }
  if (suscription2 === 'Expert+') {
    console.log('TU Y TU COMPA  pueden tomar TODOS los cursos de Platzi durante un año 2');
  }

}

buyPlan2('Free');
buyPlan2('Basic');
buyPlan2('Expert');
buyPlan2('Expert+');


// == Ejercicio ciclos ==

// Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
  console.log("El valor de i es: " + i);
}

let counter = 0
while (counter < 5) {
  // A estas estructuras es necesario incluirles un aumento o decremento
  console.log(`El valor del counter es ${counter}`) // lo que hace
  counter++; // Incremento
}

// ejercicio 2

for (let i = 10; i >= 2; i--) {
  console.log("El valor de i es: " + i);
}

let contador = 10;

while (contador >= 2) {
  console.log("El valor de contador es: " + contador);
  contador--; // Decremento
}


// Ejercicio 3 
/* Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2.
Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. */

const mathTest = () => {

    let sum = 2 + 2;
    let userSum = parseInt(prompt("Enter a Value"));
    console.log(`El resultado es ${sum} y tu resultado fue ${userSum}`)

    if (4 === userSum) {
        console.log('Excelente has pasado mi difícil prueba 🧙')
    } else {
        console.warn('Mejor vuelve a empezar 🤦🏻‍♂️')
        mathTest();
    }
}

mathTest();


// Arrays y objetos

/* Crea una función que pueda recibir cualquier array como parámetro
 e imprima su primer elemento. */

const arrayFunction = (arr) => {
     const myArray = arr;
     
     let arrFirst = myArray[0];
     console.log(arrFirst);
 }

 arrayFunction(['Hamburguesas', 'Pizzas', 'Lasagnas', 'Torta de platano']);

/* Crea una función que pueda recibir cualquier array como parámetro 
e imprima todos sus elementos uno por uno (no se vale imprimir el array completo). */

const arrayFunction = (arr) => {
     const myArray = arr;
     
     for(let i=0; i<=arr.length-1; i++){
         console.log(`La comida es ${myArray[i]}`);
     }
 }

 arrayFunction(['Hamburguesas', 'Pizzas', 'Lasagnas', 'Torta de platano']);


/* Crea una función que pueda recibir cualquier objeto como parámetro
e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo). */

const objFunction = (obj) => {

    const myObject = obj;

    for (const property in myObject) {
        console.log(`${property}: ${myObject[property]}`);
    }
}

const perro = {
    name: 'Bolt',
    age: 4,
    size: 'Medium',

    saludar : function (){
                console.log('Hola a todos :)');
            },
}


objFunction(perro);