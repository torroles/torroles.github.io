const monitorRed = () => {
    const contenedor = document.getElementById("estadoRed");

    const actualizarEstado = () => {
        const estaEnLinea = navigator.onLine;
        contenedor.textContent = estaEnLinea ? "🟢 CONECTADO (Modo Online)" : "🔴 DESCONECTADO (Modo Offline)";
        contenedor.style.backgroundColor = estaEnLinea ? "#c6f6d5" : "#fed7d7";
        contenedor.style.color = estaEnLinea ? "#22543d" : "#822727";
    };

    // Eventos asíncronos que lanza el navegador
    window.addEventListener("online", actualizarEstado);
    window.addEventListener("offline", actualizarEstado);

    // Ejecución inicial
    actualizarEstado();
};

document.addEventListener("DOMContentLoaded", monitorRed);