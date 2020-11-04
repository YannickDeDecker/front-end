//Find the biggest number
// let num = [1,2,3,4,5,6,10,22,56,79];

// const max = Math.max.apply(null, num);
// console.log(max);

let num1 = 50;
let num2 = 60;
let num3 = 98;
let num4 = 4;

function biggestNumber(a, b, c, d){
    console.log(Math.max(num1, num2, num3, num4));
}

function smallestNumber(a, b, c, d){
    console.log(Math.min(num1, num2, num3, num4));
}

biggestNumber();
smallestNumber();