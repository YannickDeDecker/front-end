let colorCards = [
    {blue : document.getElementById('blue')},
    {green : document.getElementById('green')},
    {red : document.getElementById('red')},
    {orange : document.getElementById('orange')},
    {yellow : document.getElementById('yellow')},
    {brown : document.getElementById('brown')},
    {purple : document.getElementById('purple')},
    {lila : document.getElementById('lila')},
    {turqoise : document.getElementById('turqoise')},
]

function memoryGame(event){
    event.target.classList.remove ('default');
}

let cards = document.getElementsByClassName('col-2');

for(let i = 0; i < cards.length ; i++ ){
    cards[i].addEventListener('click', memoryGame);
}