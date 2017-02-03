/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var NumeroUno;
	var NumeroDos;
	NumeroUno=document.getElementById('numeroUno').value;
	NumeroDos=document.getElementById('numeroDos').value;
	// alert("La suma es " + NumeroUno + NumeroDos);
	NumeroUno=parseInt(NumeroUno);
	NumeroDos=parseInt(NumeroDos);
	alert(NumeroUno+NumeroDos);
	// otra forma de mostrar la suma = alert("La suma es "+(NumeroUno+NumeroDos));
}

