let numButtons = document.querySelectorAll('.number');
let currentScreenValue = 0;
let previousScreenValue = 0;
let operator = null;

let addition = function(x,y){
    return x + y;
}

let subtr = function(x,y){
    return x - y;
}

let multiply = function(x,y){
    return x * y;
}

let divide = function(x,y){
    return x / y;
}

let addValue = function(event){
    currentScreenValue = currentScreenValue * 10 + parseInt(event.target.innerText);
    document.getElementById('calc-result').innerText = currentScreenValue;
}

for(let i = 0; i < numButtons.length; i++){
    numButtons[i].addEventListener('click', addValue);
}

document.getElementById('add').addEventListener('click', function(){
    previousScreenValue = currentScreenValue;
    currentScreenValue = 0;
    operator = addition;
})

document.getElementById('subtr').addEventListener('click', function(){
    previousScreenValue = currentScreenValue;
    currentScreenValue = 0;
    operator = subtr;
})

document.getElementById('multiply').addEventListener('click', function(){
    previousScreenValue = currentScreenValue;
    currentScreenValue = 0;
    operator = multiply;
})

document.getElementById('divide').addEventListener('click', function(){
    previousScreenValue = currentScreenValue;
    currentScreenValue = 0;
    operator = divide;
})

document.getElementById('return').addEventListener('click', function(){
    let screenResult = operator(previousScreenValue,currentScreenValue);
    document.getElementById('calc-result').innerText = screenResult;
    currentScreenValue = 0;
})

document.getElementById('calc-result').innerText

