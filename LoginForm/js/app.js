let welcomeMessage = document.querySelector('.welcomeUser');
let userName = window.sessionStorage.getItem('user');

welcomeMessage.textContent = welcomeMessage.textContent.replace("${user}", userName);

let button = document.querySelector('.logout');

function logOut(event){
    window.sessionStorage.removeItem('user');
    window.sessionStorage.removeItem('pass');
    window.location.replace("login.html");
}

button.addEventListener('click', logOut);