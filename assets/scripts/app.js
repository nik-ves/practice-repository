const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; 

/*

= - assigning a value
== - compare two values (a == b)
!= - values not being equal (a != b)
=== and !== - checks for value AND type (in)equality (a === b / a !== b)
> & < - checks for value being greater / smaller (a > b / a < b)
>= & <= - check for value being greater or equal / smaller or equal (a >= b / a <= b)
! - check if NOT true

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

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else {
        currentResult -= enteredNumber;
        mathOperator = '-';
    }
    createAndWriteOutput(mathOperator, initalResult, enteredNumber);
    writeToLog(calculationType, initalResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT');
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
