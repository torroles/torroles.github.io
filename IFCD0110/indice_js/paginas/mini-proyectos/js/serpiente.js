// ==========================================
// CONFIGURACIÓN GLOBAL DEL JUEGO
// ==========================================
const canvas = document.getElementById("lienzoJuego");
const ctx = canvas.getContext("2d");

const tamanoCuadrante = 20; // Rejilla de 20x20 píxeles
const filas = canvas.height / tamanoCuadrante;
const columnas = canvas.width / tamanoCuadrante;

let serpiente;
let comida;
let direccionX;
let direccionY;
let puntuacion;
let bucleJuego;

// Inicializa o resetea las variables al arrancar
function iniciarJuego() {
    serpiente = [
        { x: 10, y: 10 } // Posición inicial de la cabeza
    ];
    colocarComida();
    direccionX = 1;  // Empieza moviéndose a la derecha
    direccionY = 0;
    puntuacion = 0;
    document.getElementById("puntosActuales").textContent = puntuacion;
    
    // Escuchar eventos del teclado
    document.addEventListener("keydown", capturarTeclado);
    
    // Ejecuta el bucle del juego cada 150 milisegundos
    clearInterval(bucleJuego);
    bucleJuego = setInterval(actualizarEstado, 150);
}

function colocarComida() {
    comida = {
        x: Math.floor(Math.random() * columnas),
        y: Math.floor(Math.random() * filas)
    };
}

// Bucle principal del juego
function actualizarEstado() {
    // 1. Mover cabeza
    const nuevaCabeza = {
        x: serpiente[0].x + direccionX,
        y: serpiente[0].y + direccionY
    };

    // 2. Comprobar colisión con paredes o consigo misma
    if (nuevaCabeza.x < 0 || nuevaCabeza.x >= columnas || nuevaCabeza.y < 0 || nuevaCabeza.y >= filas || comprobarAutofagia(nuevaCabeza)) {
        clearInterval(bucleJuego);
        alert("¡Fin de la partida! Puntuación final: " + puntuacion);
        return;
    }

    // Insertar la nueva cabeza al principio del array
    serpiente.unshift(nuevaCabeza);

    // 3. Comprobar si come fruta
    if (nuevaCabeza.x === comida.x && nuevaCabeza.y === comida.y) {
        puntuacion += 10;
        document.getElementById("puntosActuales").textContent = puntuacion;
        colocarComida();
    } else {
        // Si no come, elimina el último elemento para simular el movimiento continuo
        serpiente.pop();
    }

    dibujarTodo();
}

function comprobarAutofagia(cabeza) {
    for (let i = 0; i < serpiente.length; i++) {
        if (cabeza.x === serpiente[i].x && cabeza.y === serpiente[i].y) {
            return true;
        }
    }
    return false;
}

// Renderizado gráfico en el Canvas
function dibujarTodo() {
    // Limpiar el tablero
    ctx.fillStyle = "#1a202c";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dibujar comida
    ctx.fillStyle = "#e53e3e";
    ctx.fillRect(comida.x * tamanoCuadrante, comida.y * tamanoCuadrante, tamanoCuadrante - 2, tamanoCuadrante - 2);

    // Dibujar serpiente
    serpiente.forEach((parte, indice) => {
        ctx.fillStyle = indice === 0 ? "#48bb78" : "#38a169"; // Cabeza más clara que el cuerpo
        ctx.fillRect(parte.x * tamanoCuadrante, parte.y * tamanoCuadrante, tamanoCuadrante - 2, tamanoCuadrante - 2);
    });
}

// Gestión del control por teclado de PC (con bloqueo de scroll)
function capturarTeclado(evento) {
    // Array con las teclas que queremos bloquear para que no muevan la pantalla
    const teclasJuego = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

    if (teclasJuego.includes(evento.key)) {
        evento.preventDefault(); // Evita que la página web haga scroll
    }

    // Tu lógica de movimiento se queda exactamente igual:
    if (evento.key === "ArrowUp" && direccionY !== 1) { 
        direccionX = 0; direccionY = -1; 
    }
    else if (evento.key === "ArrowDown" && direccionY !== -1) { 
        direccionX = 0; direccionY = 1; 
    }
    else if (evento.key === "ArrowLeft" && direccionX !== 1) { 
        direccionX = -1; direccionY = 0; 
    }
    else if (evento.key === "ArrowRight" && direccionX !== -1) { 
        direccionX = 1; direccionY = 0; 
    }
}

// Gestión del control táctil de los botones en móviles
function cambiarDireccionMovil(direccion) {
    if (direccion === "ARRIBA" && direccionY !== 1) { direccionX = 0; direccionY = -1; }
    else if (direccion === "ABAJO" && direccionY !== -1) { direccionX = 0; direccionY = 1; }
    else if (direccion === "IZQUIERDA" && direccionX !== 1) { direccionX = -1; direccionY = 0; }
    else if (direccion === "DERECHA" && direccionX !== -1) { direccionX = 1; direccionY = 0; }
}

function reiniciarPartida() {
    iniciarJuego();
}