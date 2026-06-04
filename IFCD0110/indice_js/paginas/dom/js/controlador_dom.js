document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputDato');
    const btn = document.getElementById('btnInsertar');
    const display = document.getElementById('resultado');

    btn.addEventListener('click', () => {
        const valor = input.value.trim();
        
        if (valor !== "") {
            display.innerText = valor;
            input.value = ""; // Limpieza de campo tras la operación
        } else {
            alert("Por favor, escribe algo primero.");
        }
    });
});