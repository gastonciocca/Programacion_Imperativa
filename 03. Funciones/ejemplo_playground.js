// Funcion Expresada

let sumar = function(numeroA, numeroB){
        return numeroA + numeroB;
}

console.log (sumar (7,9));

// Funcion Declarada
function restar (numeroC, numeroD){
    return numeroC - numeroD;
}
console.log (restar (10,3));

// Ejemplo de Scope

let mensaje = "Hola";

function saludar () {
    let mensaje = "chau";
    return mensaje;
}
console.log (mensaje);  /* global */
console.log (saludar()); /* local */

// Arrow Functions

let laMitad = numero => numero / 2;
console.log (laMitad(8));

let dividir = (numeroH, numeroJ) => numeroH / numeroJ;

console.log (dividir(20,4));


let multiplicarPorDos = number => number *2;
console.log (multiplicarPorDos(123));

let mostrarNombre = () => 'Mi nombre es Hernán';
console.log (mostrarNombre());

let saludo = nombre => 'Hola, ' + nombre + '!';
console.log saludo(gaston);