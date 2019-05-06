const calc = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function screenDisplay() {
    const display = document.querySelector('#displayText');
    display.value = calculator.displayValue;
}

screenDisplay();