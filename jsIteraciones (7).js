function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=="si")
	{
		contador++;
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		respuesta=prompt("Ingrese si para continuar")
		acumulador=numero+acumulador

	}


/*	while(respuesta!="si"){
		contador++;
		respuesta=parseInt(respuesta)
		acumulador=acumulador+respuesta
		respuesta=prompt("Ingrese otro numero o 'si' para detenerse y realizar los calculos")
		
	}
*/

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN