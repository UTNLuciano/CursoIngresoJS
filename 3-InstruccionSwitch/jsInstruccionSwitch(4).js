function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
		switch (mesDelAño)
	{
		case"Febrero":
			alert("Tiene 28 días");
			break;
		default:
			alert("Este mes tiene 30 días");
				break;
		case"Enero":
		case"Marzo":
		case"Mayo":
		case"Julio":
		case"Septiembre":
		case"Diciembre":
			alert("Este mes tiene 31 dias")
				break;
	}//FIN DE LA FUNCIÓN
	

}//FIN DE LA FUNCIÓN