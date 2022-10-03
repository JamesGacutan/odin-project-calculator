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


// store variable when click


let num = [];

function onClick(key) {
    key.addEventListener('click', (e) => {
        num += key.textContent;
        return num;
    });
}

const keys = document.querySelectorAll('.num');
const keyArray = Array.from(keys);


keyArray.forEach(key => {
        onClick(key);
});




