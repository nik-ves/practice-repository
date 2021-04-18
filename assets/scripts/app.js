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
&& - AND
|| - OR

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
    if (calculationType !== 'ADD' &&
        calculationType !== 'SUBTRACT' &&
        calculationType !== 'MULTIPLY' &&
        calculationType !== 'DIVIDE') {
        return; 
    } // WITH && (AND) ONLY RETURNS TRUE IF ALL CONDITIONS ARE TRUE

    // if (calculationType === 'ADD' || 
    //     calculationType === 'SUBTRACT' || 
    //     calculationType === 'MULTIPLY' || 
    //     calculationType === 'DIVIDE') {

    // } // WITH || (OR) IF ONE OF THEM IS TRUE WHOLE CONDITION TRUE

    const enteredNumber = getUserNumberInput();
    const initalResult = currentResult;
    let mathOperator;
    if (calculationType === 'ADD') {
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if (calculationType === 'DIVIDE') {
        currentResult /= enteredNumber;
        mathOperator = '/';
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
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
