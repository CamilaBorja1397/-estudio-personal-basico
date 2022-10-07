var piedra = "piedra";
var papel = "papel";
var tijera = "tijera"; 

function juego(usuario, maquina){
    if(usuario === "papel" & maquina === "piedra"){
        console.log("Excelente! Ganaste Camila")
    }else if( usuario === "tijera" & maquina === "piedra"){
        console.log("Ohhh! La máquina te ha ganado. Intenta nuevamente!!")
    }else if(usuario === "piedra" & maquina === "tijera"){
        console.log("Ohhh! La máquina te ha ganado. Intenta nuevamente!!")
    }else{
        console.log("Empatee!")
    }
}