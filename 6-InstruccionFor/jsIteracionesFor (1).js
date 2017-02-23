function Mostrar()
{
	var cont=0;
	var numeroRandom;
	var cont1=0;
	var cont2=0
	var cont3=0
	var cont4=0
	var cont5=0
	var cont6=0
	var cont7=0
	var cont8=0
	var cont9=0
	var cont10=0

	for(;cont<100;cont++)
	{
		numeroRandom=Math.floor((Math.random() * 10) + 1);
	
		switch(numeroRandom)
		{
			case 1:
			cont1++;
			break;

			case 2:
			cont2++;
			break;

			case 3:
			cont3++;
			break;

			case 4:
			cont3++;
			break;

			case 5:
			cont5++;
			break;

			case 6:
			cont6++;
			break;

			case 7:
			cont7++;
			break;

			case 8:
			cont8++;
			break;

			case 9:
			cont9++;
			break;

			case 10:
			cont10++;
			break;
		}

	}
	console.log("La cantidad de unos "+cont1)
	console.log("La cantidad de dos "+cont2)
	console.log("La cantidad de tres "+cont3)
	console.log("La cantidad de cuatros "+cont4)	
	console.log("La cantidad de cincos "+cont5)
	console.log("La cantidad de seis "+cont6)
	console.log("La cantidad de sietes "+cont7)
	console.log("La cantidad de ochos "+cont8)
	console.log("La cantidad de nueves "+cont9)
	console.log("La cantidad de diez "+cont10)













	/* for(;;)
	{
		console.log(cont);
		cont++
		if(cont==10)
		{
			break; //break para salir del for "si cont = 10, sale del for"
		}
	}
	*/
}