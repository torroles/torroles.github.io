let segundos = 0; let interval;
        function iniciar() { if(!interval) interval = setInterval(() => { segundos++; document.getElementById('contador').textContent = segundos; }, 1000); }
        function parar() { clearInterval(interval); interval = null; }