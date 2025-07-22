class Persona {
	//metodo constructor
	constructor (nombre, apellido1, apellido2, dni, fechaNacimiento, sexo){
		this.nombre = nombre;
		this.apellido1 = apellido1;
		this.apellido2 = apellido2;
		this.dni = dni;
		this.fechaNacimiento = fechaNacimiento;
		this.sexo = sexo;
	}
	//método mostrar datos
	mostrarDatos(){
			return this.nombre + " " + 
					 this.apellido1 + " " + 
					 this.apellido2 + "<br>" + 
					 this.dni + "<br>" + 
					 this.fechaNacimiento + "<br>" + 
					 this.sexo + "<br>"
	}
}
function imprimirPersonas() {
	cargarPersonas();
	personas = document.getElementById("personas"); 
	personas.innerHTML = ""
	for (i = 0; i < listadoPersonas.length; i++){
		personas.innerHTML += listadoPersonas[i].mostrarDatos() +
		                      "<input type='button' value='Borrar' onclick='borrarPersona("+i+")'>"+
		                      "<input type='button' value='Modificar' onclick='modificarPersona1("+i+")'>";

	}
}
function crearPersona() {
	nombre = document.getElementById("nombre").value;
	apellido1 = document.getElementById("apellido1").value;
	apellido2 = document.getElementById("apellido2").value;
	dni = document.getElementById("dni").value;
	fechaNacimiento = document.getElementById("fechaNacimiento").value;
	sexo = document.getElementById("sexo").value;
	listadoPersonas.push(new Persona(nombre, apellido1, apellido2, dni, fechaNacimiento, sexo));
    guardarPersonas();
	imprimirPersonas();

}
function guardarPersonas() {
	//console.log(listadoPersonas);
	var personasJSON = JSON.stringify(listadoPersonas);
	//console.log(personasJSON);
	localStorage.setItem("personas", personasJSON);
}
function cargarPersonas() {
	var personasJSON = localStorage.getItem("personas");	
	listadoPersonas = JSON.parse(personasJSON);
	//console.log(listadoPersonas);
	if (listadoPersonas == null){
		listadoPersonas = [];
	} else {
		personasConvertidas = [];
		for (i = 0; i < listadoPersonas.length; i++){
		    personasConvertidas.push(new Persona(listadoPersonas[i].nombre, listadoPersonas[i].apellido1, listadoPersonas[i].apellido2, listadoPersonas[i].dni, listadoPersonas[i].fechaNacimiento, listadoPersonas[i].sexo));	
		}
		console.log(personasConvertidas);
		listadoPersonas = personasConvertidas;
	}
}
function borrarPersona(i) {
	listadoPersonas.splice(i, 1);
	guardarPersonas();
	imprimirPersonas();
}
function modificarPersona1(i) {
	var per = listadoPersonas[i];
	document.getElementById("nombre").value = per.nombre;
	document.getElementById("apellido1").value = per.apellido1;
	document.getElementById("apellido2").value = per.apellido2;
	document.getElementById("dni").value = per.dni;
	document.getElementById("fechaNacimiento").value = per.fechaNacimiento;
	document.getElementById("sexo").value = per.sexo;
	document.getElementById("botonCrear").style.display = "none";
	document.getElementById("botonModificar").style.display = "block";
	document.getElementById("mensaje").innerHTML = "Modificar una persona";
	document.getElementById("indicePersona").value = i;
}
function modificarPersona2() {
	per = listadoPersonas[document.getElementById("indicePersona").value];
	per.nombre = document.getElementById("nombre").value;
	per.apellido1 = document.getElementById("apellido1").value;
	per.apellido2 = document.getElementById("apellido2").value;
	per.dni = document.getElementById("dni").value;
	per.fechaNacimiento = document.getElementById("fechaNacimiento").value;
	per.sexo = document.getElementById("sexo").value;
	document.getElementById("botonCrear").style.display = "block";
	document.getElementById("botonModificar").style.display = "none";
	document.getElementById("mensaje").innerHTML = "Crear una persona";
	guardarPersonas();
	imprimirPersonas();
	borrarFormulario();	
}
function borrarFormulario() {
	document.getElementById("nombre").value = "";	
	document.getElementById("apellido1").value = "";
	document.getElementById("apellido2").value = "";
	document.getElementById("dni").value = "";
	document.getElementById("fechaNacimiento").value = "";
	document.getElementById("sexo").value = "";
}
imprimirPersonas();