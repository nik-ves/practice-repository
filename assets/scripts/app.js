const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; 

/*

typeof operator is used to check type of a value

typeof defaultResult
"number"

let userName = 'Nikola'
"string"

typeof logEntries
"object"

typeof true
"boolean"

*/

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult += enteredNumber;
    createAndWriteOutput('+', initalResult, enteredNumber);
    writeToLog('ADD', initalResult, enteredNumber, currentResult);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult -= enteredNumber;
    createAndWriteOutput('-', initalResult, enteredNumber);
    writeToLog('SUBTRACT', initalResult, enteredNumber, currentResult);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult *= enteredNumber;
    createAndWriteOutput('*', initalResult, enteredNumber);
    writeToLog('MULTIPLY', initalResult, enteredNumber, currentResult);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    currentResult /= enteredNumber;
    createAndWriteOutput('/', initalResult, enteredNumber);
    writeToLog('DIVIDE', initalResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
