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

