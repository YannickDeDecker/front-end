let user = document.querySelector('#username');
let pass = document.querySelector('#password');
let loginbtn = document.querySelector('#loginbtn');
let registerbtn = document.querySelector('#registerbtn');

$(loginbtn).click(function(event){
    event.preventDefault();
    let userValue = user.value;
    let passValue = pass.value;

    let userSession = window.sessionStorage.getItem('user');
    let passSession = window.sessionStorage.getItem('pass');

    if(userValue === '' || passValue === ''){
        $('#errorMessage').removeClass('d-none')
    } else if(userValue === userSession && passValue === passSession){
        window.location.replace('notes.html');
    }
})

$(registerbtn).click(function(event){
    event.preventDefault();
    window.location.replace('register.html');
})