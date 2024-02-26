let displayValue = '';
let currentOperator = '';
let firstOperand = '';
let secondOperand = '';

function appendNumber(number) {
  displayValue += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (displayValue !== '') {
    if (currentOperator === '') {
      firstOperand = displayValue;
      currentOperator = operator;
      displayValue = '';
      updateDisplay();
    } else {
      calculate();
      currentOperator = operator;
    }
  }
}

function appendDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function clearDisplay() {
  displayValue = '';
  currentOperator = '';
  firstOperand = '';
  secondOperand = '';
  updateDisplay();
}

function calculate() {
  if (firstOperand !== '' && displayValue !== '') {
    secondOperand = displayValue;
    let result;
    switch (currentOperator) {
      case '+':
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
        break;
      case '-':
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
        break;
      case '*':
        result = parseFloat(firstOperand) * parseFloat(secondOperand);
        break;
      case '/':
        result = parseFloat(firstOperand) / parseFloat(secondOperand);
        break;
    }
    displayValue = result.toString();
    currentOperator = '';
    firstOperand = '';
    secondOperand = '';
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('display').value = displayValue;
}
