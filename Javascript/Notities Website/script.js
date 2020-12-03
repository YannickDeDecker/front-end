let user = window.localStorage.getItem('username');
let pass = window.localStorage.getItem('password');

if(user === null || pass === null){
    window.location.replace('login.html');
} else {
    window.location.replace('notes.html');
}