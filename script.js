const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');






function addNums(...nums){

    let res = nums.reduce((num1, num2) => num1 + num2);
    return res;

};


function subtractNums(...nums){

    let res = nums.reduce((num1, num2) => num1 - num2);
    return res;
    
};

function multiplyNums(...nums){

    let res = nums.reduce((num1, num2) => num1 * num2);
    return res;
    
};


function operate(a, b, c){
    if (b === '+'){return a + c };
    if (b === '-'){return a - c };
    if (b === '*'){return a * c };
    if (b === '/'){return a / c };
};




class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
  }};





function clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
    };


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)









delete() {
}

appendNumber(number) {
}

chooseOperation(operation) {
}

compute() {
}

updateDisplay() {
}