const animalNames = ['perro', 'gato', 'elefante', 'leon', 'tigre', 'oso', 'zorro', 'lobo', 'conejo', 'ardilla'];
function encrypt(text) {
        if (containsUppercase(text)) {
        alert('El encriptador no admite palabras en mayúsculas. Por favor, convierta todas las letras a minúsculas.');
        return text; 
    }
        if (!animalNames.includes(text.toLowerCase())) {
        alert('Por favor, introduce el nombre de un animal.');
        return '';
    }
    return text.replace(/a/g, "ai")
               .replace(/e/g, "enter")
               .replace(/i/g, "imes")
               .replace(/o/g, "ober")
               .replace(/u/g, "ufat");
}
function decrypt(text) {
    return text.replace(/ai/g, "a")
               .replace(/enter/g, "e")
               .replace(/imes/g, "i")
               .replace(/ober/g, "o")
               .replace(/ufat/g, "u");
}
function containsUppercase(text) {
    return /[A-Z]/.test(text);
}
document.getElementById('encrypt').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    document.getElementById('output-text').textContent = encrypt(inputText);
});
document.getElementById('decrypt').addEventListener('click', function() {
    const inputText = document.getElementById('input-text').value;
    document.getElementById('output-text').textContent = decrypt(inputText);
});
document.getElementById('copy').addEventListener('click', function() {
    const outputText = document.getElementById('output-text').textContent;
    navigator.clipboard.writeText(outputText)
        .then(() => alert('Texto copiado al portapapeles.'))
        .catch(err => console.error('Error al copiar el texto: ', err));
});
document.getElementById('clear').addEventListener('click', function() {
    document.getElementById('input-text').value = '';
    document.getElementById('output-text').textContent = '';
});