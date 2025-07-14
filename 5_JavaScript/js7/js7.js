function calcularPrecio() {
	var precio = document.getElementById('precioEntrada').value;
	var numEntradas = document.getElementById('numEntradas').value;
    var precioTotal = 0;
    if (numEntradas == 1) {
		precioTotal = precio;
	} else if (numEntradas == 2) {
		precioTotal = precio*numEntradas*0.90;
	} else if (numEntradas == 3) {
		precioTotal = precio*numEntradas*0.85;
	} else if (numEntradas == 4) {
		precioTotal = precio*numEntradas*0.80;
	} else if (numEntradas > 4) {
		precioTotal =precio*numEntradas*0.75;
	} else {
		precioTotal = 'Error';
	}
	document.getElementById('resultado').innerHTML = "El precio total es "+precioTotal+" €";
}