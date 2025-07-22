function validacion() {
	var ret = true;

	var nombre = document.getElementById("nombre").value;
	var apellido1 = document.getElementById("apellido1").value;
	var telefono = document.getElementById("telefono").value;

	var regExpTelefono = /^([0-9]+){9}$/;

	if (nombre == null || nombre.length == 0) {
		alert("El campo Nombre no puede estar vacío");
		ret = false;
	}
	else if (apellido1==null || apellido1.length == 0) {
		alert("El campo Apellido1 no puede estar vacío");
		ret = false;
	}
	else if (regExpTelefono.test(telefono) == false) {
		alert("El campo Telefono es incorrecto");
		ret = false;
	}
	return ret;

}