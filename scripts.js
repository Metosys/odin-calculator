const displayInput = document.getElementById("displayBig");
const displaySmall = document.getElementById("displaySmall");

let i = 0;
let num = [];
let currentOp = "";
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

function opInput(op) {
    num[i] = displayInput.textContent;
    currentOp = op.value;
    if(num.length < 2) {
        displaySmall.textContent = displayInput.textContent + currentOp;
    }
    else {
        displaySmall.textContent = displaySmall.textContent + displayInput.textContent + currentOp;
        let answer = operate(num[i-1],num[i],currentOp);
        num[i] = answer;
        displayInput.textContent = answer;
    }
    i++;
    opStatus = true;
    
}

function equals(op) {
    num[i] = displayInput.textContent;
    displaySmall.textContent = displaySmall.textContent + displayInput.textContent + op.value;
    let answer = operate(num[i-1], num[i], currentOp);
    displayInput.textContent = answer;
    num.length = 0; //reset array to allow more operations to be conducted
    i = 0;
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
}

function operate(num1, num2, op) {
    console.log(num1,num2,op);
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
    console.log(num1,num2)
    return (+num1 + +num2);
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) { //idea: make the whole calculator turn red on 0
    if(num2 == 0) {
        return "NAUGHTY!"
    }
    else {
        return num1 / num2;
    }
}