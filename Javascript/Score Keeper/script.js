let playerOne = 0;
let playerTwo = 0;

function addPlayerOne(){
    let highestNumber = document.getElementById("numbers").value;
    document.querySelector('#scoreOne').innerText = ++playerOne;
    if(playerOne === parseInt(highestNumber)){
        document.querySelector('#scoreOne').classList.add('text-success');
        document.querySelector('#scoreTwo').classList.add('text-danger');
        document.getElementById("playerOne").disabled = true;
        document.getElementById("playerTwo").disabled = true;
    }
}

function addPlayerTwo(){
    let highestNumber = document.getElementById("numbers").value;
    document.querySelector('#scoreTwo').innerText = ++playerTwo;
    if(playerTwo === parseInt(highestNumber)){
        document.querySelector('#scoreTwo').classList.add('text-success');
        document.querySelector('#scoreOne').classList.add('text-danger');
        document.getElementById("playerOne").disabled = true;
        document.getElementById("playerTwo").disabled = true;
    }
}
    
function reset(){
    document.querySelector('#scoreOne').innerText = 0;
    document.querySelector('#scoreTwo').innerText = 0;
    document.querySelector('#scoreTwo').classList.remove('text-success', 'text-danger');
    document.querySelector('#scoreOne').classList.remove('text-danger', 'text-success');
    playerOne = 0;
    playerTwo = 0;
    document.getElementById("playerOne").disabled = false;
    document.getElementById("playerTwo").disabled = false;
}

document.querySelector('#playerOne').addEventListener('click', addPlayerOne);
document.querySelector('#playerTwo').addEventListener('click', addPlayerTwo);
document.querySelector('#reset').addEventListener('click', reset);
