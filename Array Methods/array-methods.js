//forEach method = operates a function on every array element

const carsBrands = [
    {brand: 'Huyndai', type: ['i10', 'i20', 'i30', 'Kona', 'Tucson']},
    {brand: 'Suzuki', type: ['Vitara', 'Swift', 'S-Cross', 'Ignis', 'Jimny']},
    {brand: 'Volkswagen', type: ['Polo', 'Golf', 'Passat', 'Caddy', 'Tiguan']},
    {brand: 'Fiat', type: ['500', 'Panda', 'Tipo', '500X', 'Punto']}
]

carsBrands.forEach((input) => console.log(`My favorite car of ${input.brand} is the ${input.type[1]}`));

const num = [15, 20, 25, 30, 35, 40, 45, 50];

num.forEach(function(input){
    console.log(++input);
});

num.forEach((input) => console.log(input+1));

num.forEach(function(input){
    if(input <= 40 && input >= 20){
        console.log(input*2);
    } else {
        console.log(input/2);
    }
});


//map method = operates a function on every array element AND returns a new array with the results

const evenNumbers = [2,4,6,8,10,12,14,16,18,20];

const oddNumbers = evenNumbers.map(function(element){
    return element+1;
});

const lowerCase = ['omg', 'wtf', 'rofl', 'lol', 'idgaf'];

// const upperCase = lowerCase.map(function(element){
//     return element.toUpperCase();
// })

const upperCase = lowerCase.map(element => element.toUpperCase());

console.log(oddNumbers);
console.log(upperCase);


//filter method = creates a new array with the elements of an array that pass the function

const exams = [50, 68, 95, 84, 80, 75, 55, 100];

const passedExams = exams.filter(function(score){
    return score >= 75;
});

console.log(passedExams);


//every method = if all elements pass the function, it returns true, otherwise it returns false

const studentExams = [50, 68, 95, 84, 80, 75, 55, 100];

const allPassed = studentExams.every(function(score){
    return score >= 75;
});

console.log(allPassed);


//some method = if at least one element passes the function, it returns true, otherwhise it returns false

