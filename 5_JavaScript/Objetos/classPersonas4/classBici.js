class Bicicleta {
    //metodo constructor
    constructor (marca, tipoBicicleta, medida, tamanoRuedas, grupo, color){
        this.marca = marca;
        this.tipoBicicleta = tipoBicicleta;
        this.medida = medida;
        this.tamanoRuedas = tamanoRuedas;
        this.grupo = grupo;
        this.color = color;
    }
    //método mostrar datos
    mostrarDatos(){
            return this.marca + " " +
                     this.tipoBicicleta + " " +
                     this.medida + "<br>" +
                     this.tamanoRuedas + "<br>" +
                     this.grupo + "<br>" +
                     this.color + "<br><br>"
    }
}
function imprimirBicicletas() {
    bicicletas = document.getElementById("bicicletas");
    bicicletas.innerHTML = ""
    for (i = 0; i < listadoBicicletas.length; i++){
        bicicletas.innerHTML += listadoBicicletas[i].mostrarDatos();
    }
}
function crearBicicleta() {
    marca = document.getElementById("marca").value;
    tipoBicicleta = document.getElementById("tipoBicicleta").value;
    medida = document.getElementById("medida").value;
    tamanoRuedas = document.getElementById("tamanoRuedas").value;
    grupo = document.getElementById("grupo").value;
    color = document.getElementById("color").value;
    listadoBicicletas.push(new Bicicleta(marca, tipoBicicleta, medida, tamanoRuedas, grupo, color));
    
    // Limpiar formulario
    document.getElementById("marca").value = "";
    document.getElementById("tipoBicicleta").value = "";
    document.getElementById("medida").value = "";
    document.getElementById("tamanoRuedas").value = "";
    document.getElementById("grupo").value = "";
    document.getElementById("color").value = "";
    
    imprimirBicicletas();
}

listadoBicicletas = [];
listadoBicicletas.push(new Bicicleta("Trek","Montaña","L", "29 pulgadas","Shimano Deore","Rojo"));
listadoBicicletas.push( new Bicicleta("Specialized","Carretera","M", "700c","Shimano 105","Azul"));
listadoBicicletas.push( new Bicicleta("Giant","Urbana","S", "26 pulgadas","Shimano Altus","Negro"));
imprimirBicicletas();