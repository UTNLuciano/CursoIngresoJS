/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var random

function comenzar()
{
	random=Math.floor(Math.random() * 3) + 1;
	console.log(random)

}//FIN DE LA FUNCIÓN
function piedra()
{
	if(random==1){
		alert("Usted empató")
	}
	else if(random==2){
		alert("Usted ganó")
	}
	else if(random==3){
		alert("Usted perdio")
	}

}//FIN DE LA FUNCIÓN
function papel()
{
	if(random==2){
		alert("Usted empató")
	}
	else if(random==3){
		alert("Usted ganó")
	}
	else if(random==1){
		alert("Usted perdio")
	}

}//FIN DE LA FUNCIÓN
function tijera()
{
	if(random==3){
		alert("Usted empató")
	}
	else if(random==2){
		alert("Usted ganó")
	}
	else if(random==1){
		alert("Usted perdio")
	}

}//FIN DE LA FUNCIÓN