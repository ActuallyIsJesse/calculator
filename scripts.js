const display = document.querySelector('#display-p')
const buttons = document.querySelectorAll(".calculator-button");
let currentInput = "";
let storedInput = "";
let storedOperator = "";
let displayingResult = false;
let operationInProgress = false;

function getUserInput(event) {
    const userInputLUT = {
        0: () => { concatinateInput(0); },
        1: () => { concatinateInput(1); },
        2: () => { concatinateInput(2); },
        3: () => { concatinateInput(3); },
        4: () => { concatinateInput(4); },
        5: () => { concatinateInput(5); },
        6: () => { concatinateInput(6); },
        7: () => { concatinateInput(7); },
        8: () => { concatinateInput(8); },
        9: () => { concatinateInput(9); },
        ".": () => { if (!currentInput.includes(".")) { concatinateInput("."); } },
        "*": () => { operate("multiply"); },
        "/": () => { operate("divide"); },
        "-": () => { operate("subtract"); },
        "+": () => { operate("add"); },
        "Enter": () => { operate(); },
        Backspace: () => { backspaceInput(); },
        Escape: () => { clearInput(); },
        "btn-0": () => { concatinateInput(0); },
        "btn-1": () => { concatinateInput(1); },
        "btn-2": () => { concatinateInput(2); },
        "btn-3": () => { concatinateInput(3); },
        "btn-4": () => { concatinateInput(4); },
        "btn-5": () => { concatinateInput(5); },
        "btn-6": () => { concatinateInput(6); },
        "btn-7": () => { concatinateInput(7); },
        "btn-8": () => { concatinateInput(8); },
        "btn-9": () => { concatinateInput(9); },
        "btn-decimal": () => { concatinateInput("."); },
        "btn-multiply": () => { operate("multiply"); },
        "btn-divide": () => { operate("divide"); },
        "btn-subtract": () => { operate("subtract"); },
        "btn-add": () => { operate("add"); },
        "btn-equal": () => { operate(); },
        "btn-backspace": () => { backspaceInput(); },
        "btn-escape": () => { clearInput(); },
        "other": () => { console.log("Dummy"); },
    }


    //This section checks to see if the keypress or button click has a function in the LUT
    //If not, it passes the argument "other" to the LUT
    Object.hasOwn(userInputLUT, event.key) ? userInputLUT[event.key]()
        : Object.hasOwn(userInputLUT, event.target.id) ? userInputLUT[event.target.id]()
            : userInputLUT["other"]();
}

function concatinateInput(targetID) {
    //Protect against concatinating into the result of a previous operation
    if (operationInProgress || displayingResult) {
        currentInput = "";
        displayingResult = false;
        operationInProgress = false;
    }
    if (currentInput.length > 11) { return; } //Limit input length to 12 characters
    currentInput += targetID;
    updateDisplay(currentInput);
}

function backspaceInput() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay(currentInput);
}

function tidyNumber(number) { //Result limlited to 2 decimal places
    return number.toFixed(3).replace(".000", "").toString();
}

function clearInput() {
    currentInput = "CLEARED";
    storedInput = "";
    updateDisplay(currentInput);
    setTimeout(() => { display.textContent = "WELCOME" }, 500);
    currentInput = "";
}

function updateDisplay(variable) {
    if (variable === "NaN") {
        console.log("Here!");
        display.textContent = "ERROR"
        setTimeout(clearInput, 700);
        return;
    }
    display.textContent = "";
    setTimeout(() => { display.textContent = `${variable}` }, 100);
}

function operate(currentOperator) {
    // Protect against user entering weird things:
    // Pressing equals after a single number
    if (!storedInput && !currentOperator) { return; }
    if (!storedOperator) { storedOperator = currentOperator; }
    if (storedInput) {
        operationInProgress = true;
        if (storedOperator === "multiply") {
            currentInput = tidyNumber(parseFloat(storedInput) * parseFloat(currentInput));
            updateDisplay(currentInput);
            storedInput = "";
            storedOperator = "";
        } else if (storedOperator === "divide") {
            if (currentInput === "0") {
                updateDisplay("MmMBonk");
                setTimeout(clearInput, 800)
                return;
            }
            currentInput = tidyNumber(parseFloat(storedInput) / parseFloat(currentInput));
            updateDisplay(currentInput);
            storedInput = "";
            storedOperator = "";
        } else if (storedOperator === "subtract") {
            currentInput = tidyNumber(parseFloat(storedInput) - parseFloat(currentInput));
            console.log({ currentInput });
            updateDisplay(currentInput);
            storedInput = "";
            storedOperator = "";
        } else if (storedOperator === "add") {
            currentInput = tidyNumber(parseFloat(storedInput) + parseFloat(currentInput));
            updateDisplay(currentInput);
            storedInput = "";
            storedOperator = "";
        }
    } else {
        storedInput = currentInput;
        updateDisplay(storedInput);
        currentInput = "";
    }
}

//Add event listeners to all buttons and keyboard input
buttons.forEach(button => {
    button.addEventListener('click', getUserInput);
});
document.querySelector("body").addEventListener("keydown", getUserInput);