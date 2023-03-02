

function operate(num1, num2, operand) {

}

function sum(num1,num2) {
    return num1 + num2;
}

function subtract(num1,num2) {
    return num1 - num2;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function divide(num1,num2) { //make the whole calculator turn red on 0
    if(num2 == 0) {
        return "NAUGHTY!"
    }
    else {
        return num1 / num2;
    }
}