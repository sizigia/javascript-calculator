const calc = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputNum(num) {
    const { displayValue, waitingForSecondOperand } = calc;

    if (waitingForSecondOperand === true) {
        calc.displayValue = num;
        calc.waitingForSecondOperand = false;
    } else {
        calc.displayValue = displayValue === '0' ? num : displayValue + num;
    }
}

function inputDecimal(dot) {
    if (calc.waitingForSecondOperand === true) {
        return;
    }
    if (!calc.displayValue.includes(dot)) {
        calc.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calc;
    const inputValue = parseFloat(displayValue).toFixed(2);

    if (operator && waitingForSecondOperand) {
        calc.operator = nextOperator;
        return;
    }

    if (firstOperand === null) {
        calc.firstOperand = inputValue;
    } else if (operator) {
        const currentValue = firstOperand || 0;
        const result = operations[operator](currentValue, inputValue);
        calc.displayValue = String(result);
        calc.firstOperand = result;
    }

    calc.waitingForSecondOperand = true;
    calc.operator = nextOperator;
}

const operations = {
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand,
}

function resetCalc() {
    calc.displayValue = '0';
    calc.firstOperand = null;
    calc.waitingForSecondOperand = false;
    calc.operator = null;
}

function screenDisplay() {
    const display = document.querySelector('#displayText');
    display.value = calc.displayValue;
}

screenDisplay();

const keys = document.querySelector('.buttons');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        handleOperator(target.value);
        screenDisplay();
        return;
    }

    if (target.classList.contains('decimal')) {
        inputDecimal(target.value);
        screenDisplay();
        return;
    }

    if (target.classList.contains('clear')) {
        resetCalc(target.value);
        screenDisplay();
        return;
    }

    inputNum(target.value);
    screenDisplay();
});