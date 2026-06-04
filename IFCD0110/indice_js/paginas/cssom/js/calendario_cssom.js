document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('contenedorCalendario');
    const selMes = document.getElementById('selectMes');
    const inpAno = document.getElementById('inputAno');
    const btnVer = document.getElementById('btnVer');

    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    // Inicializar selectores
    meses.forEach((m, i) => selMes.options.add(new Option(m, i)));
    const hoy = new Date();
    selMes.value = hoy.getMonth();
    inpAno.value = hoy.getFullYear();

    function renderCalendario(mes, ano) {
        contenedor.innerHTML = '';
        
        // Cabecera L-D
        const cabecera = document.createElement('div');
        cabecera.className = 'cabecera-semana';
        ['L', 'M', 'X', 'J', 'V', 'S', 'D'].forEach(d => {
            const div = document.createElement('div');
            div.textContent = d;
            cabecera.appendChild(div);
        });
        contenedor.appendChild(cabecera);

        const divCalendario = document.createElement('div');
        divCalendario.className = 'mifecha2';
        
        // Cálculo de días y posición
        const primerDia = new Date(ano, mes, 1).getDay();
        const offset = (primerDia === 0) ? 6 : primerDia - 1;
        const totalDias = new Date(ano, mes + 1, 0).getDate();

        // Celdas vacías para alinear el día 1
        for (let i = 0; i < offset; i++) {
            divCalendario.appendChild(document.createElement('div'));
        }

        // Generar días
        for (let i = 1; i <= totalDias; i++) {
            const divDia = document.createElement('div');
            divDia.textContent = i;
            divDia.className = (i === hoy.getDate() && mes === hoy.getMonth() && ano === hoy.getFullYear()) ? 'diaactual' : 'dia';
            divCalendario.appendChild(divDia);
        }
        contenedor.appendChild(divCalendario);
    }

    btnVer.addEventListener('click', () => renderCalendario(parseInt(selMes.value), parseInt(inpAno.value)));
    renderCalendario(hoy.getMonth(), hoy.getFullYear());
});