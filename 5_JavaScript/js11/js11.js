function calcMayor(){
	var tabla=[];
	//tabla[0] = Number(document.getElementById("num1").value);
	//tabla[1] = Number(document.getElementById("num2").value);
	//tabla[2] = Number(document.getElementById("num3").value);
	//tabla[3] = Number(document.getElementById("num4").value);
    for (var i = 0; i < 4; i++) {
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





