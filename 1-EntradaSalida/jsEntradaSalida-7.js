/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var NumeroUno;
	var NumeroDos;
	var Resultado;

	NumeroUno=document.getElementById('numeroUno').value;
	NumeroDos=document.getElementById('numeroDos').value;
	// alert("La suma es " + NumeroUno + NumeroDos);
	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);
	resultado=NumeroUno + NumeroDos
	alert("La suma es "+resultado);

}

function restar()
{
	NumeroUno=document.getElementById('numeroUno').value;
	NumeroDos=document.getElementById('numeroDos').value;
	// alert("La suma es " + NumeroUno + NumeroDos);
	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);
	resultado=NumeroUno-NumeroDos
	alert("La resta es "+resultado)

}

function multiplicar()
{ 
	NumeroUno=document.getElementById('numeroUno').value;
	NumeroDos=document.getElementById('numeroDos').value;
	// alert("La suma es " + NumeroUno + NumeroDos);
	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);
	resultado=NumeroUno*NumeroDos
	alert("La multiplicación es "+resultado)

}

function dividir()
{

	NumeroUno=document.getElementById('numeroUno').value;
    NumeroDos=document.getElementById('numeroDos').value;
	// alert("La suma es " + NumeroUno + NumeroDos);
	NumeroUno=parseInt(NumeroUno);
    NumeroDos=parseInt(NumeroDos);
	resultado=NumeroUno/NumeroDos
	alert("La división es "+resultado)
}

