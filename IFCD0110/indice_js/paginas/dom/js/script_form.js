document.addEventListener('DOMContentLoaded', () => {
    const inputTexto = document.getElementById('miInput');
    const btn1 = document.getElementById('btnOpcao1');
    const btn2 = document.getElementById('btnOpcao2');
    const btnReset = document.getElementById('btnReset');

    btn1.addEventListener('click', () => {
        inputTexto.value = "Has seleccionado la Opción A";
        inputTexto.style.color = "#3182ce"; // Azul corporativo
    });

    btn2.addEventListener('click', () => {
        inputTexto.value = "Has seleccionado la Opción B";
        inputTexto.style.color = "#38a169"; // Verde para diferenciar
    });

    btnReset.addEventListener('click', () => {
        inputTexto.value = "Texto inicial";
        inputTexto.style.color = "#333"; // Color original
    });
});