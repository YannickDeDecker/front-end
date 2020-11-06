function changeLight(){
    if(document.getElementById('control').getAttribute('src') === 'img/control_on.png'){
        document.getElementById('control').setAttribute('src','img/control_off.png');
        document.getElementById('light').setAttribute('src','img/light_off.png');
    } else {
        document.getElementById('control').setAttribute('src','img/control_on.png');
        document.getElementById('light').setAttribute('src','img/light_on.png');
    }
}

document.getElementById('control').addEventListener('click',changeLight);

