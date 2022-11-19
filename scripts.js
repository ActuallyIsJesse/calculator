const display = document.querySelector('#display-p')
let currentOperator = null;
let displayingResult = true;
let UserInputA = [];
let UserInputB = [];

function pushInput(e) {
    if(displayingResult){
        clearArray(UserInputA);
        displayingResult = false;
    }
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
            if(!UserInputA.includes(".")){
                UserInputA.push(".");
            }
            drawDisplay("notCleared")
            break;   
        case "btn-clear":
            clearArray(UserInputA);
            clearArray(UserInputB);
            drawDisplay("cleared");
            return;
        case "btn-back":
            UserInputA.pop();
            drawDisplay("notCleared");
            return;
    }

}

function drawDisplay(inputBehavior) {
    if(inputBehavior === "notCleared"){ 
    display.textContent = UserInputA.join("");
    } else if (inputBehavior === "cleared") {
        display.textContent = "CLEARED";
        setTimeout(() => {display.textContent = "";}, 300)
    }

}

function applyOperator() {
    if(UserInputB.length > 0) {
        operate();
    }
    UserInputB = [...UserInputA];
    clearArray(UserInputA);
}

function operate() {
    // Let the record show that I'm embarrassed by this funciton. 
    if(UserInputB.length < 1) {
        console.log("Dummy")
        clearArray(UserInputA);
        UserInputA[0] = "DUMMY"
        drawDisplay("notCleared")
        return;    
    }

    let result = "Something went wrong if you ever see this."
    switch(currentOperator){
        case "multiply":
            result = (parseFloat(UserInputB.join(''))) * (parseFloat(UserInputA.join('')));
            break;
        case "divide":
            if(parseFloat(UserInputA.join('')) === 0) {
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
            result = "oh no";
    }
    currentOperator = null;
    clearArray(UserInputA);
    clearArray(UserInputB);
    UserInputA[0] = result.toFixed(3).replace(".000","");
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