const defaultResult = 0;
let currentResult = defaultResult;

// parseInt(value) is converting the string into a whole number without decimal points if the value of the string is a number
// parseFloat(value) is doing the same thing as the parseInt just for a decimal numbers
// parseInt(value) and parseFloat(value) can also be written shortly with a + before a value, example: +userInput.value
// .toString() is changing the value of something to a string, example: currentResult.toString()

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const calcDescription = `${currentResult} + ${enteredNumber}`;

    currentResult = currentResult + enteredNumber; 
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
 