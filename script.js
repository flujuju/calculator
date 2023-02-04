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
        case 'add':
            result = add(num1, num2);
            break;
        case 'substract':
            result = substract(num1, num2);
            break;
        case 'multiply':
            result = multiply(num1, num2);
            break;
        case 'divide':
            result = divide(num1, num2);
            break;
    }
    return result;
}



console.log(operate(2, 3, 'add'));
console.log(operate(4, 2, 'substract'));
console.log(operate(5, 4, 'multiply'));
console.log(operate(8, 3, 'divide'));


// 0. create a display value function
function displayValue(value) {
    const display = document.querySelector('#display');
    let displayContent = document.createElement('div');
    displayContent.classList.add('displayContent');
    displayContent.textContent = value;
    display.appendChild(displayContent);
}

function removeValue() {
    let numberOfChilds = display.children.length;
    for (let i=0; i<numberOfChilds; i++) {
        display.removeChild(display.firstChild);
    }
}

// reroute clicked numbers in a string with all the other numbers and convert in Number


// 1. display clicked numbers on screen
const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
    
    number.addEventListener('click', (e) => {
        displayValue(e.target.textContent);
    });
});

// 2. store number displayed when user click on operator
// 3. launch "operate" when user click "="