document.addEventListener('DOMContentLoaded', () => {
    const texto = document.getElementById("letras");
    const btnPausa = document.getElementById('btnPausa');
    const btnReset = document.getElementById('btnReset');
    const inputVel = document.getElementById('inputVel');
    
    let actual = 16;
    const max = 80;
    let pausado = false;
    let animacionId = null;

    function animar() {
        if (pausado) return;

        if (actual <= max) {
            texto.style.fontSize = actual + "px";
            actual++;
            animacionId = setTimeout(animar, inputVel.value);
        } else {
            actual = 16;
            animacionId = setTimeout(animar, 500);
        }
    }

    btnPausa.addEventListener('click', () => {
        pausado = !pausado;
        if (!pausado) animar();
    });

    btnReset.addEventListener('click', () => {
        pausado = true; // Pausamos primero para evitar colisiones
        clearTimeout(animacionId);
        actual = 16;
        texto.style.fontSize = actual + "px";
        pausado = false;
        animar();
    });

    animar();
});