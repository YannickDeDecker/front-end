// // html elements (inputs)

// var num1 = document.getElementById('number1');
// var num2 = document.getElementById('number2');
// var result = document.getElementById('result');

// result.innerText="Atilla"
// num1.value='55'
// num2.value='66'

// function sum(){
//     // console.log(num1.value)
//     // console.log(num2.value)
//     console.log(Number(num1.value) + Number(num2.value))
//     return result.innerText=`Result> ${Number(num1.value) + Number(num2.value)}`
// }

// console.log(Number('5')+Number('5'))


// let num1 = prompt("Give a number");
// let num2 = prompt("Give another number");

let input1 = prompt("Give a number");
let input2 = prompt("Give another number");

num1 = parseInt(input1);
num2 = parseInt(input2);

function sum(){
    console.log(num1 + num2);
    return result.innerText = `RESULT: ${num1 + num2}`;
}

sum();
