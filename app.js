document.getElementById('generate').addEventListener('click', () => {
    const length = document.getElementById('length').value;
    const includeLowercase = document.getElementById('include-lowercase').checked;
    const includeUppercase = document.getElementById('include-uppercase').checked;
    const includeNumbers = document.getElementById('include-numbers').checked;
    const includeSymbols = document.getElementById('include-symbols').checked;
    
    const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
    document.getElementById('password-output').textContent = password;
});

document.getElementById('copy').addEventListener('click', () => {
    const password = document.getElementById('password-output').textContent;
    navigator.clipboard.writeText(password).then(() => {
        alert('Password copied to clipboard!');
    });
});

function generatePassword(length, lower, upper, number, symbol) {
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
    
    let availableCharacters = '';
    if (lower) availableCharacters += lowercase;
    if (upper) availableCharacters += uppercase;
    if (number) availableCharacters += numbers;
    if (symbol) availableCharacters += symbols;
    
    let password = '';
    for (let i = 0; i < length; i++) {
        password += availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
    }
    return password;
}
