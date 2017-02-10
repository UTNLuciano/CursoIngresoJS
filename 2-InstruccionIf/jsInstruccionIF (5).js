function Mostrar()
{
//tomo la edad  
	var edad;
	edad=document.getElementById('edad').value;
	
		//else en vez de negación
	/*if (edad < 18 && edad > 12)
		{
		}
			else
		{		
			alert("Usted no es adolescente");
		}*/

		//negación
	if (!(edad < 18 && edad > 12))
		{
			alert("Usted no es adolescente");
		}
		
}//FIN DE LA FUNCIÓN