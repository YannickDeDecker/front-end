const userName = 'YannickDeDecker';
const passWord = '123456';

document.getElementById('login').addEventListener('click',loginFunction);

function loginFunction(){
    let userNameInput = document.getElementById('username').value;
    let passWordInput = document.getElementById('password').value;

    document.getElementById('labeluse').classList.add('d-none');
    document.getElementById('labelpass').classList.add('d-none');

    if(userNameInput != userName){
        document.getElementById('labeluse').classList.remove('d-none');
        document.getElementById('username').value = '';
    }

    if(passWordInput != passWord){
        document.getElementById('labelpass').classList.remove('d-none');
        document.getElementById('password').value = '';
    }

    if(userNameInput === userName && passWordInput === passWord){
        window.location.href = "https://www.w3schools.com";
    }
}

// if(userNameInput === userName && passWordInput === passWord){
//     window.location.href = "https://www.w3schools.com";
// } else if(userNameInput === userName && passWordInput != passWord){
//     document.getElementById('labelpass').classList.remove('d-none');
//     document.getElementById('password').value = '';
// } else if(userNameInput != userName && passWordInput === passWord){
//     document.getElementById('labeluse').classList.remove('d-none');
//     document.getElementById('username').value = '';
// } else if(userNameInput != userName && passWordInput != passWord){
//     document.getElementById('labeluse').classList.remove('d-none');
//     document.getElementById('username').value = '';
//     document.getElementById('labelpass').classList.remove('d-none');
//     document.getElementById('password').value = '';
// }