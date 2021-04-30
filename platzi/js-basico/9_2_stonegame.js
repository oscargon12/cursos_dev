var piedra = 'piedra';
var papel = 'papel';
var tijera = 'tijera';

function resultado(player, pc){

    if (player != pc){
        // Si player y  pc no lanzan lo mismo entonces...

        if (
            (player === piedra && pc === tijera) ||
            (player === papel && pc === piedra) ||
            (player === tijera && pc === papel) 
            // Estos son casos en los que gana player
        ) {
            // E imprimen esto
            console.log('Gana el player');

            // Si no se cumple lo primero, entonces gana el PC
        } else {
            console.log('Gana el PC');
        }
        
    // Y si ninguno de los dos es, entonces es empate    
    } else if (player === pc) {
        console.log('Empate!')
    }
    

}

resultado(piedra, tijera)


// Caso 2

var piedra = 'piedra';
var papel = 'papel';
var tijera = 'tijera';

function resultado(player, pc){

    switch (true) {
    case (player === pc):
        console.log('Empate');
        break;
        // Si la validación es correcta el break la detiene
    case (player === piedra && pc === tijera):
        console.log('Gana player');
        break;
    case (player === papel && pc === piedra):
        console.log('Gana player');
        break;
    case (player === tijera && pc === papel):
        console.log('Gana player');
        break;
    default:
        console.log('Gana PC');
}

}

resultado(piedra, piedra)