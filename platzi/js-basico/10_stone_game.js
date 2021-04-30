var opc1 = 'piedra';
var opc2 = 'papel';
var opc3 = 'tijera';

function resultado(player, pc) {

    switch (true) {
        case (player === pc):
            console.log('Empate');
            break;
        case (player === opc1 && pc === opc3):
            console.log('El usuario GANA');
            break;
        case (player === opc2 && pc === opc1):
            console.log('El usuario GANA');
            break;
        case (player === opc3 && pc === opc2):
            console.log('El usuario GANA');
            break;
        default:
            console.log('La máquina GANA');
    }
}

resultado(opc1, opc3)