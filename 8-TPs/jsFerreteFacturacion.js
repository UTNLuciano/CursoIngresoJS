/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var productoUno;
	var productoDos;
	var productoTres;
	var resultado;

	productoUno=document.getElementById('PrecioUno').value;
	productoDos=document.getElementById('PrecioDos').value;
	productoTres=document.getElementById('PrecioTres').value;
	productoUno=parseInt(productoUno);
	productoDos=parseInt(productoDos);
	productoTres=parseInt(productoTres);
	resultado=(productoUno+productoDos+productoTres);
	alert(resultado);
}
function Promedio () 
{
	productoUno=document.getElementById('PrecioUno').value;
	productoDos=document.getElementById('PrecioDos').value;
	productoTres=document.getElementById('PrecioTres').value;
	productoUno=parseInt(productoUno);
	productoDos=parseInt(productoDos);
	productoTres=parseInt(productoTres);
	resultado=((productoUno+productoDos+productoTres)/3);
	alert(resultado);
}
function PrecioFinal () 
{
	productoUno=document.getElementById('PrecioUno').value;
	productoDos=document.getElementById('PrecioDos').value;
	productoTres=document.getElementById('PrecioTres').value;
	productoUno=parseInt(productoUno);
	productoDos=parseInt(productoDos);
	productoTres=parseInt(productoTres);
	resultado=((productoUno+productoDos+productoTres)*1.21);
	alert(resultado);
}