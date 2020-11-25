let userName = document.querySelector('#username');
let passWord = document.querySelector('#password');
let loginButton = document.querySelector('#login');

let correctUsername = window.sessionStorage.getItem('correctUser');
let correctPassword = window.sessionStorage.getItem('correctPass');

function login(event){
    event.preventDefault();
    if(userName.value === correctUsername && passWord.value === correctPassword){
        window.sessionStorage.setItem('user', userName.value);
        window.sessionStorage.setItem('pass', passWord.value);
        window.location.replace("dashboard.html");
    } else {
        alert('Whoops, you gave the wrong username or password');
    }
}

loginButton.addEventListener('click', login);