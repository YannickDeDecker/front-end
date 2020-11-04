function sumArray(parameter){
    let total = 0;
    for (let index of parameter){
        total += index
    }
    return total
}

let result = sumArray([5,5,6,6,5,5]);
console.log(result);