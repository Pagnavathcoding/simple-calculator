// grabs all two elements input
let firstNumber = document.getElementById("first-number");
let secondNumber = document.getElementById("second-number");
// grabs all buttons to click and do function
let btnAddition = document.getElementById("addition");
let btnSubtraction = document.getElementById("subtraction");
let btnMultiplication = document.getElementById("multiplication");
let btnDivision = document.getElementById("division");
// grab the total element in p and also in this p get an error too
let total = document.getElementById("total");
// clear button
let clear = document.getElementById("clear");
clear.addEventListener("click", clearFunction);
// clear function 
function clearFunction() {
    firstNumber.value = '';
    secondNumber.value = '';
    total.innerHTML = '';
}
// add event listener to all buttons
btnAddition.addEventListener("click", additionFunction);
// addition function
function additionFunction() {
    // if the value in input equal to empty should return an error
    if (firstNumber.value == '' || secondNumber.value == '') {
        // error in p element
        total.innerHTML = "Please Input Value!";
        // when error change p element color to red
        total.style.color = "red";
    }
    else {
        // parseFloat means value in inputs are string, so convert it to number
        let addition = parseFloat(firstNumber.value) + parseFloat(secondNumber.value);
        total.innerHTML = 'Total: ' + firstNumber.value + "+" + secondNumber.value + "=" + addition;
        // change color of total to be black
        total.style.color = "black";
    }
}
// same as code above just create the subtraction function, multiplication function, division function
// substraction
btnSubtraction.addEventListener("click", subtractionFunction);
// subtraction function
function subtractionFunction() {
    if (firstNumber.value == '' || secondNumber.value == '') {
        total.innerHTML = "Please Input Value!";
        total.style.color = "red";
    }
    else {
        let addition = parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
        total.innerHTML = 'Total: ' + firstNumber.value + "-" + secondNumber.value + "=" + addition;
        total.style.color = "black";
    }
}
// multiplication
btnMultiplication.addEventListener("click", multiplicationFunction);
// multiplication function
function multiplicationFunction() {
    if (firstNumber.value == '' || secondNumber.value == '') {
        total.innerHTML = "Please Input Value!";
        total.style.color = "red";
    }
    else {
        let addition = parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
        total.innerHTML = 'Total: ' + firstNumber.value + "×" + secondNumber.value + "=" + addition;
        total.style.color = "black";
    }
}
// division
btnDivision.addEventListener("click", divisionFunction);
// division function
function divisionFunction() {
    if (firstNumber.value == '' || secondNumber.value == '') {
        total.innerHTML = "Please Input Value!";
        total.style.color = "red";
    }
    else {
        let addition = parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
        total.innerHTML = 'Total: ' + firstNumber.value + "÷" + secondNumber.value + "=" + addition;
        total.style.color = "black";
    }
}