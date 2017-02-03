/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var NumeroUno;
	var NumeroDos;
	NumeroUno=document.getElementById('numeroUno').value;
	NumeroDos=document.getElementById('numeroDos').value;
	// alert("La suma es " + NumeroUno + NumeroDos);
	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);
	alert(("La suma es "+NumeroUno+NumeroDos));

}

function restar()
{
	var NumeroUno;
	var NumeroDos;
	NumeroUno=document.getElementById('numeroUno').value;
	NumeroDos=document.getElementById('numeroDos').value;
	// alert("La suma es " + NumeroUno + NumeroDos);
	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);
	alert(NumeroUno - NumeroDos); 

}

function multiplicar()
{ 
	NumeroUno=document.getElementById('numeroUno').value;
	NumeroDos=document.getElementById('numeroDos').value;
	// alert("La suma es " + NumeroUno + NumeroDos);
	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);
	alert(NumeroUno * NumeroDos);
}

function dividir()
{

	NumeroUno=document.getElementById('numeroUno').value;
    NumeroDos=document.getElementById('numeroDos').value;
	// alert("La suma es " + NumeroUno + NumeroDos);
	NumeroUno=parseInt(NumeroUno);
    NumeroDos=parseInt(NumeroDos);
	alert(NumeroUno/NumeroDos);
}

