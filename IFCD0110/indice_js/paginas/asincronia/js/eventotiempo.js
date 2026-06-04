const gestor = {
    intervalos: {}, 

    // Mantiene la funcionalidad de repetición (setInterval)
    iniciarIntervalo: function(id, tiempo) {
        if (this.intervalos[id]) clearInterval(this.intervalos[id]);
        
        this.intervalos[id] = setInterval(() => {
            document.getElementById(id).textContent = `Intervalo activo cada ${tiempo/1000}s - ${new Date().toLocaleTimeString()}`;
        }, tiempo);
    },

    // Nueva funcionalidad: Acción única retardada (setTimeout)
    iniciarRetrasado: function(id, tiempo) {
        document.getElementById(id).textContent = `Esperando ${tiempo/1000}s para ejecutar una sola vez...`;
        
        setTimeout(() => {
            document.getElementById(id).textContent = `¡Ejecución única completada a las ${new Date().toLocaleTimeString()}!`;
        }, tiempo);
    },

    detener: function(id) {
        if (this.intervalos[id]) {
            clearInterval(this.intervalos[id]);
            document.getElementById(id).textContent = "Proceso de intervalo detenido.";
            delete this.intervalos[id];
        }
    }
};