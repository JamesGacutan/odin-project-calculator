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


let num = [];
let leftNum = [];
let operator;
let rightNum = [];

const left = document.querySelector('.display-num');
const right = document.querySelector('.right-num')
const keys = document.querySelectorAll('.num');
const keyArray = Array.from(keys);


function onDigitClick(key) {
    key.addEventListener('click', (e) => {
        // reset
        operatorText.textContent = '';
        answer.textContent = '0';

        if (num.length <= 14) {
            num += key.textContent;
        } 

        if (num.length == 11) {
            left.style.fontSize = '1.4rem';
            // right.style.fontSize = '1.4rem';
        }

        // display array per numb click
        left.textContent = num;

        return num;
    });
}
keyArray.forEach(key => {
    onDigitClick(key);
});


// assign num current value to a num variable and empty it

function splitter() {

    if (leftNum.length == 0) {
        leftNum = Number(num);
        num = [];
        left.textContent = '';
    } else if (num == '') {
        console.log('pls click a key')
    } else {
        rightNum = Number(num);
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
        operator = operation.textContent;

        splitter();

        // display operation in screen
        operatorText.textContent = operator;
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
    splitter();

    // display answer in screen
    answer.textContent = operate(leftNum, operator, rightNum);

    // reset
    left.textContent = ''; 
    num = [];
    leftNum = [];
    rightNum = [];
});


// clear all 

const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    num = [];
    leftNum = [];
    rightNum = [];
    operator = '';

    left.textContent = '';
    operatorText.textContent = '';
    answer.textContent = '0';
});



































