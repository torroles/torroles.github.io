// ==========================================
// CONTROL DE ESTADOS DEL TRES EN RAYA
// ==========================================
let matrizEstado; // Array de 9 posiciones para mapear las casillas
let turnoActual;  // Almacena qué jugador va ('X' u 'O')
let partidaActiva;

// Combinaciones ganadoras indexadas por casillas del tablero
const combinacionesGanadoras = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Filas horizontales
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columnas verticales
    [0, 4, 8], [2, 4, 6]             // Diagonales
];

function inicializarTablero() {
    matrizEstado = ["", "", "", "", "", "", "", "", ""];
    turnoActual = "X";
    partidaActiva = true;
    
    document.getElementById("informacionTurno").textContent = "Turno de las X";
    document.getElementById("informacionTurno").className = "estado-turno";

    // Limpiar visualmente todas las celdas del DOM
    const celdas = document.querySelectorAll(".celda");
    celdas.forEach(celda => {
        celda.textContent = "";
        celda.className = "celda"; // Borra las clases extras de coloración
    });
}

function marcarCasilla(nodoCelda, indice) {
    // Romper si la casilla ya está ocupada o si terminó la partida
    if (matrizEstado[indice] !== "" || !partidaActiva) {
        return;
    }

    // Actualizar datos internos y renderizar en pantalla
    matrizEstado[indice] = turnoActual;
    nodoCelda.textContent = turnoActual;
    nodoCelda.classList.add(turnoActual === "X" ? "marca-x" : "marca-o");

    comprobarResultado();
}

function comprobarResultado() {
    let rondaGanada = false;

    // Verificar si alguna combinación se cumple
    for (let i = 0; i < combinacionesGanadoras.length; i++) {
        const condicion = combinacionesGanadoras[i];
        let a = matrizEstado[condicion[0]];
        let b = matrizEstado[condicion[1]];
        let c = matrizEstado[condicion[2]];

        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            rondaGanada = true;
            break;
        }
    }

    if (rondaGanada) {
        document.getElementById("informacionTurno").textContent = "¡El jugador " + turnoActual + " ha ganado!";
        document.getElementById("informacionTurno").classList.add("estado-ganador");
        partidaActiva = false;
        return;
    }

    // Comprobar si hay empate (si ya no quedan huecos vacíos)
    let empate = !matrizEstado.includes("");
    if (empate) {
        document.getElementById("informacionTurno").textContent = "¡Partida terminada en Empate!";
        document.getElementById("informacionTurno").classList.add("estado-empate");
        partidaActiva = false;
        return;
    }

    // Cambiar el turno del jugador de forma ternaria
    turnoActual = turnoActual === "X" ? "O" : "X";
    document.getElementById("informacionTurno").textContent = "Turno de las " + turnoActual;
}