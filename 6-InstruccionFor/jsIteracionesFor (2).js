function Mostrar()
{
	var contador=0;	
	var mascota;
	var contadorMascotaSi=0; //acumulo gente con mascota
	var tipoDeMascota;
	var contadorMascotaNo=0; //acumulo gente sin mascota
	var edad;
	var edadPersonaMasVieja;
	var edadPersonaMasViejaSinMascota;
	var contadorGatos=0;
	var edadDeGato;
	var nombreDeGato;
	var contadorDeGatosMenoresACinco=0
	var contadorNombreDeGato=0

	for(;contador<3;)
	{
		mascota=prompt("¿Tiene mascota si o no?");

		while(mascota!="si"&&mascota!="no")
		{
			mascota=prompt("Ingrese unicamente si o no");
		}

		if(mascota=="si")
		{
			contadorMascotaSi++;
			tipoDeMascota=prompt("¿Que tipo de mascota tiene?");

			while(tipoDeMascota!="perro"&&tipoDeMascota!="gato")
			{
				tipoDeMascota=prompt("Ingrese unicamente perro o gato");
			}
			if(tipoDeMascota=="gato")
			{
				edadDeGato=parseInt(edadDeGato)
				edadDeGato=prompt("Ingrese edad de su gato")
			}
			if(edadDeGato<5)
			{
				nombreDeGato=prompt("Ingrese nombre de su gato")
			}
		}

		else //salgo del if=="si" y queda como unica alternativa el "no" que fue validado en el while, almaceno que no tengo mascota
			
		{
			contadorMascotaNo++;
		}

		edad=prompt("Ingrese su edad");
		edad=parseInt(edad)
		while(edad<=0)
		{
			edad=prompt("Ingrese una edad valida")
		}

		if(contador==1) //determino el mas viejo
		{
			edadPersonaMasVieja=edad;
		}
		else
		{
			if(edad>edadPersonaMasVieja) // si la edad ingresada es mayor a la edad ingresada durante contador=1,la edad pasa a valer "edadPersonaMasVieja"
			{
				edadPersonaMasVieja=edad;
			}
		}

		if(edad==edadPersonaMasVieja&&mascota=="no")	//
		{
			edadPersonaMasViejaSinMascota=edadPersonaMasVieja;
		}
		
		if(edad>30&&tipoDeMascota=="gato"&&edadDeGato<5&&nombreDeGato=="")
		{
			contadorNombreDeGato=1
		}
		else if(contadorNombreDeGato=1)
		{
			alert("Su gato se llama: "+nombreDeGato);
		}
		contador++;
	}

}

/* cat code (nombre del primer gato de una mujer mayor a 30 y que el gato no tenga mas de 5 años)

			if(mascota=="gato")
				{
				contadorGatos++;
				edadDeGato=prompt("Ingrese la edad de su gato");
				edadDeGato=parseInt(edadDeGato)
				nombreDeGato=prompt("Ingrese el nombre de su gato")
				}
			if else(edadDeGato<4)
			{
				contadorDeGatosMenoresACinco++
			}
*/
