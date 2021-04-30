// Arrays

// Sintaxis atigua
//let cars2 = new Array ('Seat', 'BMW', 'Ferrari');

let cars = [ 'Seat', 'BMW', 'Ferrari' ];

// Conozco el numero de elementos dentro de un array
console.log(cars.length);

// Accedo a determinado elemento del array
console.log(cars[1]);

// Accedo al último elelento de un arry, sin saber cuantos tiene
console.log(cars[cars.length-1]);


// Pintar tds los elementos del array, recorriéndolo
for(i=0;i<cars.length;i++){
    console.log(cars[i]);
}

// Método exclusivo para arrays
cars.forEach(mostrarElemento);

// item e index se refieren al elemento del array y su posición
function mostrarElemento(item, index){
    console.log(`Mostrando elemento ${item} en posición ${index}`);
}


let colors = ['amarillo', 'rojo', 'azul'];

console.log(colors);

// Agregando elemento en posición inexsitente (lo suma al array) (No es recomendable, mejor push)
colors[3] = 'Verde';
console.log(colors);

// reemplazando el último elemento (No es recomendable, mejor push)
colors[colors.length - 1] = 'Morado';
console.log(colors);

colors.push('Naranja');
console.log(colors);

// El primer parámetro es desde donde se borra, el segundo cuantos borra a partir de ese
colors.splice(0, 1,);
console.log(colors);

// Puedo reemplazar el primer elemento por marrón
colors.splice(0, 1, 'marron');
console.log(colors);