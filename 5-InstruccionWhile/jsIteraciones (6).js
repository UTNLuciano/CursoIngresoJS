function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	var promedio;

	while(contador<5)
	{
		contador++;
		numero=prompt("Ingrese un numero");
		numero=parseInt(numero);
		acumulador=numero+acumulador

	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
													//numero/5

}//FIN DE LA FUNCIÓN