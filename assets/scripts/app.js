const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; // It can be empty or can have some inital value

/*

-- One way of editing an array is overwriting the old one:

let logEntries = [];
logEntries = [enteredNumber];

-- If we want to add a new element to an existing array is with a function

let logEntries = [];
logEntries.push();

-- Accesing a specific element in a array:

let logEntries = [];
logEntries.push(enteredNumber);
console.log(logEntries[n]); // n is an index number and first position in an array is 0, second is 1...
Example: console.log(logEntries[1]); Accessing a second element in an array

*/

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initalResult, enteredNumber);
    logEntries.push(enteredNumber);
    console.log(logEntries[0]);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initalResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initalResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initalResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
