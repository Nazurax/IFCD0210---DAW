function aumentar() {
	// Aumentamos H1
	nodoH1 = document.getElementsByTagName("h1")[0];
	tamanyH1 = window.getComputedStyle(nodoH1, null).getPropertyValue("font-size");
	nodoH1.style.fontSize = (parseInt(tamanyH1) + 2) + "px";
	// Aumentamos p
    //nodoP = document.getElementsByTagName("p")[0];
    //tamanyP = window.getComputedStyle(nodoP, null).getPropertyValue("font-size");
    //nodoP.style.fontSize = (parseInt(tamanyP) + 2) + "px";
	// Aumentamos body
    nodoBody = document.getElementsByTagName("body")[0];
    tamanyBody = window.getComputedStyle(nodoBody, null).getPropertyValue("font-size");
    nodoBody.style.fontSize = (parseInt(tamanyBody) + 2) + "px";

}
function disminuir() {
	// Disminuimos H1
	nodoH1 = document.getElementsByTagName("h1")[0];
	tamanyH1 = window.getComputedStyle(nodoH1, null).getPropertyValue("font-size");
	nodoH1.style.fontSize = (parseInt(tamanyH1) - 2) + "px";
	// Disminuimos p
    //nodoP = document.getElementsByTagName("p")[0];
    //tamanyP = window.getComputedStyle(nodoP, null).getPropertyValue("font-size");
    //nodoP.style.fontSize = (parseInt(tamanyP) - 2) + "px";
	// Disminuimos body
    nodoBody = document.getElementsByTagName("body")[0];
    tamanyBody = window.getComputedStyle(nodoBody, null).getPropertyValue("font-size");
    nodoBody.style.fontSize = (parseInt(tamanyBody) - 2) + "px";
}