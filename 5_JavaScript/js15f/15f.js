function mostrar(numSel,lista,result) {
	num = document.getElementById(numSel).value;
	nodo = document.getElementById(lista);
	var nodosLi = nodo.getElementsByTagName("lI");
	if (num>0 && num<=nodosLi.length) {
			item = nodosLi[num-1].innerHTML;
			document.getElementById(result).innerHTML += item+"<br>";
		} else {
			document.getElementById(result).innerHTML += "No existe<br>";
		}	
}
function insertar(nueva,lista,result) {
	nombre = document.getElementById(nueva).value;
	if (nombre.length==0 || nombre=="") {
		document.getElementById(result).innerHTML = "Introduce un elemento";
	} else {
		nodoLi = document.createElement("li"); 
		nodoTexto = document.createTextNode(nombre); 
		nodoLi.appendChild(nodoTexto);
		nodo = document.getElementById(lista);
		nodo.appendChild(nodoLi);
	}
}

function borrar(numSel,lista,result) {
	num = document.getElementById(numSel).value;
	nodoBebidas = document.getElementById(lista);
	var nodosLi = nodoBebidas.getElementsByTagName("lI");
	if (num>0 && num<=nodosLi.length) {
			nodosLi[num-1].parentNode.removeChild(nodosLi[num-1]);
			document.getElementById(result).innerHTML = 'Bebida borrada';
		} else {
			document.getElementById(result).innerHTML = "No se puede borrar la bebida";
		}
}










