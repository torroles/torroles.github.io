// ==========================================
// EJERCICIO 4: LÓGICA DE INTERVALOS TEMPORALES
// ==========================================

document.getElementById('timeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const startDate = new Date(document.getElementById('startDate').value);
    const endDate = new Date(document.getElementById('endDate').value);
    
    if (isNaN(startDate) || isNaN(endDate)) {
        document.getElementById('resultadoTiempo').textContent = "⚠️ Por favor, selecciona ambas fechas.";
        return;
    }
    
    // Diferencia en milisegundos
    const timeDifference = endDate - startDate;
    
    // Cálculos
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const months = (endDate.getMonth() - startDate.getMonth()) + 
                   (12 * (endDate.getFullYear() - startDate.getFullYear()));
    const years = endDate.getFullYear() - startDate.getFullYear();
    
    const mensajeFinal = `Intervalo: ${years} años, ${months % 12} meses y ${days % 30} días.`;
    
    document.getElementById('resultadoTiempo').textContent = mensajeFinal;
});