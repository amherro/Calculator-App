//Need to figure out how to make compute function work 
let currentOperand = '';
let previousOperand = '';

let currentOperandText = document.querySelector('[data-current-operand]');
let currentOperation = document.querySelector('[data-current-operation]')
let previousOperandText = document.querySelector('[data-previous-operand]')
const numberBtns = document.querySelectorAll('[data-number]');
const clear = document.querySelector('[data-clear]');
const operations = document.querySelectorAll('[data-operation]');
const deleteBtn = document.querySelector('[data-delete]');
const equals = document.querySelector('[data-equals]');


//Display value of button in display section
numberBtns.forEach((number) => {
    number.addEventListener('click', () => {
        currentOperandText.textContent += number.textContent;
    })  
})

//Display Operation on Calculator
operations.forEach((opr) => {
    opr.addEventListener('click', () => {
        previousOperand = currentOperandText.textContent;
        currentOperation = opr.textContent; 
        previousOperandText.textContent = `${previousOperand} ${currentOperation}`
        currentOperandText.textContent = '';       
    })            
})


//Clear Function 
clear.addEventListener('click', () => {
    currentOperandText.textContent = '';
    currentOperation.textContent = '';
    previousOperandText.textContent = '';
})



equals.addEventListener('click', compute);

//Operation Functions
const add = (a, b) => {
    return a + b;
}
const subtract = (a, b) => {
    return a - b;
}
const multiply = (a, b) => {
    return a * b;
}
const divide = (a, b) => {
    return a / b;
}


//Operate function
const operate = (opr, num1, num2) => {
    num1 = parseInt(previousOperandText.textContent);
    num2 = parseInt(currentOperandText.textContent);
    if (opr == '+') {
        return add(num1, num2)
    } else if (opr == '-') {
        return subtract(num1, num2)
    } else if (opr == '*') {
        return multiply(num1, num2) 
    } else if (opr == '/') {
        return divide(num1, num2)
    }
}

function compute() {
    currentOperand = currentOperandText.textContent
    currentOperandText.textContent = operate(currentOperation, currentOperand, previousOperand); 
    previousOperandText.textContent = `${previousOperand} ${currentOperation} ${currentOperand} =`
    
}
