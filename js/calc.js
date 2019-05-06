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

const keys = document.querySelector('.buttons');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {

        return;
    }

    if (target.classList.contains('decimal')) {

        return;
    }

    if (target.classList.contains('clear')) {

        return;
    }


});