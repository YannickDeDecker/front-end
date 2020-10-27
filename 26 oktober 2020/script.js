//objects
//backtick method

let student = {
    scores: [50, 60, 90, 100, 80],   //arrray
    firstName: "Jack",   //string
    lastName: "Sparrow",    //string
    isPassed: true,   //boolean
    age: 25,  //number
    showStudent: function () {  //function
        console.log("This is show student function")
    },
    books: {
        category: "Philosophy",
        title: "Nietzsche"
    }
}

let print = "Full Name: " + student.firstName + " " + student.lastName;  //classic way
console.log(print)
let print2 = `Full Name: ${student.firstName} ${student.lastName}`;   //modern way
console.log(print2)

let print3 = `Age: ${student.age}`;
console.log(print3);


//functions

function myFunctionName() {
    console.log("function");
    return "This is my first function";
}

myFunctionName();   //to activate the function

function calculateIt(a, b) {
    console.log(a, b);
    return a + b;
}

let sumResult = calculateIt(5, 6)
console.log(sumResult);
calculateIt(5, "Jack");


let autoDrive = {
    forward: function () { console.log("Forward") },
    backward: function () { console.log("Backward") },
    turnLeft: function () { console.log("Turn Left") },
    turnRight: function () { console.log("Turn Right") }
}

autoDrive.turnLeft();
autoDrive.turnRight();
autoDrive.forward();
autoDrive.backward();


let information = {
    firstName: "Yannick",
    lastName: "De Decker",
    age: 28,
    birthYear: 1992,
    email: "yannickdedecker@msn.com",
    phone: "0487 14 09 39",
    city: "Boortmeerbeek"
}

let information1 = {
    firstName: "Erik",
    lastName: "De Weerdt",
    age: 34,
    birthYear: 1986,
    email: "eriksken@gmail.com",
    phone: "0487 14 09 39",
    city: "Boortmeerbeek"
}


function myInformation1(para1) { 
    console.log(`My name is ${para1.firstName} ${para1.lastName} and I am ${para1.age} years old.`);
    console.log(`I was born in ${para1.birthYear}.`);
    console.log(`Next Year I will turn ${para1.age+=1}.`)
    console.log(`I live in ${para1.city}.`)
}

myInformation1(information1);
myInformation1(information);