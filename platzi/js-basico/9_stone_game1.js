var opc1 = 'piedra';
var opc2 = 'papel';
var opc3 = 'tijera';

function resultado(player, pc) {

    if (player != pc) {
        if (
            (player === opc1 && pc === opc3) ||
            (player === opc2 && pc === opc1) ||
            (player === opc3 && pc === opc2)
        ) {
            console.log('El usuario GANA');
        } else {
            console.log('El PC GANA');
        }

    } else if (player === pc) {
        console.log('empate');
    }
}

resultado(opc1, opc3)

// && ambas condiciones se tienen que cumplir
// || funciona como un O, si se cumple esta cosa O esta otra

// (player === opc1 && pc === opc3) ||
// Si player lanza piedra y pc lanza tijera, o... la opción de abajo
