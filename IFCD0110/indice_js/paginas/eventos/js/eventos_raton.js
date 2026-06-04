// ==========================================================================
// LABORATORIO INTEGRAL DE EVENTOS DE RATÓN (MOUSE EVENTS SUITE)
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
    
    // --- ELEMENTOS DE LA INTERFAZ ---
    const boton = document.getElementById('elementoBoton');
    const feedbackBoton = document.getElementById('feedbackBoton');
    
    const imagen = document.getElementById('elementoImagen');
    const feedbackImagen = document.getElementById('feedbackImagen');
    
    const zonaRastreo = document.getElementById('zonaRastreo');
    const coordCoordenadas = document.getElementById('coordCoordenadas');
    const coordPantalla = document.getElementById('coordPantalla');
    
    const consolaLog = document.getElementById('consolaLog');
    const btnLimpiarConsola = document.getElementById('btnLimpiarConsola');

    // --- FUNCIÓN UTILITARIA PARA ESCRIBIR EN LA BITÁCORA ---
    function registrarEvento(nombreEvento, descripcion) {
        const marcaTiempo = new Date().toLocaleTimeString();
        const nuevaLinea = document.createElement('div');
        nuevaLinea.className = `linea-log event-${nombreEvento.toLowerCase()}`;
        nuevaLinea.innerHTML = `<span class="timestamp">[${marcaTiempo}]</span> <strong class="ev-name">${nombreEvento}</strong>: ${descripcion}`;
        
        consolaLog.appendChild(nuevaLinea);
        // Auto-scroll hacia abajo para ver el último registro
        consolaLog.scrollTop = consolaLog.scrollHeight;
    }

    // --- 1. EVENTOS SOBRE EL BOTÓN (Estructura Base + Clics Avanzados) ---

    // MouseOver: Entrar al botón
    boton.addEventListener('mouseover', function () {
        feedbackBoton.textContent = 'Estás encima del botón.';
        feedbackBoton.className = "resultado activo-btn";
        registrarEvento('MOUSEOVER', 'El cursor entró al área del Botón.');
    });

    // MouseOut: Salir del botón
    boton.addEventListener('mouseout', function () {
        feedbackBoton.textContent = 'Ya no estás encima del botón.';
        feedbackBoton.className = "resultado inactivo";
        registrarEvento('MOUSEOUT', 'El cursor abandonó el área del Botón.');
    });

    // Click: Clic estándar
    boton.addEventListener('click', function () {
        feedbackBoton.textContent = '¡Has hecho clic!';
        registrarEvento('CLICK', 'Se ejecutó un clic primario sobre el Botón.');
    });

    // DblClick: Doble clic rápido
    boton.addEventListener('dblclick', function () {
        feedbackBoton.textContent = '¡Doble clic ejecutado!';
        registrarEvento('DBLCLICK', 'Disparo de doble pulsación consecutiva en el Botón.');
    });


    // --- 2. EVENTOS SOBRE LA IMAGEN (Estructura Base + Presión Mecánica) ---

    // MouseOver: Entrar a la imagen
    imagen.addEventListener('mouseover', function () {
        feedbackImagen.textContent = 'Estás sobre la imagen...';
        feedbackImagen.className = "resultado activo-img";
        registrarEvento('MOUSEOVER', 'El cursor entró al área de la Imagen.');
    });

    // MouseOut: Salir de la imagen
    imagen.addEventListener('mouseout', function () {
        feedbackImagen.textContent = 'Estás fuera de la imagen...';
        feedbackImagen.className = "resultado inactivo";
        registrarEvento('MOUSEOUT', 'El cursor abandonó el área de la Imagen.');
    });

    // MouseDown: Mantener pulsado el clic dentro de la imagen
    imagen.addEventListener('mousedown', function (e) {
        let botonPulsado = e.button === 0 ? 'Izquierdo' : e.button === 2 ? 'Derecho' : 'Central';
        feedbackImagen.textContent = `Presionando botón ${botonPulsado}...`;
        registrarEvento('MOUSEDOWN', `Se mantiene presionado el botón ${botonPulsado} en la Imagen.`);
    });

    // MouseUp: Soltar el clic dentro de la imagen
    imagen.addEventListener('mouseup', function () {
        feedbackImagen.textContent = 'Has soltado el botón.';
        registrarEvento('MOUSEUP', 'Se liberó la presión del clic sobre la Imagen.');
    });

    // ContextMenu: Bloquear o advertir el clic derecho sobre imágenes para protegerlas
    imagen.addEventListener('contextmenu', function (e) {
        e.preventDefault(); // Evita que se abra el menú contextual original del navegador
        feedbackImagen.textContent = '¡Menú contextual bloqueado!';
        registrarEvento('CONTEXTMENU', 'Intento de clic derecho interceptado y neutralizado.');
    });


    // --- 3. EVENTO DE MOVIMIENTO DE PRECISIÓN (MouseMove) ---
    zonaRastreo.addEventListener('mousemove', function (e) {
        // Coordenadas relativas a la caja del radar
        const cajaRaiz = zonaRastreo.getBoundingClientRect();
        const xRelativa = Math.round(e.clientX - cajaRaiz.left);
        const yRelativa = Math.round(e.clientY - cajaRaiz.top);

        // Coordenadas globales respecto a la pantalla del monitor
        const xPantalla = e.screenX;
        const yPantalla = e.screenY;

        coordCoordenadas.textContent = `X: ${xRelativa}px, Y: ${yRelativa}px`;
        coordPantalla.textContent = `X: ${xPantalla}px, Y: ${yPantalla}px`;

        // No registramos en la consola de texto para evitar saturación de logs por cada píxel
    });


    // --- 4. CONTROL DE LA CONSOLA ---
    btnLimpiarConsola.addEventListener('click', function () {
        consolaLog.innerHTML = '<div class="linea-sistema">[Sistema]: Bitácora vaciada por el usuario.</div>';
    });

});