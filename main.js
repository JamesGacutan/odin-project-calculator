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


// store variable when a numb key is click


let num = [];


function onClick(key) {
    key.addEventListener('click', (e) => {
        if (num.length <= 15) {
            num += key.textContent;
        } 

        if (num.length == 11) {
            calculate.style.fontSize = '1.4rem';
        }


        // display array per numb click
        calculate.textContent = num;
        return num;
    });
}




const calculate = document.querySelector('.calculate');
const keys = document.querySelectorAll('.num');
const keyArray = Array.from(keys);

keyArray.forEach(key => {
        onClick(key);
});










