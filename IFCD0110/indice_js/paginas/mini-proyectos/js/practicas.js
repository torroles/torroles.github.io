// ==========================================
// EJERCICIO 1: LÓGICA DE ELECCIÓN DE PERSONAS
// ==========================================
function elegir(nombre, edad, estudios) {
    // Si tiene entre 21 y 30 años (inclusive) O tiene estudios de nivel 2 o superior -> NO ELEGIDO
    if ((edad > 20 && edad <= 30) || estudios >= 2) {
        return nombre + " no es elegido";
    }
    return nombre + " es elegido";
}

// Función conectada al botón del formulario HTML
function procesarEleccion() {
    const nombre = document.getElementById("inputNombre").value || "Persona anónima";
    const edad = parseInt(document.getElementById("inputEdad").value) || 0;
    const estudios = parseInt(document.getElementById("inputEstudios").value) || 0;

    const resultadoTexto = elegir(nombre, edad, estudios);
    document.getElementById("resultadoEleccion").textContent = resultadoTexto;
}


// ==========================================
// EJERCICIO 2: LÓGICA DE DESCUENTO DEL PAN
// ==========================================
function descuento(nBarras, precio) {
    var descuentoEfectuado;
    var porcentaje;
    var pvp;
    var pfinal;

    pvp = nBarras * precio;

    if (nBarras < 10) {
        descuentoEfectuado = pvp * 0;
        porcentaje = "0%";
        pfinal = pvp;
    } 
    else if (nBarras >= 10 && nBarras <= 20) {
        descuentoEfectuado = pvp * 0.10;
        porcentaje = "10%";
        pfinal = pvp - descuentoEfectuado;
    } 
    else {
        descuentoEfectuado = pvp * 0.20;
        porcentaje = "20%";
        pfinal = pvp - descuentoEfectuado;
    }

    return "El número de barras es: " + nBarras + " | PVP base: " + pvp.toFixed(2) + "€" + 
           " | Descuento aplicado: " + porcentaje + " (" + descuentoEfectuado.toFixed(2) + "€)" + 
           " | Precio final: " + pfinal.toFixed(2) + "€";
}

// Función conectada al botón del formulario HTML
function procesarDescuento() {
    const barras = parseInt(document.getElementById("inputBarras").value) || 0;
    const precio = parseFloat(document.getElementById("inputPrecio").value) || 0;

    const resultadoTexto = descuento(barras, precio);
    document.getElementById("resultadoPan").textContent = resultadoTexto;
}


// ==========================================
// EJERCICIO 3: TEMPORIZADORES (Timeout e Interval)
// ==========================================
let intervalo; 
var timeoutID;

// --- Funciones para el setInterval ---
function mensaje() {
    document.getElementById("output_mensaje").innerHTML += "Evento ejecutado cada 3 segundos<br>";
}

function inicio() {
    clearInterval(intervalo); // Seguridad: evita acumular bucles
    intervalo = setInterval(mensaje, 3000); 
}

function final() {
    clearInterval(intervalo); 
    document.getElementById("output_estado").innerHTML += "Intervalo detenido<br>";
}

// --- Funciones para el setTimeout ---
function iniciarTimeout() {
    clearTimeout(timeoutID); // Evita duplicar llamadas si se clica repetido
    document.getElementById("cincoi").innerHTML = "Esperando que pasen 5 segundos...";
    
    timeoutID = setTimeout(function () {
        document.getElementById("cincoi").innerHTML = "¡Intervalo de 5 segundos completado!";
    }, 5000);
}

function detenerTimeout() {
    clearTimeout(timeoutID);
    document.getElementById("cincod").innerHTML = "El contador de 5s se ha detenido.";
}


// ==========================================
// EJERCICIO 4: MANIPULACIÓN DE BOMBILLAS (DOM)
// ==========================================
function encender(bombilla) {
    bombilla.src = 'img/pic_bulbon.gif';
}

function apagar() {
    // Selecciona solo las imágenes que están dentro de la caja azul (.estilo)
    const bombillas = document.querySelectorAll('.estilo img');
    bombillas.forEach(img => {
        img.src = "img/pic_bulboff.gif";
    });
}