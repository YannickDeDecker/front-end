//HEARTS ADD

let numHearts = 0;

function addHeart(){
    numHearts++;
    document.getElementById('favorite').innerText = ' ' + numHearts;
}

document.getElementById('favorite').addEventListener('click',addHeart);


//COMMENTS ADD

function addComment(){
    let nameAndComment = {
        userName: document.getElementById('name').value,
        message: document.getElementById('message').value
    }
    document.getElementById('comments').innerHTML += 
    `<i class="fa fa-user" aria-hidden="true"></i> ${nameAndComment.userName}: 
    <p class="card-text"> ${nameAndComment.message}</p>`
}

document.getElementById('save').addEventListener('click',addComment);