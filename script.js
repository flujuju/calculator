function add(a, b) {
    return a + b;
}


function substract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}


function divide(a, b) {
    return a / b;
}


function operate(num1, num2, operator) {
    let result = '';
    switch(operator){
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = substract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            if(num2 == 0) {
                result = 'YOU WISH !';
            }
            else {
                result = divide(num1, num2);
                result = Math.round(result * 100) / 100;
            }
            break;
    }
    return result;
}

console.log(operate(2, 3, '+'));
console.log(operate(4, 2, '-'));
console.log(operate(5, 4, '*'));
console.log(operate(8, 3, '/'));

function displayValue(value) {    
    displayContent.textContent += value;
}


function storeValue() {
    if(!firstValue) {
        firstValue = parseInt(displayContent.textContent);
    }
    else {
        secondValue = parseInt(displayContent.textContent);
    }
    displayContent.textContent='';
}

function checkComplete(cond1, cond2, cond3) {
    if (cond1 && cond2 && cond3) {
        return true;
    }
    else {
        return false;
    }
}

//pseudo-code
//user enter a number by clicking on each digit
// calc displays the digits on screen
// user chooses an operaor by clicking on the corresponding button
// on click, display becomes empty and number and operator are stored in global variables
// user enter a second number by clicking on each digit
// calc displays the digits on screen
// user chooses a second operator or equal sign
// calc displays the result of the operation
//  if equal signs, process is reinitiated, global variables set to initial values
//  if operator sign, result becomes first value, second value and operator are reset to initial values


//user enter a number by clicking on each digit
// create global variable (firstValue) for storing the first number as a string 
// create global variable (calcOperator) for storing the chosen operator
// create global variable (secondValue) for stoing the second operand
const display = document.querySelector('#display');
let displayContent = display.querySelector('.displayContent');
displayContent.textContent = '';
let firstValue;
let calcOperator;
let secondValue;
let isComplete = false;
let isResult = false;

//for each number with .number class, add listener on click
// create function "displayValue"
// concatenate each number in displayVValue
// display displayValue as textContent of the display div
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    
    number.addEventListener('click', (e) => {
        if(isResult) {
            displayContent.textContent = '';
            isResult = false;
            displayValue(e.target.textContent);
        }
        else {
        displayValue(e.target.textContent);
        }
    });
});



// user chooses an operator
//  user clicks on an operator
//  value of displayContent.textContent is tranferred to firstValue and set to ''
//  operator value is transferred to calcOperator
const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', (e) => {
        storeValue();
        
        let currentOperator = e.target.textContent;
        calcOperator = currentOperator;
        currentOperator = '';
        displayContent.textContent = '';

// user enters a second number
// listener still ok

// user chooses a second operator or the equal sign
// user click on .operator button
// if firstvalue == ''
//  value of displayvalue is tranferred to firstValue and set to ''
// else
//  value of displayvalue is transferred to secondValue
//  display value is set to result of operation
//         
        isComplete = checkComplete(firstValue, secondValue, calcOperator);
        console.log(firstValue);
        console.log(calcOperator);
        console.log(secondValue);
        console.log(isComplete);
        
        if (isComplete) {
            
            let operatedResult = operate(firstValue, secondValue, calcOperator);
            displayContent.textContent = operatedResult;
            console.log(operatedResult);
            
            firstValue = operatedResult;
            secondValue = '';
            calcOperator = '';
            isResult = true;
            
        }

        
        else {
            displayContent.textContent = '';
        }
        
                 
       
        
    });
});

// program bugs when hitting '=' => it is not an operator, function operate does not work properly

const equal = document.querySelector('.equal');
equal.addEventListener('click', (e) => {
    storeValue();
    isComplete = checkComplete(firstValue, secondValue, calcOperator);

    if (isComplete) {
            
        let operatedResult = operate(firstValue, secondValue, calcOperator);
        displayContent.textContent = operatedResult;
        console.log(operatedResult);
        isResult = true;
    }
    
});

const ac = document.querySelector('#AC');
ac.addEventListener('click', () => {
    removeValue();
    });

// then : new functionalities and bug fixes

// sign button is replaced by '=' (to be analysed)

// after second clich on operator, how to display result but make textContent not concatenate with result







// 0. create a display value function

    


function removeValue() {
    firstValue = '';
    secondValue = '';
    calcOperator = '';
    isResult = false;
    isComplete = false;
    displayContent.textContent = '';
}


const correct = document.querySelector('#Correct');
correct.addEventListener('click', () =>{
    if(!displayContent.textContent == '') {
        let numberAsArray = displayContent.textContent.split('');
        numberAsArray.pop();
        displayContent.textContent = numberAsArray.join('');
    }
});



// reroute clicked numbers in a string with all the other numbers and convert in Number


// 1. display clicked numbers on screen



