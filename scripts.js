const display = document.querySelector('#display-p')
let currentOperator = null;
let displayingResult = true;
let userInputA = [];
let userInputB = [];

function pushInput(e) {
    if(displayingResult){
        clearArray(userInputA);
        displayingResult = false;
    }
    switch(e.target.id) {
        case "1":
            console.log(e)
        case "btn-0":
            userInputA.push(0);
            drawDisplay("notCleared");
            break;
        case "btn-1":
            userInputA.push(1);
            drawDisplay("notCleared");
            break;
        case "btn-2":
            userInputA.push(2);
            drawDisplay("notCleared");
            break;
        case "btn-3":
            userInputA.push(3);
            drawDisplay("notCleared");
            break;
        case "btn-4":
            userInputA.push(4);
            drawDisplay("notCleared");
            break;
        case "btn-5":
            userInputA.push(5);
            drawDisplay("notCleared");
            break;
        case "btn-6":
            userInputA.push(6);
            drawDisplay("notCleared");
            break;
        case "btn-7":
            userInputA.push(7);
            drawDisplay("notCleared");
            break;
        case "btn-8":
            userInputA.push(8);
            drawDisplay("notCleared");
            break;
        case "btn-9":
            userInputA.push(9);
            drawDisplay("notCleared");
            break;   
        case "btn-multiply":
            currentOperator="multiply"
            applyOperator();
            break;   
        case "btn-divide":
            currentOperator="divide"
            applyOperator();
            break;   
        case "btn-subtract":
            currentOperator="subtract"
            applyOperator();
            break;   
        case "btn-add":
            currentOperator="add"
            applyOperator();
            break;
        case "btn-equal":
            operate();
            drawDisplay("notCleared");
            break;
        case "btn-decimal":
            if(!userInputA.includes(".")){ //Only one decimal, please
                userInputA.push(".");
            }
            drawDisplay("notCleared")
            break;   
        case "btn-clear":
            clearArray(userInputA);
            clearArray(userInputB);
            drawDisplay("cleared");
            return;
        case "btn-back":
            userInputA.pop();
            drawDisplay("notCleared");
            return;
        default:
            console.log("You entered somethign weird");
            return;
    }

}

function drawDisplay(inputBehavior) {
    if(inputBehavior === "notCleared"){ 
    display.textContent = userInputA.join("");
    } else if (inputBehavior === "cleared") {
        display.textContent = "CLEARED";
        setTimeout(() => {display.textContent = "";}, 300)
    }

}

function applyOperator() { // This  just shifts user input to the B array. I should probably rename it.
    if(userInputB.length > 0) {
        operate();
    }
    userInputB = [...userInputA];
    clearArray(userInputA);
}

function operate() {
    // Let the record show that I'm embarrassed by this funciton. 
    if(userInputB.length < 1) {
        console.log("Dummy")
        clearArray(userInputA);
        userInputA[0] = "DUMMY"
        drawDisplay("notCleared")
        setTimeout(() => {
            drawDisplay("cleared");
            clearArray(userInputA);
        }, 500);
        return;    
    }

    let result = "Something went wrong if you ever see this." // Unless you're reading the source, of course,
    switch(currentOperator){
        case "multiply":
            result = (parseFloat(userInputB.join(''))) * (parseFloat(userInputA.join('')));
            break;
        case "divide":
            if(parseFloat(userInputA.join('')) === 0) { // Don't you dare try to divide by 0, you sicko.
                clearArray(userInputA);
                clearArray(userInputB);
                userInputA[0] = "No";
                return;
            }
            result = (parseFloat(userInputB.join(''))) / (parseFloat(userInputA.join('')));
            break;
        case "subtract":
            result = (parseFloat(userInputB.join(''))) - (parseFloat(userInputA.join('')));
            break;
        case "add":
            result = (parseFloat(userInputA.join(''))) + (parseFloat(userInputB.join('')));
            break;
        default: 
            result = "oh no"; // This should never appear, but I sure saw it a lot in debugging...
    }
    currentOperator = null;
    clearArray(userInputA);
    clearArray(userInputB);
    userInputA[0] = result.toFixed(3).replace(".000",""); // This input has gone from numbers 
                                                          // in an array, to a string, to numbers, to 
                                                          // a string in an array. What a journey.
    drawDisplay()
    displayingResult = true;
}

function clearArray(input) {
    for(i = input.length; i >= 0; i--) {
        input.splice(i,1);
    }
}


document.querySelector("#btn-0").addEventListener("click", pushInput);
document.querySelector("#btn-1").addEventListener("click", pushInput);
document.querySelector("#btn-2").addEventListener("click", pushInput);
document.querySelector("#btn-3").addEventListener("click", pushInput);
document.querySelector("#btn-4").addEventListener("click", pushInput);
document.querySelector("#btn-5").addEventListener("click", pushInput);
document.querySelector("#btn-6").addEventListener("click", pushInput);
document.querySelector("#btn-7").addEventListener("click", pushInput);
document.querySelector("#btn-8").addEventListener("click", pushInput);
document.querySelector("#btn-9").addEventListener("click", pushInput);
document.querySelector("#btn-multiply").addEventListener("click", pushInput);
document.querySelector("#btn-divide").addEventListener("click", pushInput);
document.querySelector("#btn-subtract").addEventListener("click", pushInput);
document.querySelector("#btn-add").addEventListener("click", pushInput);
document.querySelector("#btn-clear").addEventListener("click", pushInput);
document.querySelector("#btn-equal").addEventListener("click", pushInput);
document.querySelector("#btn-decimal").addEventListener("click", pushInput);
document.querySelector("#btn-back").addEventListener("click", pushInput);
document.querySelector("body").addEventListener("keydown", event => {
    console.log(event.key);
    let e = {};
    e.target = {};
    switch(event.key) {
        case "=":
        case "Enter":
            e.target.id = `btn-equal`;
            break;
        case "*":
            e.target.id = `btn-multiply`;
            break;
        case "/":
            e.target.id = `btn-divide`;
            break;
        case "-":
            e.target.id = `btn-subtract`; 
            break;
        case "+":
            e.target.id = `btn-add`;
            break;
        case "Escape":
            e.target.id = `btn-clear`;
            break;
        case "Backspace":
            e.target.id = `btn-back`;
            break;
        default:
            e.target.id = `btn-${event.key}`;
            break;
    }
    pushInput(e)});