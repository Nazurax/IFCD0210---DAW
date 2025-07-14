function factorial() {
	var num = Number(document.getElementById("numero").value);
/*   
	var factorial = 2;
    for (var i = 3; i <= num; i++) {
		factorial = factorial * i;
	}
*/
	var factorial = num;
    for (var i = (num - 1); i > 1; i--) {
		factorial = factorial * i;
	}
	document.getElementById("result").innerHTML = factorial;
}
// num = 4
// factorial = 4*3 = 12 * 2 = 24
// i = 1
