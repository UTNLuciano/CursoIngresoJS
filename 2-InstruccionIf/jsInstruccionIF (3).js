function Mostrar()
{
//tomo la edad  


	var edad;

	edad=document.getElementById('edad').value;
	/* 
		//uso del < > sin else
		if(edad > 17)
			{
				alert("Usted es mayor de edad");
			}
		if(edad < 18)
			{
				alert("Usted es menor de edad");
			}
*/
		//uso el else
	if(edad > 17)
			{
				alert("Usted es mayor de edad");
			}
	else
			{
				alert("Usted es menor de edad");
			}

}//FIN DE LA FUNCIÓN