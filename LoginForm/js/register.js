let userName = document.querySelector('#username');
let passWord = document.querySelector('#password');
let registerButton = document.querySelector('#register');

function register(event){
    event.preventDefault();
    if(userName.value === '' || passWord.value === ''){
        alert('Give a proper username and password, please');
    } else {
        window.sessionStorage.setItem('correctUser', userName.value);
        window.sessionStorage.setItem('correctPass', passWord.value);
        window.location.replace("login.html");
    }
}

registerButton.addEventListener('click', register);