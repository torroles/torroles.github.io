document.addEventListener('DOMContentLoaded', function () {
    applyInputMask('elinput', '0--0*0 000_000');
});

function applyInputMask(elementId, mask) {
    let inputElement = document.getElementById(elementId);
    let content = ''; 
    let maxChars = numberCharactersPattern(mask);

    inputElement.addEventListener('keydown', function (e) {
        e.preventDefault();
        
        if (isNumeric(e.key) && content.length < maxChars) {
            content += e.key;
        } else if (e.keyCode === 8) {
            content = content.substr(0, content.length - 1);
        }
        
        inputElement.value = maskIt(mask, content);
        updateFeedback(content, maxChars);
    });
}

function isNumeric(char) {
    return !isNaN(char) && char !== " ";
}

function maskIt(pattern, value) {
    let position = 0;
    let currentChar = 0;
    let masked = '';
    while (position < pattern.length && currentChar < value.length) {
        if (pattern[position] === '0') {
            masked += value[currentChar];
            currentChar++;
        } else {
            masked += pattern[position];
        }
        position++;
    }
    return masked;
}

function numberCharactersPattern(pattern) {
    return (pattern.match(/0/g) || []).length;
}

function updateFeedback(content, max) {
    const feedback = document.getElementById("feedbackMascara");
    if (content.length === 0) {
        feedback.textContent = "Búfer interno vacío. Comienza a teclear.";
    } else if (content.length === max) {
        feedback.textContent = `✅ Límite alcanzado. Búfer: [ ${content} ]`;
    } else {
        feedback.textContent = `📝 Procesando... Búfer: [ ${content} ]`;
    }
}