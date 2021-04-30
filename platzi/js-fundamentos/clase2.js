var edad = 34;

// Incremento
// edad = edad + 1;
edad += 1

var peso = 60


// peso = peso - 2
peso -= 2

var sandwich = 1

peso = peso + sandwich

var jugarFutbol = 3

//peso = peso - jugarFutbol
peso -= jugarFutbol


// -----------------------------


var precioVino = 200.3

// var total = precioVino * 3
// 👆 Esto no es muy exacto en decimales

// var total = precioVino * 100 * 3 / 100
// 👆 Esto no siempre es tan fácil

var total = Math.round(precioVino * 100 * 3) / 100
var totalstr = total.toFixed(3)
// 👆 Esto es una string

var total2 = parseFloat(totalstr)
// 👆 Esto la devuelve a numero
// Parse significa transformar a numero

//---------------------------------


// Division
var pizza = 8;
var persona = 2;

var pizzaPorPersona = pizza / persona

