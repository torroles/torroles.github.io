document.addEventListener('DOMContentLoaded', () => {
    const selector = document.getElementById('selectorInfo');
    const panel = document.getElementById('panelDiagnostico');

    selector.addEventListener('change', (e) => {
        const valor = e.target.value;
        let resultado = "";

        switch(valor) {
            case "user": resultado = navigator.userAgent; break;
            case "url": resultado = location.href; break;
            case "res": resultado = `${screen.width} x ${screen.height} px`; break;
            case "lang": resultado = navigator.language; break;
            default: resultado = "Selecciona un dato válido para auditar.";
        }

        // Renderizado dinámico
        panel.innerHTML = `<div class="caja-diagnostico"><strong>Resultado:</strong> ${resultado}</div>`;
    });
});