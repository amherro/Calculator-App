const currentOperandText = document.querySelector('[data-current-operand]');
const previousOperandText = document.querySelector('[data-previous-operand]')
const numberBtns = document.querySelectorAll('[data-number]');
const clear = document.querySelector('[data-clear]');
const operations = document.querySelectorAll('[data-operation]');
const deleteBtn = document.querySelector('[data-delete]');
const equals = document.querySelector('[data-equals]');


//Display value of button in display section
numberBtns.forEach((number) => {
    number.addEventListener('click', () => {
        currentOperandText.textContent += number.textContent
        return currentOperandText;
    })
})

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

//Clear Function
clear.addEventListener('click', () => {
    currentOperandText.textContent = '';
})



//Operate function
const operate = (opr, num1, num2) => {
    /*
    opr.match(/[+-/*]/)
    num1.match(/[0-9]/g)
    num1.match(/[0-9]/g)
    */
    if (opr === '+') {
        return add(num1, num2)
    } else if (opr === '-') {
        return subtract(num1, num2)
    } else if (opr === '*') {
        return multiply(num1, num2) 
    } else if (opr === '/') {
        return divide(num1, num2)
    }
}
