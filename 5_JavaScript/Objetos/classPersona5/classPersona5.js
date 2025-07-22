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
		                      "<input type='button' value='Borrar' onclick='borrarPersona("+i+")'><br>";
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

imprimirPersonas();





			 
