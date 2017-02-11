/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var lamparitas;
 	var cantidad;
 	var precioLamparas
 	var ingresosBrutos
 	marcaLamparas=document.getElementById("Marca").value

 	lamparitas=document.getElementById('Cantidad').value;
 	precioLamparas=lamparitas*35

//A.)
 			if(lamparitas>5)
 		{
 				document.getElementById('precioDescuento').value=precioLamparas*0.5;
 		}
 				else

 //B. Se puede usar default y no las marcas)
			if(lamparitas==5)
 		{
 			switch(marcaLamparas)
 			{	
	 			case"ArgentinaLuz":
	 				document.getElementById('precioDescuento').value=precioLamparas*0.6;
	 			break;
	 			case"FelipeLamparas":
	 			case"JeLuz":
	 			case"HazIluminacion":
	 			case"Osram":
	 				document.getElementById('precioDescuento').value=precioLamparas*0.7;
	 			break;		
 			}
 		}
 	//C. Cheueqr cuentas, se hace un descuento y se muestra el precio descontado no el descuento sobre el total
 		if(lamparitas==4)
 			{
 				switch(marcaLamparas)
 				{
 					case"ArgentinaLuz":
 						document.getElementById('precioDescuento').value=precioLamparas*0.15;
 						break;
 					case"FelipeLamparas":
 						document.getElementById('precioDescuento').value=precioLamparas*0.10;
 						break;
 					default:
 						document.getElementById('precioDescuento').value=precioLamparas*0.05;
 						break;
 				}
 			}
 			//D. 

 			if(precioLamparas>120)
 			{
 				document.getElementById('precioDescuento').value=precioLamparas*0.10;
 			}


}
