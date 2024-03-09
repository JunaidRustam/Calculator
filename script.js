//

let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function operation(operator) {
    currentInput += operator;
    document.getElementById('display').value = currentInput;
}
function deleteLastEntry() {
    var display = document.getElementById('display');
    var currentValue = display.value;
    
    // Check if the display is not empty
    if(currentValue.length > 0) {
        // Remove the last character from the display
        display.value = currentValue.substring(0, currentValue.length - 1);
    }
}

function calculate() {
    const input = currentInput.split(/[+\-*/]/);
    const operator = currentInput.match(/[+\-*/]/);
    
    if (input.length !== 2 || !operator) {
        document.getElementById('display').value = 'Error';
        currentInput = '';
        return;
    }

    const num1 = parseFloat(input[0]);
    const num2 = parseFloat(input[1]);
    
    let result;
    switch (operator[0]) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                document.getElementById('display').value = 'Error: Division by zero';
                currentInput = '';
                return;
            }
            result = num1 / num2;
            break;
    }
    
    document.getElementById('display').value = result;
    currentInput = result.toString();
}

