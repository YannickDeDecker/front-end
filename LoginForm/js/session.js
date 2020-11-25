let user = window.sessionStorage.getItem('user');
let pass = window.sessionStorage.getItem('pass');

if(user === null || pass === null){
    window.location.replace("login.html");
} else {
    window.location.replace("dashboard.html");
}