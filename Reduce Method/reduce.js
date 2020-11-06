//REDUCE METHOD - returns one single value from an array

const myExams = [7.5, 8, 10, 4, 9, 6.5];

const totalExams = myExams.reduce(function(accumulator,element){
    return accumulator + element;
})


//find the max

const myMax = myExams.reduce(function(accumulator,element){
    if(accumulator > element){
        return accumulator;
    } else {
        return element;
    }
});

const myMax2 = myExams.reduce((accumulator,element) => (accumulator > element) ? accumulator:element);


//Find the number of times a certain number appears in an array

const myNumbers = [8, 3, 4, 7, 4, 10, 4, 4, 11, 10];

function count(parameter){
    return myNumbers.reduce(function(aantal,element){
        if(element === parameter){
            return aantal+1;
        } else {
            return aantal;
        }
    })
}

count(4);

// function count(parameter){
//     return myNumbers.reduce((aantal,element) => (element === parameter) ? aantal+1 : aantal,0);
// }


//

const myBooleans = [true, true, true, true, true, true];

const trueOrFalse = myBooleans.reduce(function(accumulator, element){
    if(accumulator === true && element === true){
        return true
    } else {
        return false
    }
})

// console.log(trueOrFalse)

// const trueOrFalse2 = myBooleans.reduce(function(accumulator,element){
//     return accumulator && element
// })


// const test = true;

// if (test === true)
//     return test

