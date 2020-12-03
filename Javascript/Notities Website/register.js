let user = document.querySelector('#username');
let pass = document.querySelector('#password');
let registerbtn = document.querySelector('#registerbtn');

$(registerbtn).click(function(event){
    event.preventDefault();
    let userValue = user.value;
    let passValue = pass.value;

    if(userValue === '' || passValue === ''){
        $('#errorMessage').removeClass('d-none')
    } else{
        window.sessionStorage.setItem('user',userValue);
        window.sessionStorage.setItem('pass',passValue);
        window.location.replace('login.html');
    }
})