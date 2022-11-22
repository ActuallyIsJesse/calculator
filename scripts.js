const display = document.querySelector('#display-p')
const buttons = document.querySelectorAll(".calculator-button");
let currentInput = "";
let storedInput = "";

function getUserInput(event) {
    const userInputLUT = {
        0: () => {concatinateInput(0)}, 
        1: () => {concatinateInput(1)},
        2: () => {concatinateInput(2)},
        3: () => {concatinateInput(3)},
        4: () => {concatinateInput(4)},
        5: () => {concatinateInput(5)},
        6: () => {concatinateInput(6)},
        7: () => {concatinateInput(7)},
        8: () => {concatinateInput(8)},
        9: () => {concatinateInput(9)},
        "btn-0": () => {concatinateInput(0)}, 
        "btn-1": () => {concatinateInput(1)},
        "btn-2": () => {concatinateInput(2)},
        "btn-3": () => {concatinateInput(3)},
        "btn-4": () => {concatinateInput(4)},
        "btn-5": () => {concatinateInput(5)},
        "btn-6": () => {concatinateInput(6)},
        "btn-7": () => {concatinateInput(7)},
        "btn-8": () => {concatinateInput(8)},
        "btn-9": () => {concatinateInput(9)},
        "other": () => {console.log("Dummy")},
    }

    //This section checks to see if the keypress or button click has a function in the LUT
    //If not, it passes the argument "other" to the LUT
    Object.hasOwn(userInputLUT, event.key) ? userInputLUT[event.key]() 
    : Object.hasOwn(userInputLUT, event.target.id) ? userInputLUT[event.target.id]()
    : userInputLUT["other"]();    
}

function concatinateInput(targetID) {
    currentInput += targetID;
    console.log(currentInput);
} 
//Add event listeners to all buttons and keyboard input
buttons.forEach(button => {
   button.addEventListener('click', getUserInput)
});
document.querySelector("body").addEventListener("keydown", getUserInput);