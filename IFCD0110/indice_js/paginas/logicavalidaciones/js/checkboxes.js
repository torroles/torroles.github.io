// ==========================================
// EJERCICIO 8: LÓGICA DE CONTROL DE CHECKBOXES
// ==========================================

// Número máximo de casillas permitidas por cada fila/grupo
const maxi = 2;

// Array de estado global. Cada posición guarda el contador de la fila correspondiente [Grupo 0, Grupo 1]
let contador = [0, 0];

document.addEventListener('DOMContentLoaded', function () {
    // Captura de todos los inputs tipo checkbox que posean el atributo personalizado data-group
    const checkboxes = document.querySelectorAll('#formularioCheckboxes input[type="checkbox"]');
    const feedback = document.getElementById('feedbackCheck');

    // Añadimos el listener de eventos de forma semántica a cada elemento
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            // Conversión explícita del índice del grupo a tipo entero (0 o 1)
            const grupo = parseInt(this.getAttribute('data-group'), 10);

            if (this.checked) {
                // Si el usuario lo marca, sumamos uno al contador del grupo correspondiente
                contador[grupo]++;

                // Comprobación de seguridad contra el límite preestablecido
                if (contador[grupo] > maxi) {
                    feedback.className = "resultado error-msg";
                    feedback.textContent = `❌ Límite excedido: No puedes elegir más de ${maxi} casillas en esta fila.`;
                    
                    // Revocamos la acción desmarcando el elemento del DOM
                    this.checked = false;
                    
                    // Restamos la unidad añadida para estabilizar el contador en el tope
                    contador[grupo]--;
                } else {
                    // Acción válida
                    feedback.className = "resultado";
                    feedback.textContent = `✅ Casilla guardada. Grupo [${grupo}]: ${contador[grupo]}/${maxi} marcadas.`;
                }
            } else {
                // Si la casilla se desmarca por el usuario de forma voluntaria, decrementamos el grupo
                contador[grupo]--;
                feedback.className = "resultado";
                feedback.textContent = `🔄 Casilla removida. Grupo [${grupo}]: ${contador[grupo]}/${maxi} marcadas.`;
            }
        });
    });
});