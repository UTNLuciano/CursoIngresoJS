function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';
	respuesta=prompt("Ingrese numeros")

	while(respuesta!="si"||respuesta>=0||respuesta<=0){
		contador++;
		positivo++;
		negativo++;
		respuesta=parseInt(respuesta)
		positivo=positivo+respuesta
		negativo=negativo*respuesta
		respuesta=prompt("Ingrese otro numero o 'si' para detenerse y realizar los calculos")
		
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN