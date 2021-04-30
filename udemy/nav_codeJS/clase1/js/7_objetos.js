// Objetos

let car = {
    tipo: 'Seat',
    modelo: 'Leon',
    color: 'red',
}
console.log(car)

//console.log(car['color']); Sintaxis antigua
console.log(car.modelo);

// ===== Clases ======

// Funcion constructora
class Car{
    constructor(brand){
        this.type = brand; //car.type = brand
    }
}

let carTest = new Car('Toyota');
console.log(carTest)

//----------------------

class Persona{
    constructor(nombre, age){
        this.nombre = nombre;
        this.age = age;
    }

    saludar(){
        return 'Hola '  + this.nombre;
    }

    edad(){
        return this.nombre + ' tiene ' + this.age + ' años';
    }

    auto(marca){
        return this.nombre +  ' tiene un auto marca ' + marca
    }
}

// Instanciando
let maria = new Persona('María', 24);

console.log(maria);
console.log(maria.saludar());
console.log(maria.auto('Ferrari'));
// Lo anterior es la sintaxis de clases, prefiero la funcion constructora



function Bicicleta(categoria, rin, relacion,) {
    this.categoria = categoria;
    this.rin = rin;
    this.relacion = relacion;
  }
  
  //Se instancia el objeto
  let bici1 = new Bicicleta('Fixie', 700, 'piñon fijo');
  console.log(bici1)