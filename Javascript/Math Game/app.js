let scoreCorrect = 0;
let scoreIncorrect = 0;

let questionNumberOne;
let questionNumberTwo;
let index;

let operators = [
    {
        func: (input1, input2) => input1 + input2,
        operator: '+'
    },
    {
        func: (input1, input2) => input1 - input2,
        operator: '-'
    },
    {
        func: (input1, input2) => input1 * input2,
        operator: '*'
    }
]

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









// let questionNumberOne = Math.floor(Math.random() * 50) + 1;
// let questionNumberTwo = Math.floor(Math.random() * 50) + 1;

// let scoreCorrect = 0;
// let scoreIncorrect = 0;

// let index = Math.floor(Math.random() * 3);

// let operators = [
//     {
//         func: (input1, input2) => input1 + input2,
//         operator: '+'
//     },
//     {
//         func: (input1, input2) => input1 - input2,
//         operator: '-'
//     },
//     {
//         func: (input1, input2) => input1 * input2,
//         operator: '*'
//     }
// ]

// let question = document.getElementById('question');
// let operator = operators[index];
// question.innerText = `${questionNumberOne} ${operator.operator} ${questionNumberTwo}`

// function resetFunction(){
//     document.getElementById('answer').value = '';
//     questionNumberOne = Math.floor(Math.random() * 50) + 1;
//     questionNumberTwo = Math.floor(Math.random() * 50) + 1;
//     index = Math.floor(Math.random() * 3);
//     operator = operators[index];
//     question.innerText = `${questionNumberOne} ${operator.operator} ${questionNumberTwo}`
// }

// function checkAnswer(){
//     let userAnswer = document.getElementById('answer').value;

//     if(userAnswer == operator.func(questionNumberOne,questionNumberTwo)){
//         scoreCorrect ++;
//     } else {
//         scoreIncorrect ++;
//     }
    
//     document.getElementById('correct').innerText = scoreCorrect;
//     document.getElementById('incorrect').innerText = scoreIncorrect;

//     resetFunction(); 
//   }

// document.getElementById('check').addEventListener("click", checkAnswer);

