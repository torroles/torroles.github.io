var primerslap = false;
var segundoslap = false;

function IsNumeric(valor) {
    var log = valor.length;
    var sw = "S";
    for (var x = 0; x < log; x++) {
        if (isNaN(parseInt(valor.substr(x, 1), 10))) sw = "N";
    }
    return sw === "S";
}

function formateafecha(fecha) {
    var long = fecha.length;
    var dia, mes, ano;

    if ((long >= 2) && (primerslap == false)) {
        dia = fecha.substr(0, 2);
        if ((IsNumeric(dia) == true) && (dia <= 31) && (dia != "00")) {
            fecha = fecha.substr(0, 2) + "/" + fecha.substr(3, 7);
            primerslap = true;
        } else { fecha = ""; primerslap = false; }
    } else {
        dia = fecha.substr(0, 1);
        if (IsNumeric(dia) == false) fecha = "";
        if ((long <= 2) && (primerslap == true)) { fecha = fecha.substr(0, 1); primerslap = false; }
    }

    if ((long >= 5) && (segundoslap == false)) {
        mes = fecha.substr(3, 2);
        if ((IsNumeric(mes) == true) && (mes <= 12) && (mes != "00")) {
            fecha = fecha.substr(0, 5) + "/" + fecha.substr(6, 4);
            segundoslap = true;
        } else { fecha = fecha.substr(0, 3); segundoslap = false; }
    } else {
        if ((long <= 5) && (segundoslap == true)) { fecha = fecha.substr(0, 4); segundoslap = false; }
    }

    if (long >= 7) {
        ano = fecha.substr(6, 4);
        if (IsNumeric(ano) == false) { fecha = fecha.substr(0, 6); }
    }

    if (long >= 10) {
        fecha = fecha.substr(0, 10);
        dia = fecha.substr(0, 2);
        mes = fecha.substr(3, 2);
        ano = parseInt(fecha.substr(6, 4), 10);
        
        var esBisiesto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
        var textoBisiesto = esBisiesto ? ` El año ${ano} es BISIESTO.` : ` El año ${ano} es NO BISIESTO.`;

        if (!esBisiesto && (mes == "02") && (dia > 28)) {
            fecha = fecha.substr(0, 2) + "/";
            document.getElementById("feedbackFecha").textContent = "⚠️ Febrero no bisiesto modificado a 28 días." + textoBisiesto;
            return fecha;
        }
        document.getElementById("feedbackFecha").textContent = "✅ Estructura correcta." + textoBisiesto;
    } else {
        document.getElementById("feedbackFecha").textContent = "Escribiendo e indexando patrón estructural...";
    }
    return (fecha);
}