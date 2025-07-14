function crearInputs(){
	numInputs = Number(document.getElementById("cantidadNumeros").value);
	var codigoHTML = "";
	for (var i = 1; i <= numInputs; i++) {
		codigoHTML += "Núm"+i+': <input type="number" id="num'+i+'"><br>';
	}
	codigoHTML += '<button onclick="calcMayor()">Calcular mayor</button>';
	document.getElementById("inputs").innerHTML = codigoHTML;
}




function calcMayor(){
	var tabla=[];
	//tabla[0] = Number(document.getElementById("num1").value);
	//tabla[1] = Number(document.getElementById("num2").value);
	//tabla[2] = Number(document.getElementById("num3").value);
	//tabla[Núm1 <input type="number" id="num1"><br>3] = Number(document.getElementById("num4").value);
    for (var i = 0; i < numInputs; i++) {
	    tabla[i] = Number(document.getElementById("num"+(i+1)).value);
    }
	valor = tabla[0];
	console.log(tabla);
	for (i=1; i<tabla.length; i++) {
		if (valor < tabla[i]) {
			valor = tabla[i];
		}
	}
	document.getElementById("mayor").innerHTML = valor;
}





