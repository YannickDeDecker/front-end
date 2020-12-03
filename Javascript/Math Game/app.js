let scoreCorrect = 0;
let scoreIncorrect = 0;

let questionNumberOne;
let questionNumberTwo;
let index;

function Operator(func, operator){
    this.func = func;
    this.operator = operator;
}

let plus = new Operator((input1, input2) => input1 + input2, "+");
let minus = new Operator((input1, input2) => input1 - input2, '-');
let multiply = new Operator((input1, input2) => input1 * input2, '*');
let division = new Operator((input1, input2) => input1 / input2, '/');

let operators = [plus, minus, multiply, division];


function resetFunction(){
    let question = document.getElementById('question');
    document.getElementById('answer').value = '';
    questionNumberOne = Math.floor(Math.random() * 10) + 1;
    questionNumberTwo = Math.floor(Math.random() * 10) + 1;
    index = Math.floor(Math.random() * 3);
    operator = operators[index];
    question.innerText = `${questionNumberOne} ${operator.operator} ${questionNumberTwo}`;
}

function checkAnswer(){
    let userAnswer = document.getElementById('answer').value;

    if(userAnswer == operator.func(questionNumberOne,questionNumberTwo)){
        scoreCorrect ++;
    } else {
        scoreIncorrect ++;
    }
    
    document.getElementById('correct').innerText = scoreCorrect;
    document.getElementById('incorrect').innerText = scoreIncorrect;

    resetFunction(); 
}

document.getElementById('check').addEventListener("click", checkAnswer);
resetFunction();

