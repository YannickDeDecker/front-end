let randomNumber = Math.floor(Math.random()*6+1);
let score = 0;

function shuffleDice(){
    document.getElementById('wrong').classList.add('d-none');
    document.getElementById('nothing').classList.add('d-none');
    document.getElementById('right').classList.add('d-none');

    if(!document.getElementById('random').checkValidity()){
        document.getElementById('nothing').classList.remove('d-none');
        return;
    }
    
    let userNumber = parseInt(document.getElementById('random').value);
    document.getElementById('img-dice').classList.remove('d-none');

    if(randomNumber === 1){
        document.getElementById('img-dice').setAttribute('src','Asset1.png');
    } else if (randomNumber === 2){
        document.getElementById('img-dice').setAttribute('src','Asset2.png');
    } else if (randomNumber === 3){
        document.getElementById('img-dice').setAttribute('src','Asset3.png');
    } else if (randomNumber === 4){
        document.getElementById('img-dice').setAttribute('src','Asset4.png');
    } else if (randomNumber === 5){
        document.getElementById('img-dice').setAttribute('src','Asset5.png');
    } else if (randomNumber === 6){
        document.getElementById('img-dice').setAttribute('src','Asset6.png');
    }

    if (randomNumber === userNumber){
        document.getElementById('right').classList.remove('d-none');
        ++score;
        document.getElementById('score').innerText = `Score: ${score}`;
    } else if (randomNumber !== userNumber){
        document.getElementById('wrong').classList.remove('d-none');
    }

    randomNumber = Math.floor(Math.random()*6+1);
};

function resetDice(){
    randomNumber = Math.floor(Math.random()*6+1);
    document.getElementById('random').value = '';
    document.getElementById('img-dice').classList.add('d-none');
    document.getElementById('right').classList.add('d-none');
    document.getElementById('wrong').classList.add('d-none');
    document.getElementById('nothing').classList.add('d-none');
    score = 0;
    document.getElementById('score').innerText = `Score: ${score}`;
}

document.getElementById('shuffle').addEventListener('click',shuffleDice);
document.getElementById('reset').addEventListener('click',resetDice);

