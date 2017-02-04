/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoDelTerreno;
	var anchoDelTerreno;
	var resultado;

	largoDelTerreno=document.getElementById('Largo').value;
	anchoDelTerreno=document.getElementById('Ancho').value;
	// radioDelTerreno=document.getElementById('Radio').value;
	largoDelTerreno=parseInt(largoDelTerreno);
	anchoDelTerreno=parseInt(anchoDelTerreno);
	// radioDelTerreno=parseInt(radioDelTerreno);
	resultado=(((largoDelTerreno+anchoDelTerreno)*2)*3);// +radioDelTerreno);
	alert(resultado);

}
function Circulo () 
{

	var radio;
	var resultado;

	radio=document.getElementById('Radio').value;
	radio=parseInt(radio);
	resultado=((radio*2*3.14)*3);
	alert(resultado);

}
function Materiales () 
{

	var largoDelTerreno;
	var anchoDelTerreno;
	var resultadoUno;
	var resultadoDos;

	largoDelTerreno=document.getElementById('Largo').value;
	anchoDelTerreno=document.getElementById('Ancho').value;
	
	largoDelTerreno=parseInt(largoDelTerreno);
	anchoDelTerreno=parseInt(anchoDelTerreno);

	resultadoUno=((largoDelTerreno+anchoDelTerreno)*2);
	resultadoDos=((largoDelTerreno+anchoDelTerreno)*3);
	
	alert("Bolsas de cemento: "+resultadoUno);
	alert("Bolsas de cal: "+resultadoDos);
	
}