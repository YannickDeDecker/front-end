//FETCH API

const ratesUrl = 'https://api.exchangeratesapi.io/latest?base=EUR';

async function getRates(){
    let response = await fetch(ratesUrl);
    let data = await response.json();
    console.log(data);
    insertRates(data);
}

getRates();

//CONVERT FUNCTION

let amount = document.querySelector('#amount'); //input field 'enter an amount'
const convertButton = document.querySelector('.btn'); //button 'convert currency'
let output = document.querySelector('#result'); //output field 'result'
let currencyTo = document.querySelector('#currencyTo');

convertButton.addEventListener('click', changeCurrencyRate);

function changeCurrencyRate(){
    let amountValue = amount.value;
    let currencyValue = currencyTo.value;
    let solution = amountValue * currencyValue;
    console.log(solution)
    output.textContent = solution;
}

//INSERT RATES INTO SELECT BOX

function insertRates(data){
    const rates = data.rates; //get rates object out of data object
    let keys = Object.keys(rates); //get array of the keys of the rates object (currencies)
    let sortedKeys = keys.sort(); //sort the keys
    sortedKeys.forEach(element => {
        let option = document.createElement('option'); //create new option element
        option.appendChild(document.createTextNode(element)); // create text node to add to option element
        option.value = rates[element]; // set value property of option
        currencyTo.appendChild(option); //add option to end of select box
    })    
}




