
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