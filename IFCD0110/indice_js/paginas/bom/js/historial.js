document.addEventListener("DOMContentLoaded", () => {
    // Referencias a los botones
    const btnAtras = document.getElementById("btnAtras");
    const btnAdelante = document.getElementById("btnAdelante");

    // Definición de funciones
    const irAtras = () => {
        console.log("Navegando hacia atrás...");
        window.history.back();
    };

    const irAdelante = () => {
        console.log("Navegando hacia adelante...");
        window.history.forward();
    };

    // Asociación de eventos
    btnAtras.addEventListener("click", irAtras);
    btnAdelante.addEventListener("click", irAdelante);
});