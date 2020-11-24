document.querySelector('.btn-primary').addEventListener('click', function(){
    let number = window.sessionStorage.getItem('number')
    if (number === null){
        number = 0;
    }
    ++number;
    window.sessionStorage.setItem('number', number);
    document.querySelector('h3').innerText = number;
});

let number = window.sessionStorage.getItem('number')
document.querySelector('h3').innerText = number;

document.querySelector('.btn-danger').addEventListener('click', function(){
    let number = window.sessionStorage.getItem('number')
    if (number === null){
        number = 0;
    }
    --number;
    window.sessionStorage.setItem('number', number);
    document.querySelector('h3').innerText = number;
});

document.querySelector('.btn-warning').addEventListener('click', function(){
    window.sessionStorage.setItem('number', 0);
    document.querySelector('h3').innerText = 'x';
});