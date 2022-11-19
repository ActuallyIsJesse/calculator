const display = document.querySelector('#display-p')
let currendOperand = null;
let displayingResult = true;
let UserInputA = [];
let UserInputB = [];

function pushInput(e) {
    switch(e.target.id) {
        case "btn-0":
            UserInputA.push(0);
            drawDisplay("notCleared");
            break;
        case "btn-1":
            UserInputA.push(1);
            drawDisplay("notCleared");
            break;
        case "btn-2":
            UserInputA.push(2);
            drawDisplay("notCleared");
            break;
        case "btn-3":
            UserInputA.push(3);
            drawDisplay("notCleared");
            break;
        case "btn-4":
            UserInputA.push(4);
            drawDisplay("notCleared");
            break;
        case "btn-5":
            UserInputA.push(5);
            drawDisplay("notCleared");
            break;
        case "btn-6":
            UserInputA.push(6);
            drawDisplay("notCleared");
            break;
        case "btn-7":
            UserInputA.push(7);
            drawDisplay("notCleared");
            break;
        case "btn-8":
            UserInputA.push(8);
            drawDisplay("notCleared");
            break;
        case "btn-9":
            UserInputA.push(9);
            drawDisplay("notCleared");
            break;   
        case "btn-multiply":
            currendOperand="multiply"
            applyOperand("multiply");
            break;   
        case "btn-divide":
            currendOperand="divide"
            applyOperand("divide");
            break;   
        case "btn-subtract":
            currendOperand="subtract"
            applyOperand("subtract");
            break;   
        case "btn-add":
            currendOperand="add"
            applyOperand("add");
            break;   
        case "btn-equal":
            operate();
            drawDisplay("notCleared");
            break;
        case "btn-decimal":
            UserInputA.push(".");
            break;   
        case "btn-clear":
            clearArray(UserInputA);
            clearArray(UserInputB);
            drawDisplay("cleared");
            return;
    }

}

function drawDisplay(inputBehavior) {
    if(inputBehavior === "notCleared"){ 
    display.textContent = UserInputA.join("");
    } else if (inputBehavior === "cleared") {
        display.textContent = "CLEARED";
        setTimeout(() => {display.textContent = "";}, 300)
    } else if(inputBehavior === "operandInUse"){
        display.textContent = "";
    }

}

function applyOperand(operand) {
    if(UserInputB.length > 0) {
        operate();
    }
    UserInputB = [...UserInputA];
    clearArray(UserInputA);
}

function operate() {
    // Let the record show that I'm embarrassed by this funciton. 
    let result = "Something went wrong if you ever see this."
    switch(currendOperand){
        case "multiply":
            result = (parseFloat(UserInputB.join(''))) * (parseFloat(UserInputA.join('')));
            break;
        case "divide":
            if(parseFloat(UserInputB.join('')) === 0 && parseFloat(UserInputA.join('')) === 0) {
                clearArray(UserInputA);
                clearArray(UserInputB);
                UserInputA[0] = "No";
                return;
            }
            result = (parseFloat(UserInputB.join(''))) / (parseFloat(UserInputA.join('')));
            break;
        case "subtract":
            result = (parseFloat(UserInputB.join(''))) - (parseFloat(UserInputA.join('')));
            break;
        case "add":
            result = (parseFloat(UserInputA.join(''))) + (parseFloat(UserInputB.join('')));
            break;
        default: 
            console.log("oh no");
            result = "oh no";
    }
    currendOperand = null;
    clearArray(UserInputA);
    clearArray(UserInputB);
    UserInputA[0] = result.toFixed(3).replace(/[.,]000$/, "");
    drawDisplay()
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