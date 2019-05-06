const calc = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function add(a, b) {
    return displayText.innerHTML = (a + b);
}

function sub(a, b) {
    return displayText.innerHTML = (a - b);
}

function mul(a, b) {
    return displayText.innerHTML = (a * b);
}

function div(a, b) {
    return displayText.innerHTML = (a / b);
}