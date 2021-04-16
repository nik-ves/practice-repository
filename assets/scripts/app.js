const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; 

/*

-- null / undefined / NaN

-- null: 
null is a never a default value.
Something has to be set to has a value null.
Often used if you want to "reset" or "clear" a variable

-- undefined: 
undefind is a default value of uninitalized variables
If a created variable doesnt have a value at the beggining then this variable is undefined!
undefined should never be assigned to a value!

-- NaN (Not a Number)
Techincally its of type number and can be used in calculations.
It yields NaN and it's the result of invalid calculations (Example: 3 * 'Nikola')

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
