function Mostrar()
{

	var contador=0;
	var edad;
	var max;
	var min;
	var nombreDelMayor
	var nombreDelMenor
	var sexo //solo nota mas baja
	var nota
	var notaMin
	var sexoMinimo
	var hombresDesaprobados
	var mujeresDesaprobadas
	var acumuladorNotas  //acumulador notas
	var promedioNotas //acumular notas y sacar promedio
	var promedoEdadMujeres // edad promedio de las mujeres
	var cantidadMujeresNotaParMenores //cantidadMujeresNotaParMenores +1 o ++
	var bandera="nadie"; 
	var nombreDelDiez;
	var	edadDelDiez;
	var	sexoDelDiez;


	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{

		edad=prompt("Ingrese edad");
		(edad)=parseInt(edad); //Transforma el contenido de la variable, no la variable
		while(edad<0||edad>100)
		{
			edad=prompt("error Ingrese una edad valida");
			edad=parseInt(edad);
		
		}
		contador++;
		nombre=prompt("Por favor ingrese nombre");

		if(contador==1){	//La primera vez las primeras edades son maximos y minimos
			max=edad;
			min=edad;
			nombreDelMayor=nombre;
			nombreDelMenor=nombre;
		}
		else
		{
			if(edad>max)
			{
				max=edad;	//Dentro del if trabajo con los maximos
				nombreDelMayor=nombre;
				document.getElementById('maximo').value=nombreDelMayor	

			}
			if(edad<min)
			{
				min=edad; 
				nombreDelMenor=nombre;//Dentro del if trabajo con los minimos
			}
		}

		sexo=prompt("Ingrese m o f segun sexo")
		if(contador==1){
			notaMin=nota;
			sexoMinimo=sexo;	
		}
		else
		{
			if(nota<notaMin)
			{
				notaMin=nota;
				sexoMinimo=sexo;
			}
		}

//primero que se saco 10
		if(nota==10&&bandera=="nadie")
		{
			nombreDelDiez=nombre;
			edadDelDiez=edad;
			sexoDelDiez=sexo;
		}
		// cuantas mujeres y hombres desaprobaron
		if(nota<4)
		{
			if(sexo=="m");
			{
				
				hombresDesaprobados=hombresDesaprobados++
				alert("Hombres desaprobados: "+hombresDesaprobados);
			}
			if(sexo=="f");
			{
				mujeresDesaprobadas=mujeresDesaprobadas++
				alert("Mujeres desaprobadas: "+mujeresDesaprobadas);
			}

		}
	
	}

	
}//FIN DE LA FUNCIÓN

//while(respuesta=!no)
	//promedioNotas=acumuladorWNotas/contador

	//para donde se pide nota: //cantidad de personas aprobadas
	// cuantas mujeres y hombres desaprobaron