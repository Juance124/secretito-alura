let listanumeros = [];
let numeromax = 10;
let numerosecreto = generarnumerosecreto();
let intentos = 1;
console.log(numerosecreto);

asignarTextoelemento("h1", "juego del numero secreto");
asignarTextoelemento("p", "Indica el numero del 1 al 10");

function asignarTextoelemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}
function intento() {
    let numerodeusuario = parseInt(document.getElementById (`ValorUsuario`).value);
    
    console.log(intentos);
    if (numerodeusuario === numerosecreto) {
        asignarTextoelemento(`p`, `acertaste al número en ${intentos} ${(intentos===1)? "vez": "veces"}`);
        document.getElementById(`reiniciar`).removeAttribute("disabled");
    } else {
        if (numerodeusuario > numerosecreto) {
            asignarTextoelemento (`p`,"el numero secreto es menor");
        } else {
            asignarTextoelemento (`p`,"el numero es mayor");
        }
        intentos++;
        limpiar();
    }
    return;
}
function limpiar() {
    document.querySelector("#ValorUsuario").value ="";
}

function generarnumerosecreto() {
    let numerosecreto = Math.floor(Math.random()*numeromax)+1;
    if (listanumeros.length == numeromax) {
        asignarTextoelemento ("p" , " se acabaron todos los numeros posibles")
    
    }
    if (listanumeros.includes(numerosecreto)) {
        return generarnumerosecreto();
    } else {
        listanumeros.push(numerosecreto);
        return numerosecreto;
    }
}
function reiniciarjuego() {
    limpiar();
    mensajes();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
function mensajes() {
    asignarTextoelemento("h1", "Juego del numero secreto");
    asignarTextoelemento("p", "Indica el numero del 1 al 10");
    numerosecreto = generarnumerosecreto();
    intentos = 1;
    console.log(numerosecreto);
}

