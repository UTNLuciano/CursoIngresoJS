function Mostrar()
{

//suma de divisores=numero, numeros perfectos
//algoritmo que encuentre todos los numeros perfectos, acumular todos los divisores, acumulador=numeroingresado numero=perfecto
// si pongo 10, analizo 10,9,8... y decir cual de esos (del 10 a el 0) son perfectos
	var recorrido;
	var numeroIngresado;
	var anteriores;
	var noEsPrimo;

	numeroIngresado=prompt("Ingrese numero")
	numeroIngresado=parseInt(numeroIngresado)

	for(recorrido=2;recorrido<=numeroIngresado;recorrido++)
	{
		sumaDivisores=0;
		for(anterior=1;anterior<recorrido;anterior++)
		{
			if(recorrido%anterior==0) // el recorrido es divisible por el anterior
			{
				sumaDivisores=sumaDivisores+anterior;
			}
		}
	}

}//FIN DE LA FUNCIÓN