function compararSumar() {
	num1 = Number(document.getElementById("num1").value);
	num2 = Number(document.getElementById("num2").value);
	if (num1 < num2) {
		mensaje = num1 + " es menor que " + num2;
	} else if (num1 == num2) {
		mensaje = num1 + " es igual que " + num2;
	} else {
		mensaje = num1 + " es mayor que " + num2;
	}
	document.getElementById("result").innerHTML = mensaje;
//	document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "<br>"
//	                                              + "La suma de los 2 números es: " + (num1 + num2);
	document.getElementById("result").innerHTML +=  "<br>" + "La suma de los 2 números es: " + (num1 + num2);
}