function mostrarBebida() {
	num = document.getElementById("numBebida").value;
	var nodosLi = document.getElementsByTagName("lI");
	if (num>0 && num<=nodosLi.length) {
			bebida = nodosLi[num-1].innerHTML;
			document.getElementById("resultado").innerHTML = bebida;
		} else {
			document.getElementById("resultado").innerHTML = "No hay bebidas";
		}
}

function insertarBebida() {
	nombre = document.getElementById("nuevaBebida").value;
	if (nombre.length==0 || nombre=="") {
		document.getElementById("resultado").innerHTML = "Introduce una bebida";
	} else {
		nodoLi = document.createElement("li"); 
		nodoTexto = document.createTextNode(nombre); 
		nodoLi.appendChild(nodoTexto);
		nodoBebidas = document.getElementById("bebidas");
		nodoBebidas.appendChild(nodoLi);
	}
}