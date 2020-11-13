
// function to add
function add (a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return (a + b).toFixed(2).replace(/\.00$/, '');
};

// function to subtract
function subtract (a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
	return (a - b).toFixed(2).replace(/\.00$/, '');
};

// function to multiply
function multiply (a,b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return (a*b).toFixed(2).replace(/\.00$/, '');
};

// function to divide
function divide (a,b) {
    if (b == '0') {
        display.textContent = 'ERROR';
    } else {
        a = parseFloat(a);
        b = parseFloat(b);
        return (a/b).toFixed(2).replace(/\.00$/, '');
    }
};

// function that takes an operator and 2 numbers and calls a math function
function operate (z,a,b) {
    if (z == '+') {
        return add (a,b);
    } else if (z == '-') {
        return subtract (a,b);
    } else if (z == '*') {
        return multiply (a,b)
    } else if (z == '/') {
        return divide (a,b)
    }
}

// dom reference for display div
const display = document.querySelector('#display');

// variable a (first operand), b (second opearand), and z (operator) initialization
let a = '';
let b = '';
let z = '';


// function that checks if an operator has been selected then adds number to operand a or b
function compute() {
    if (z == '') {
        display.textContent += this.textContent;
        removeOrange();
        return a += this.textContent;
    } else if (z != '') {
        display.textContent = '';
        display.textContent += this.textContent;
        removeOrange();
        return b += this.textContent;
    }
}

// event listener for click on add
let addElement = document.querySelector('#plus');
addElement.addEventListener('click', () => {
    if (a != '' && b != '') {
        display.textContent = operate(z,a,b);
        removeOrange();
        addElement.style.backgroundColor = '#F9C88D';
        a = operate(z,a,b);
        b = '';
    } else {
        addElement.style.backgroundColor = '#F9C88D';
    }
    return z = '+';
})

// event listener for click on subtract
let subtractElement = document.querySelector('#minus');
subtractElement.addEventListener('click', () => {
    if (a != '' && b != '') {
        display.textContent = operate(z,a,b);
        removeOrange();
        subtractElement.style.backgroundColor = '#F9C88D';
        a = operate(z,a,b);
        b = '';
    } else {
        subtractElement.style.backgroundColor = '#F9C88D';
    }
    return z = '-';
});

// event listener for click on divide
let divideElement = document.querySelector('#divide');
divideElement.addEventListener('click', () => {
    divideElement.style.backgroundColor = '#F9C88D';
    return z = '/';
})

// event listener for click on multiply
let multiplyElement = document.querySelector('#multiply');
multiplyElement.addEventListener('click', () => {
    multiplyElement.style.backgroundColor = '#F9C88D';
    return z = '*';
})

// event listener for click on equals
let equals = document.querySelector('#equals');
equals.addEventListener('click', () => {
    if (a == '' || b == '' || z == '') {
        return
    } else {
    display.textContent = operate(z,a,b);
    removeOrange();
    a = operate(z,a,b);;
    b = '';
    z = '';
    }
});

// event listener for click on clear
let clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    display.textContent = '';
    removeOrange();
    a = '';
    b = '';
    z = '';
    display.textContent = '';
})

// loop that adds an event listener on click to all elements with class value
document.querySelectorAll('.value').forEach(item => {
    item.addEventListener('click', compute);
  })
  
// event listener for click on negative
let negativeElement = document.querySelector('#negative');
negativeElement.addEventListener('click', () => {
    negativeElement.style.backgroundColor = '#A5A6A7';
        if (z == '') {
            if (a < 0) {
                display.textContent = Math.abs(display.textContent);
                return a = Math.abs(a);
            } else if (a >= 0) {
                display.textContent = -Math.abs(display.textContent);
                return a = -Math.abs(a);
            }
        } else if (z != '') {
            if (b < 0) {
                display.textContent = Math.abs(display.textContent);
                return b = Math.abs(b);
            } else if (b >= 0) {
                display.textContent = -Math.abs(display.textContent);
                return b = -Math.abs(b);
            }
        }
    }
);

// function to make all operator backgrounds white
function removeOrange () {
    addElement.style.backgroundColor = '#FA9F08';
    subtractElement.style.backgroundColor = '#FA9F08';
    multiplyElement.style.backgroundColor = '#FA9F08';
    divideElement.style.backgroundColor = '#FA9F08';
    negativeElement.style.backgroundColor = '#A5A6A7';
};

// event listener for click on decimal
let decimalElement = document.querySelector('#decimal');
decimalElement.addEventListener('click', () => {
    if (display.textContent.includes('.')) {
        return
    } else {
        if (z == '') {
            display.textContent += '.';
            removeOrange();
            return a = a + '.';
        } else if (z != '') {
            display.textContent += '.';
            removeOrange();
            return b = b + '.';
        }
    }
});

