   document.getElementById("btnRed").addEventListener("click", () => {
            const resDiv = document.getElementById("resultadoRed");
            resDiv.textContent = "Analizando...";
            const inicio = Date.now();
            
            fetch("https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png?cache=" + inicio)
                .then(() => {
                    const tiempo = Date.now() - inicio;
                    resDiv.innerHTML = `✅ Conectado. Latencia: <strong>${tiempo}ms</strong>`;
                    resDiv.style.color = "green";
                })
                .catch(() => {
                    resDiv.textContent = "❌ Error: Sin conexión.";
                    resDiv.style.color = "red";
                });
        });