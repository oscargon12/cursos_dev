// Objetos

// Sintaxis
let miAuto = {

    // Propiedades del objeto
    marca: 'Kia',
    modelo: 'Soul',
    annio: 2010,
};

// Para acceder a una propiedad del objeto, escribo
miAuto.marca
// Kia
miAuto.annio
// 2910



// Puedo agregar propiedades
let miAuto = {

    // Propiedades del objeto
    marca: 'Kia',
    modelo: 'Soul',
    annio: 2010,
    detalleAuto: function(){
        console.log(`Auto ${this.marca} ${this.modelo} ${this.annio}`);
    }
};

// This hace referencia a su padre, el objeto (ejem: miAuto)
miAuto.detalleAuto();
// Como la propiedad es una funcion la llamo como tal, con ()
//imprime Auto Soul 2010