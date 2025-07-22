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
personas = document.getElementById("personas"); 
listadoPersonas = [];
listadoPersonas.push(new Persona("pepe","lopez","garcia", "12345678P","01/01/1990","hombre"));
listadoPersonas.push( new Persona("pepa","pig","pig", "87654321P","01/01/2000","mujer"));
listadoPersonas.push( new Persona("Mickie","Mouse","Disney", "87654321P","01/01/2000","Hombre"));
for (i = 0; i < listadoPersonas.length; i++){
	personas.innerHTML += listadoPersonas[i].mostrarDatos();
}





			 
