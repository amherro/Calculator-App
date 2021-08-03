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

const operate = (opr, num1, num2) => {
    opr.match(/[+-*/]/)
    num1.match(/[0-9]/g)
    num1.match(/[0-9]/g)
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