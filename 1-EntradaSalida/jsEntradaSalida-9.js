/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	//Idem comentarios para ejercicio 10
	var importe;
	var resultado;
	
	//Tomo dato ingresado en "Ingrese sueldo"
	importe=document.getElementById('sueldo').value;
	// Paso a numero la varible importe
	importe=parseInt(importe);
	// Paso a numero la variable resultado
	resultado=parseInt(resultado);
	// Calculo el 10% de lo que ingrese, es decir, 10% de variable importe
	resultado=(importe*1.10);	
	// Una vez calculado el porcentaje, muestro el resultado en "Resultado"
	document.getElementById('resultado').value=resultado;

}
