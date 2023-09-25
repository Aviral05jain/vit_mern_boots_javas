function reverseNumber(x) {
    let numStr = x.toString();
    let reversedStr = numStr.split('').reverse().join('');
    let reversedNum = parseInt(reversedStr);
    return reversedNum;
}

function reverseAndDisplay() {
    let inputElement = document.getElementById('numberinput');
    let inputValue = parseInt(inputElement.value);
    let reversedValue = reverseNumber(inputValue);
    let resultElement = document.getElementById('result');
    resultElement.textContent = `Reversed Number: ${reversedValue}`;
}
