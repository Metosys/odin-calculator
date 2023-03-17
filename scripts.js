const displayInput = document.getElementById("displayBig");
const displaySmall = document.getElementById("displaySmall");
const displayContainer = document.getElementById("displayContainer");
const decStatus = document.getElementById("decimal");

let i = 0;
let num = [];
let currentOp = "";
let lastOp = "";
let opStatus = false;


function numInput(num) { 
    if(displayInput.textContent == 0) {
        displayInput.textContent = num.value;
    } 
    else if (opStatus == true) {
        displayInput.textContent = num.value;
        opStatus = false;
    }
    else {
        displayInput.textContent = displayInput.textContent + num.value; 
    } 
}

//wrapper to toggle decimal status
function decInput(dec) { 
    numInput(dec)
    decStatus.disabled = true;
}

function opInput(op) {
    num[i] = displayInput.textContent;
    lastOp = currentOp;
    currentOp = op.value;
    if(num.length < 2) {
        displaySmall.textContent = displayInput.textContent + currentOp;
    }
    else {
        displaySmall.textContent = displaySmall.textContent + displayInput.textContent + currentOp;
        let answer = operate(num[i-1],num[i],lastOp);
        num[i] = answer;
        displayInput.textContent = convertAnswer(answer);
    }
    i++;
    decStatus.disabled = false;
    opStatus = true;
    console.log(opStatus);
}

function equals(op) {
    num[i] = displayInput.textContent;
    displaySmall.textContent = displaySmall.textContent + displayInput.textContent + op.value;
    let answer = operate(num[i-1], num[i], currentOp);
    displayInput.textContent = convertAnswer(answer);
    num.length = 0; //reset array to allow more operations to be conducted
    i = 0;
    opStatus = true;
    decStatus.disabled = false;
}

function backspace() {
    displayInput.textContent = displayInput.textContent.slice(0,-1);
}

function clearAll() {
    num = [];
    i = 0;
    currentOp = "";
    opStatus = false;
    displayInput.textContent = "0";
    displaySmall.textContent = "";
    displayContainer.classList.remove("errorBad");
    
}

function operate(num1, num2, op) {
    switch(op) {
        case "+":
            return sum(num1,num2);
        case "x":
            return multiply(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "÷":
            return divide(num1,num2);
    }

}

function sum(num1,num2) {
    return (+num1 + +num2);
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) {
    if(num2 == 0) {
        displayContainer.classList.add("errorBad");
        return "NAUGHTY!"
    }
    else {
        return num1 / num2;
    }
}

function percentage() {
    per = displayInput.textContent;
    percent = per / 100;
    num[i] = percent
    displayInput.textContent = percent;
}

function convertAnswer(answer) {
    ans = answer.toString();
    return ans.substring(0,16);
}

function powerButton() { //just turns display black
    displayContainer.classList.toggle("powerOff");
}
