function calcular() {
	nota = Number(document.getElementById("notaNum").value);
	if (nota>=19 && nota<=20) {
		letra = 'La letra de la nota '+nota+' es A';
	} else if (nota>=16 && nota<19) {
		letra = 'La letra de la nota '+nota+' es B';
	} else if (nota>=12 && nota<16) {
		letra = 'La letra de la nota '+nota+' es C';	
	} else if (nota>=9 && nota<12) {
		letra = 'La letra de la nota '+nota+' es D';
	} else if (nota>=0 && nota<9) {
		letra = 'La letra de la nota '+nota+' es E';
	} else if (isNaN(nota)) {
		letra = 'La nota introducida es no númerica';
	} else {
		letra = 'La nota esta fuera de rango';
	}
	document.getElementById("nota").innerHTML = letra;
}	