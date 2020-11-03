// NUMBER METHODS

//Number();

//parseInt(); - converts a string into a number

let stringNumber = "394";
console.log(parseInt(stringNumber));

//parseFloat();

//toString(); - returns a number as a string

let myNumber = 10;
let typeOfVariable = myNumber.toString();
console.log(typeOfVariable);
console.log(typeof typeOfVariable);

//isFinite();
//isInteger();

let showInConsole = Number.isFinite('5');
let showInConsoleToo = Number.isInteger('5');

console.log(showInConsole);
console.log(showInConsoleToo);

//toFixed

function fixedSalary(salary){
    return `Salary ${Number.parseFloat(salary).toFixed(2)}`
}

let result = fixedSalary('2.3432');
console.log(result);




