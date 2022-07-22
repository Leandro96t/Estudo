const defaultResult = 0;
let currentResult = defaultResult;

function getuserNumberInput() {
 return parseInt(userInput.value);
}

function add() {
   const enteredNumber = getuserNumberInput();
   const calcDescription = `${currentResult} + ${enteredNumber}`;
     currentResult = currentResult + enteredNumber;
     outputResult(currentResult, calcDescription);
}

function subtract() {}

function multiply() {}

function devide() {}

function squareroot() {}

function power() {}
 

addBtn.addEventListener('click', add);
