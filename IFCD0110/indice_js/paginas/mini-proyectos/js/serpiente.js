// ==========================================
// CONFIGURACIÓN GLOBAL DEL JUEGO
// ==========================================
const canvas = document.getElementById("lienzoJuego");
const ctx = canvas.getContext("2d");

const tamanoCuadrante = 20;
const filas = canvas.height / tamanoCuadrante;
const columnas = canvas.width / tamanoCuadrante;

let serpiente;
let comida;
let direccionX;
let direccionY;
let puntuacion;
let bucleJuego;
let juegoIniciado = false; // Estado del juego

// Inicialización: dibuja el estado inicial pero no arranca el bucle
function iniciarJuego() {
    serpiente = [{ x: 10, y: 10 }];
    colocarComida();
    direccionX = 1;
    direccionY = 0;
    puntuacion = 0;
    juegoIniciado = false;
    
    document.getElementById("puntosActuales").textContent = puntuacion;
    // Removemos el listener si existe para evitar duplicados, luego lo añadimos
    document.removeEventListener("keydown", capturarTeclado);
    document.addEventListener("keydown", capturarTeclado);
    
    clearInterval(bucleJuego);
    dibujarTodo(); // Dibujamos el estado inicial (serpiente quieta)
}

// Función para reiniciar desde el botón
function reiniciarPartida() {
    clearInterval(bucleJuego);
    iniciarJuego();
}

// Función que arranca el bucle de juego
function arrancar() {
    if (!juegoIniciado) {
        clearInterval(bucleJuego);
        bucleJuego = setInterval(actualizarEstado, 150);
        juegoIniciado = true;
    }
}

function colocarComida() {
    comida = {
        x: Math.floor(Math.random() * columnas),
        y: Math.floor(Math.random() * filas)
    };
}

// Bucle principal del juego
function actualizarEstado() {
    const nuevaCabeza = {
        x: serpiente[0].x + direccionX,
        y: serpiente[0].y + direccionY
    };

    if (nuevaCabeza.x < 0 || nuevaCabeza.x >= columnas || nuevaCabeza.y < 0 || nuevaCabeza.y >= filas || comprobarAutofagia(nuevaCabeza)) {
        clearInterval(bucleJuego);
        alert("¡Fin de la partida! Puntuación final: " + puntuacion);
        iniciarJuego(); // Reiniciamos el estado tras el Game Over
        return;
    }

    serpiente.unshift(nuevaCabeza);

    if (nuevaCabeza.x === comida.x && nuevaCabeza.y === comida.y) {
        puntuacion += 10;
        document.getElementById("puntosActuales").textContent = puntuacion;
        colocarComida();
    } else {
        serpiente.pop();
    }

    dibujarTodo();
}

function comprobarAutofagia(cabeza) {
    return serpiente.some(parte => parte.x === cabeza.x && parte.y === cabeza.y);
}

function dibujarTodo() {
    ctx.fillStyle = "#1a202c";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#e53e3e";
    ctx.fillRect(comida.x * tamanoCuadrante, comida.y * tamanoCuadrante, tamanoCuadrante - 2, tamanoCuadrante - 2);

    serpiente.forEach((parte, indice) => {
        ctx.fillStyle = indice === 0 ? "#48bb78" : "#38a169";
        ctx.fillRect(parte.x * tamanoCuadrante, parte.y * tamanoCuadrante, tamanoCuadrante - 2, tamanoCuadrante - 2);
    });
}

// Control Teclado
function capturarTeclado(evento) {
    const teclasJuego = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
    if (teclasJuego.includes(evento.key)) {
        evento.preventDefault();
        arrancar(); // Inicia al presionar flechas
    }

    if (evento.key === "ArrowUp" && direccionY !== 1) { direccionX = 0; direccionY = -1; }
    else if (evento.key === "ArrowDown" && direccionY !== -1) { direccionX = 0; direccionY = 1; }
    else if (evento.key === "ArrowLeft" && direccionX !== 1) { direccionX = -1; direccionY = 0; }
    else if (evento.key === "ArrowRight" && direccionX !== -1) { direccionX = 1; direccionY = 0; }
}

// Control Táctil
function cambiarDireccionMovil(direccion) {
    arrancar(); // Inicia al presionar botones táctiles
    
    if (direccion === "ARRIBA" && direccionY !== 1) { direccionX = 0; direccionY = -1; }
    else if (direccion === "ABAJO" && direccionY !== -1) { direccionX = 0; direccionY = 1; }
    else if (direccion === "IZQUIERDA" && direccionX !== 1) { direccionX = -1; direccionY = 0; }
    else if (direccion === "DERECHA" && direccionX !== -1) { direccionX = 1; direccionY = 0; }
}

// Iniciar al cargar
iniciarJuego();