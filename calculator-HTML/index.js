
// Define operations
const plus = function (x,y) { return x + y };
const minus = function (x,y) { return x - y };
const mult = function (x,y) { return x * y };
const div = function (x,y) { return x / y };

const operations = {
  '+': plus,
  '-': minus,
  '*': mult,
  '/': div
};

// Display value
let displayValue = ''; 
let numberLeft = NaN;
let numberRight = NaN;
let operation;

// Save the numbers that will enter the operation;
// eslint-disable-next-line no-unused-vars
function dis(val) {
    if (displayValue === '') {
        displayValue = val;
    } else {
        displayValue += val;
    }
    document.getElementById("result").value = displayValue;
}

// eslint-disable-next-line no-unused-vars
function setOperation(val) {
    operation = operations[val];
    if (Number.isNaN(numberLeft)) {
        numberLeft = parseFloat(displayValue);
    } 
    displayValue = "";
} 

// Compute result 
// eslint-disable-next-line func-names
const tempResult = function(left, right) {
    return operation(left, right);
}

// eslint-disable-next-line no-unused-vars
function equal() {
    numberRight = parseFloat(displayValue);
    numberLeft = tempResult(numberLeft, numberRight);
    document.getElementById("result").value = numberLeft;
}

// Clear display cell
// eslint-disable-next-line no-unused-vars
function clr() {
    document.getElementById("result").value = "";
    numberLeft = NaN;
    numberRight = NaN; 
    displayValue = "";
}