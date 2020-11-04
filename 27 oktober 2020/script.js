// Find The Biggest Number (10, 20)
// Expected output: 20 is bigger than 10.

// function findBiggestNumber(a,b){
//     return a > b ? `${a} is greater than ${b}` : 
//     a < b ? `${b} is greater than ${a}` : 
//     a < b ? `${b} is greater than ${a}` : 
//     a < b ? `${b} is greater than ${a}` : 
//     `${b} is greater than ${a}` 
// }

// let result = findBiggestNumber(54,20);

// console.log(result);

// Simple Calculator

// var number1 = document.getElementById("number1");
// var number2 = document.getElementById("number2");
// var result = document.getElementById("result");

// function calc(){
//     return result.innerText = `The result is ${Number(number1.value) + Number(number2.value)}`;
// }


// Keeper

// function keeper1(parameter){
//     return parameter;
// }

// function keeper2(parameter){
//     return parameter + 3;
// }

// function keeper3(parameter){
//     return parameter + 10;
// }

// function keeper4(parameter){
//     return `This is the last process ${parameter++}`
// }

// // keeper1(1) > keeper2(keeper1(1)) > keeper3(keeper2(keeper1(1))) > keeper4(keeper3(keeper2(keeper1(1))))

// // data flow

// let result = keeper4(keeper3(keeper2(keeper1(1))));
// console.log(result);

// // 2 > 12 > 12


// 3 functions
// function 1 init object
// function 2 add properties (fullname, age and email)
// function 3 print info in the console

// function3 > function2 > function 1 > result

function personalInfo(){
    return {};
}

function personalInfo2(obj){
    obj['fullname'] = 'Yannick De Decker';
    obj['age'] = '28';
    obj['email'] = 'yannickdedecker@msn.com';
    return obj
}

function personInfo3(obj){
    console.log(obj)
}

personInfo3(personalInfo2(personalInfo()));


// Confirm and Prompt

let askUser = prompt('Are you admin?', 'no');
console.log(askUser);

let askAge = confirm('Are you under age 17?', 17);

// if statement

let user = 'admin'
if(user === 'admin'){
    console.log('Welcome to Admin Dashboard')
} else {
    console.log('Welcome to User Dashboard')
}

let userName = prompt ('Enter your username');

if(username === 'admin'){
    alert('Welcome admin!')
} else {
    alert('Welcome user!')
}

let totalProduct = 0;

if(totalProduct <= 0){
    totalProduct++;
    console.log(totalProduct);
}

let count = 0;
function increment(){
    if(count <= 0){
        count++;
        console.log(count);
    } else{
        count--;
        console.log(count);
    }
}