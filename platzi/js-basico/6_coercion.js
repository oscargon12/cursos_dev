// Coerción
// 

// Coerción implícita = es cuando 
// el lenguaje nos ayuda a cambiar el tipo de valor.

var a = 4 + '7';
// undefined

typeof a
// "string"

var b = 4 * '7';
// undefined

typeof a
// "number"

// Coerción explicita = es cuando
// obligamos a que cambie el tipo de valor.

var c = 20; // este 20 es numero
var d = c + '';

console.log(d);
// 20

// Eso se puede hacer más facil así:
var e = String(c);

//20
// Con eso obligamos al número a convertirse en string

// Y si hago...
var f = Number(e);
// typeof f "number"

