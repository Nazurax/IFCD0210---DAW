function mostrarBebida() {
	num = document.getElementById("numBebida").value;
	nodoBebidas = document.getElementById("bebidas");
	var nodosLi = nodoBebidas.getElementsByTagName("lI");
	if (num>0 && num<=nodosLi.length) {
			bebida = nodosLi[num-1].innerHTML;
			document.getElementById("resultado").innerHTML = bebida;
		} else {
			document.getElementById("resultado").innerHTML = "No hay bebidas";
		}
}
function mostrarComida() {
	num = document.getElementById("numComida").value;
	nodoComidas = document.getElementById("comidas");
	var nodosLi = nodoComidas.getElementsByTagName("lI");
	if (num>0 && num<=nodosLi.length) {
			comida = nodosLi[num-1].innerHTML;
			document.getElementById("resultado2").innerHTML = comida;
		} else {
			document.getElementById("resultado2").innerHTML = "No hay comidas";
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
function insertarComida() {
	nombre = document.getElementById("nuevaComida").value;
	if (nombre.length==0 || nombre=="") {
		document.getElementById("resultado2").innerHTML = "Introduce una comida";
	} else {
		nodoLi = document.createElement("li"); 
		nodoTexto = document.createTextNode(nombre); 
		nodoLi.appendChild(nodoTexto);
		nodoComidas = document.getElementById("comidas");
		nodoComidas.appendChild(nodoLi);
	}
}
function borrarBebida() {
	num = document.getElementById("numBebida").value;
	nodoBebidas = document.getElementById("bebidas");
	var nodosLi = nodoBebidas.getElementsByTagName("lI");
	if (num>0 && num<=nodosLi.length) {
			nodosLi[num-1].parentNode.removeChild(nodosLi[num-1]);
			document.getElementById("resultado").innerHTML = 'Bebida borrada';
		} else {
			document.getElementById("resultado").innerHTML = "No se puede borrar la bebida";
		}

}
function borrarComida() {
	num = document.getElementById("numComida").value;
	nodoComidas = document.getElementById("comidas");
	var nodosLi = nodoComidas.getElementsByTagName("lI");
	if (num>0 && num<=nodosLi.length) {
			nodosLi[num-1].parentNode.removeChild(nodosLi[num-1]);
			document.getElementById("resultado2").innerHTML = 'Comida borrada';
		} else {
			document.getElementById("resultado2").innerHTML = "No se puede borrar la comida";
		}

}