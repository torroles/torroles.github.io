document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('formularioCore');
    const campoSeleccion = document.getElementById('campoSeleccion');
    const campoCambio = document.getElementById('campoCambio');
    const consolaLog = document.getElementById('consolaLog');
    const btnLimpiar = document.getElementById('btnLimpiarConsola');

    function registrarEvento(nombre, desc) {
        const tiempo = new Date().toLocaleTimeString();
        const div = document.createElement('div');
        div.className = "linea-log";
        div.innerHTML = `[${tiempo}] <strong class="ev-name">${nombre}</strong>: ${desc}`;
        consolaLog.appendChild(div);
        consolaLog.scrollTop = consolaLog.scrollHeight;
    }

    campoSeleccion.addEventListener('select', () => registrarEvento('SELECT', 'Texto seleccionado.'));
    
    campoCambio.addEventListener('focus', () => registrarEvento('FOCUS', 'Campo activo.'));
    campoCambio.addEventListener('input', (e) => document.getElementById('contadorCaracteres').textContent = `Caracteres: ${e.target.value.length}`);
    campoCambio.addEventListener('blur', () => registrarEvento('BLUR', 'Foco perdido.'));
    campoCambio.addEventListener('change', (e) => registrarEvento('CHANGE', `Mutación: ${e.target.value}`));

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        registrarEvento('SUBMIT', 'Payload procesado.');
        alert("Formulario procesado correctamente.");
    });

    btnLimpiar.addEventListener('click', () => {
        consolaLog.innerHTML = '<div class="linea-sistema">[Sistema]: Purga completa.</div>';
        formulario.reset();
    });
});