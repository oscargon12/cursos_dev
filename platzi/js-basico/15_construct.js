// Funcion constructora

// Sintaxis
function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

// Operador new: genera una nueva instancia de la funcion contructora auto
let autoNuevo = new auto ('tesla', 'model 3', 2020);
let autoNuevo2 = new auto ('Kia', 'Soul', 2020);



