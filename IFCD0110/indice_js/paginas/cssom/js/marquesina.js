document.addEventListener('DOMContentLoaded', () => {
    let texto = "¡Bienvenido al módulo de desarrollo de componentes dinámicos con JavaScript! ...    ";
    let temporizador = null;
    let ejecutando = false;

    const display = document.getElementById('marquesina');
    const btn = document.getElementById('btnAlternar');

    function moverTexto() {
        texto = texto.substring(1) + texto.charAt(0);
        display.innerText = texto;
    }

    function iniciarEfecto() {
        temporizador = setInterval(moverTexto, 150);
        ejecutando = true;
    }

    function detenerEfecto() {
        clearInterval(temporizador);
        ejecutando = false;
    }

    btn.addEventListener('click', () => {
        ejecutando ? detenerEfecto() : iniciarEfecto();
    });

    iniciarEfecto();
});