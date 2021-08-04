//Need to figure out how to display second input and make compute function work 

let currentOperandText = document.querySelector('[data-current-operand]');
let currentOperation = document.querySelector('[data-current-operation]')
let previousOperandText = document.querySelector('[data-previous-operand]')
const numberBtns = document.querySelectorAll('[data-number]');
const clear = document.querySelector('[data-clear]');
const operations = document.querySelectorAll('[data-operation]');
const deleteBtn = document.querySelector('[data-delete]');
const equals = document.querySelector('[data-equals]');

let updateDisplay = () => {
    previousOperandText.textContent  = currentOperandText.textContent
    
}
//Display value of button in display section
numberBtns.forEach((number) => {
    number.addEventListener('click', () => {
        currentOperandText.textContent += number.textContent;
    })  
})

//Display Operation on Calculator
operations.forEach((opr) => {
    opr.addEventListener('click', () => {
        updateDisplay();
        currentOperation.textContent = opr.textContent; 
        currentOperandText.textContent = '';       
    })            
})


//Clear Function 
clear.addEventListener('click', () => {
    currentOperandText.textContent = '';
    currentOperation.textContent = '';
    previousOperandText.textContent = '';
})

function compute() {
    if (this.currentOperation === '+') {
        return previousOperandText - currentOperandText;
    } else if (this.currentOperation === '-') {
        return previousOperandText - currentOperandText;
    } else if (this.currentOperation === '*') {
        return previousOperandText - currentOperandText;
    } else if (this.currentOperation === '/') {
        return previousOperandText - currentOperandText;
    };
}

equals.addEventListener('click', () => {
    compute();
});

/*
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
    if (this.opr === '+') {
        currentOperandText.textContent = add(num1, num2)
    } else if (opr === '-') {
        return subtract(num1, num2)
    } else if (opr === '*') {
        return multiply(num1, num2) 
    } else if (opr === '/') {
        return divide(num1, num2)
    }
}

operate(currentOperation, previousOperandText, currentOperandText);
*/