  document.addEventListener("keydown", (evento) => {
            const pantalla = document.getElementById("teclaDetectada");
            pantalla.textContent = `Tecla presionada: "${evento.key}"`;
            pantalla.style.backgroundColor = "#e0f7fa";
            
            // Efecto visual: vuelve al color original tras 200ms
            setTimeout(() => {
                pantalla.style.backgroundColor = "#f4f4f4";
            }, 200);
        });