const targetNumber = Math.floor(Math.random() * 101);
const answer = document.getElementById('answer');

function guessNumber(){
    let userGuess = document.getElementById('number').value;

    if(userGuess == ""){
        answer.innerText = 'Give a number';
    } else if (targetNumber === parseInt(userGuess)){
        answer.innerText = 'Congratulations, you guessed right!';
    } else if (Math.abs(targetNumber-userGuess) <= 5){
        answer.innerText = 'Wow, very hot! Guess again';
    } else if (Math.abs(targetNumber-userGuess) <= 15){
        answer.innerText = 'Getting hot! Guess again';
    } else if (Math.abs(targetNumber-userGuess) <= 25){
        answer.innerText = 'Too cold! Guess again';
    } else{
        answer.innerText = 'Freezing! Guess again';
    }
}