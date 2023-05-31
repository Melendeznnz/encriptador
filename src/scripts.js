var userInput = document.querySelector("#mensaje");
var mensajeOutput = document.querySelector("#salida");
var palabraLowerCase = ["a", "e", "i", "o", "u", " "];
var significadoLowerCase = ["ai", "enter", "imes", "ober", "ufat", " "];
var palabraUpperCase = ["A", "E", "I", "O", "U", " "];
var significadoUpperCase = ["AI", "ENTER", "IMES", "OBER", "UFAT", " "];
var palabraActual = [];
var significadoActual = [];

function codificacionAlura(reemplazar, reemplazo) {
    mensajeOutput.value = userInput.value;
    var estadoAnterior = mensajeOutput.value;
    var estadoPosterior = "";
    var matrisNum = 0;

    while (mensajeOutput.value != estadoPosterior) {
        mensajeOutput.value = estadoPosterior;
        while (matrisNum < 26) {
            estadoPosterior = estadoAnterior.replace(palabraActual[matrisNum], significadoActual[matrisNum]);
            estadoAnterior = estadoPosterior;
            matrisNum++;
        }
        matrisNum = 0;
    }
    userInput.value = "";
    mensajeOutput.value = mensajeOutput.value.toLowerCase();
}

function codificacion() {
    palabraActual = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " "]
    significadoActual = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    codificacionAlura();
    palabraActual = palabraLowerCase;
    significadoActual = significadoUpperCase;
    codificacionAlura();
}

function deCodificacion() {
    palabraActual = significadoLowerCase;
    significadoActual = palabraUpperCase;
    codificacionAlura();
} //por alguna razon cuando aplico esta función, la codificación deja de funcionar, revizar el porque

var button = document.querySelector('#encriptar');
button.onclick = codificacion;

var button = document.querySelector('#desencriptar');
button.onclick = deCodificacion;