  const terminal = document.getElementById('terminal');
        
        // El bloque de código personalizado con tus tecnologías y datos reales
        const codigo = `
/**
 * @file torroles.github.io - Build Config
 * @status UNDER_CONSTRUCTION
 */

function deployPortfolio() {
    console.log("Iniciando despliegue en servidor...");
    
    const devProfile = {
        name: "Raúl Galisteo García",
        stack: ["Java", "JavaScript", "PHP", "MySQL", "React"],
        tools: ["VS Code", "Tomcat", "Git", "WSL/Ubuntu"]
    };

    // Cargando módulos del currículum...
    const secciones = ["Experiencia_Ayuntamiento", "Formacion_CENEC", "Proyectos"];
    secciones.forEach(sec => console.log(\`Compilando: \${sec}.html...\`));

    return "Sistema optimizado. Listo para producción.";
}

// Ejecutando tareas de optimización...
// [ERROR] Jekyll bloqueado temporalmente.
// [FIX] Archivo .nojekyll detectado correctamente.
// Estado: [||||||||||....] 75% completado.
`;

        let i = 0;
        function escribir() {
            if (i < codigo.length) {
                // Escribimos el siguiente carácter
                terminal.textContent += codigo.charAt(i);
                i++;
                
                // Auto-scroll hacia abajo para que siempre se vea la última línea escrita
                terminal.scrollTop = terminal.scrollHeight;
                
                setTimeout(escribir, 40); // Velocidad de escritura (40ms por letra)
            } else {
                // BUCLE DE REINICIO: Espera 4 segundos quieto al finalizar y vuelve a empezar
                setTimeout(() => {
                    terminal.textContent = ''; // Vaciamos la terminal
                    i = 0;                     // Reseteamos el índice
                    escribir();                // Arrancamos de nuevo
                }, 4000);
            }
        }
        
        // Arrancamos la simulación al cargar la página
        escribir();