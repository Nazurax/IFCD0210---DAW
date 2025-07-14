function calcularPrecio() {
	var precio = Number(document.getElementById('precioEntrada').value);
	var numEntradas = Number(document.getElementById('numEntradas').value);
    var precioTotal = 0;
    switch(numEntradas){
	    case 1:
	    	precioTotal = precio;  
	    	break;
	    case 2: 
	    	precioTotal =precio*numEntradas*0.90;
	    	break
	    case 3:
	    	precioTotal =precio*numEntradas*0.85;
	    	break;
	    case 4:
	    	precioTotal =precio*numEntradas*0.80;
	    	break
	    default:
	    	precioTotal =precio*numEntradas*0.75;
    }
	document.getElementById('resultado').innerHTML = "El precio total es "+precioTotal+" €";
}