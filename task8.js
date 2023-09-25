function reverseString(x) {
    return x.split('').reverse().join('');
}

function reverseAndDisplay() {
    let inputElement = document.getElementById('stringinput');
    let reversedValue = reverseString(inputElement.value);
    let resultElement = document.getElementById('result');
    resultElement.textContent = `Reversed String: ${reversedValue}`;
}