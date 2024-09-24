function convertToUppercase(text) {
    return text.toUpperCase();
}

// Handle DOM Events
if (typeof document !== 'undefined') {
    const convertButton = document.getElementById('convertButton');
    const resultElement = document.getElementById("result");
    if (convertButton) {
        convertButton.addEventListener('click', () => {
            const textInput = document.getElementById('textInput').value;
            const upperCaseText = convertToUppercase(textInput);
            console.log(upperCaseText);
            resultElement.textContent = upperCaseText; 
        });
    }
}

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = convertToUppercase;
}

