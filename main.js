// addition 

const add = (a, b) => a + b;

// subtraction

const subtract = (a, b) => a - b;

// multiplication

const multiply = (a, b) => a * b;

// division

const divide = (a, b) => a / b;


// calculate 

function operate(a, operation, b) {
    
    switch (operation) {
        case '+':
            return add(a, b);
        case "-":
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            console.log('enter a valid operator');
            break;
    }
}


// store value in num when a numb key is click


let operand = [];
let leftOperand = [];
let operator;
let rightOperand = [];

const left = document.querySelector('.display-num');
const right = document.querySelector('.right-num')
const keys = document.querySelectorAll('.num');
const keyArray = Array.from(keys);



function onDigitClick(key) {
    key.addEventListener('click', (e) => {
        // reset
        operatorText.textContent = '';
        answer.textContent = '0';
        result = 0;

        if (operand.length <= 14) {
            operand += key.textContent;
        } 

        if (operand.length == 11) {
            left.style.fontSize = '1.4rem';
        }

        // display array per numb click
        left.textContent = operand;

        return operand;
    });
}
keyArray.forEach(key => {
    onDigitClick(key);
});


// assign num current value to a num variable and empty it

function splitter() {

    if (leftOperand.length == 0) {
        leftOperand = Number(operand);
        operand = [];
        left.textContent = '';
    } else {
        rightOperand = Number(operand);
        operatorText.textContent = '';
    }
}

// make the operator clickable

const addOperator = document.querySelector('.addition');
const subtractOperator = document.querySelector('.subtraction');
const multiplyOperator = document.querySelector('.multiplication');
const divideOperator = document.querySelector('.division');

let operatorText = document.querySelector('.operation');


function onOperationClick(operation) {
    operation.addEventListener('click', () => {
        if (operand == '') {

        } else {

        keyArray.forEach(key => {
            key.disabled = false;
        })
        splitter();
        operator = operation.textContent;
        // display operation in screen
        operatorText.textContent = operator;
    
        operation.pointerEvent = 'none';
        }

    });
}

onOperationClick(addOperator);
onOperationClick(subtractOperator);
onOperationClick(multiplyOperator);
onOperationClick(divideOperator);


// calculate when equal is clicked 

const equals = document.querySelector('.equals');
const answer = document.querySelector('.answer');

equals.addEventListener('click', () => {
    keyArray.forEach(key => {
        key.disabled = true;
    });

    

    if (operand > 0 && leftOperand > 0) {
        splitter();
        // display answer in screen
        const result = operate(leftOperand, operator, rightOperand);
        
        if (checkResult(result) === true) {
            answer.textContent = result;
        } else {
            answer.textContent = result.toFixed(2);
        }

        // reset
        left.textContent = ''; 
        operator = '';
        operand = result;
        leftOperand = [];
        rightOperand = [];
    }

});

// check if int or float

function checkResult(n) {
    const isInt = n === n && n % 1 === 0;
    const isFloat = n === n && n % 1 !== 0;
    if (isInt) {
        return true;
    } else if (isFloat) {
        return false;
    }
}

// decimal 

const decimalPoint = document.querySelector('.dot');


decimalPoint.addEventListener('click', () => {
    decimalPoint.disabled = true;
});


// clear all 

const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    keyArray.forEach(key => {
        key.disabled = false;
    });

    operand = [];
    leftOperand = [];
    rightOperand = [];
    operator = '';

    left.textContent = '';
    operatorText.textContent = '';
    answer.textContent = '0';
});

// delete key

const del = document.querySelector('.delete');

del.addEventListener('click', () => {
    array = operand.split('');
    newValue = array.slice(0, -1).join('');
    left.textContent = newValue;
    operand = newValue;
});


// keyboard supp

const calcKeys = document.querySelectorAll('.keys');
const calcKeysArr = Array.from(calcKeys);

document.addEventListener('keydown', (e) => {  
    console.log(e)
});






































