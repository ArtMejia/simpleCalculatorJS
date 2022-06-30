let num1 = 90
let num2 = 25
// document.getElementById('num1-el').textContent = num1
// document.getElementById('num2-el').textContent = num2

// let sumEl = document.getElementById('sum-el')

function add() {
    let result = num1 + num2
    sum = 'Sum: '+ result
    console.log(sum);
}

function subtract() {
    let result = num1 - num2
    sum = 'Sum: '+ result
    console.log(sum);
}

function divide() {
    let result = num1 / num2
    sum = 'Sum: '+ result
    console.log(sum);
}

function multiply() {
    let result = num1 * num2
    sum = 'Sum: '+ result
    console.log(sum);
}
add()
subtract()
multiply()
divide()