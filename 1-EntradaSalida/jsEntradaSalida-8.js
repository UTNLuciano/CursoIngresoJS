/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	/* Como sacar resto 

	var Resultado;
	Resultado = 2 % 10;
	alert(Resultado);
	Resultado = 10 % 2;
	alert(Resultado);
	*/

	//Buenas prácticas JS
	//http://www.w3schools.com/js/js_best_practices.asp

	var dividendo;
	var divisor;
	var resultado;

	// Tomo datos del usuario, guardo en variables dividendo y divisor
	// Formato: var=d.gebi("ID en HTML").value;
	dividendo=document.getElementById('numeroDividendo').value;
	divisor=document.getElementById('numeroDivisor').value;

	// Transformo en entero, funciona igual sin parseint
	dividendo=parseInt(dividendo);
	divisor=parseInt(divisor);

	// Guardo en variable resultado para el alert
	resultado=(dividendo%divisor);

	// Alert concatenando "el resto es" con la variable resultado, no con la operación
	alert(("El resto es ")+(resultado));

}
