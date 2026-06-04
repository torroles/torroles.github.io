document.getElementById("btnRed").addEventListener("click", () => {
    const resDiv = document.getElementById("resultadoRed");
    resDiv.textContent = "Analizando...";
    const inicio = Date.now();
    
    // Cambia esta URL por una ruta relativa a tu propio sitio
    fetch("css/velocidad.css?cache=" + inicio) 
        .then(() => {
            const tiempo = Date.now() - inicio;
            resDiv.innerHTML = `✅ Conectado. Latencia: <strong>${tiempo}ms</strong>`;
            resDiv.style.color = "green";
        })
        .catch(() => {
            resDiv.textContent = "❌ Error: No se pudo verificar la red.";
            resDiv.style.color = "red";
        });
});