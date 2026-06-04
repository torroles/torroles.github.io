// ==========================================
// LÓGICA DE NEGOCIO Y CONTROL DEL CARRUSEL
// ==========================================
var contador = 0;
var arranca; // Identificador global del intervalo de tiempo

function comienza() {
    // Uso correcto pasando la referencia de la función
    arranca = window.setInterval(avanza, 1000);
}

function parar() {
    clearInterval(arranca);
}

function avanza() {
    contador++;
    console.log("Fotograma actual:", contador);

    // Límite de seguridad: detiene el carrusel tras 10 iteraciones
    if (contador >= 10) {
        parar();
    } else {
        var foto1 = document.getElementById("img1");
        var foto2 = document.getElementById("img2");

        // Alternancia de capas basada en la pila de renderizado (z-index)
        if (foto1.style.zIndex == 1) {
            foto1.style.zIndex = 0;
            foto2.style.zIndex = 1;
        } else {
            foto1.style.zIndex = 1;
            foto2.style.zIndex = 0;
        }
    }
}