let random = Math.floor(Math.random()*4+1);
let score = 0;
let choice;

function rockButton(){
    document.getElementById('player').setAttribute('src','Asset1.png');
    document.getElementById('rock').classList.add('active');
    choice = 'rock';
}

function paperButton(){
    document.getElementById('player').setAttribute('src','Asset2.png');
    document.getElementById('paper').classList.add('active');
    choice = 'paper';
}

function scissorButton(){
    document.getElementById('player').setAttribute('src','Asset3.png');
    document.getElementById('scissor').classList.add('active');
    choice = 'scissor';
}

document.getElementById('rock').addEventListener('click',rockButton);
document.getElementById('paper').addEventListener('click',paperButton);
document.getElementById('scissor').addEventListener('click',scissorButton);

function shuffleButton(){
    
    document.getElementById('choice').classList.add('d-none');
    document.getElementById('game').classList.remove('d-none');

    if(random === 1){
        document.getElementById('computer').setAttribute('src','Asset1.png');
    } else if(random === 2){
        document.getElementById('computer').setAttribute('src','Asset2.png');
    } else if(random === 3){
        document.getElementById('computer').setAttribute('src','Asset3.png');
    };

    if(choice === 'rock'){
        if(random === 1){
            document.getElementById('tie').classList.remove('d-none');
        } else if(random === 2){
            document.getElementById('loss').classList.remove('d-none');
        } else if(random ===3){
            document.getElementById('won').classList.remove('d-none');
            ++score;
            document.getElementById('score').innerText = `Score: ${score}`;
        }
    } else if(choice === 'paper'){
        if(random === 1){
            document.getElementById('won').classList.remove('d-none');
            ++score;
            document.getElementById('score').innerText = `Score: ${score}`;
        } else if(random === 2){
            document.getElementById('tie').classList.remove('d-none');
        } else if(random ===3){
            document.getElementById('loss').classList.remove('d-none');
        }
    } else if(choice === 'scissor'){
        if(random === 1){
            document.getElementById('loss').classList.remove('d-none');
        } else if(random === 2){
            document.getElementById('won').classList.remove('d-none');
            ++score;
            document.getElementById('score').innerText = `Score: ${score}`;
        } else if(random ===3){
            document.getElementById('tie').classList.remove('d-none');
        }
    }

    random = Math.floor(Math.random()*4+1);
};

document.getElementById('shuffle').addEventListener('click',shuffleButton);