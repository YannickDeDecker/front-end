function color(){
    let redValue = document.querySelector('#red').value
    let greenValue = document.querySelector('#green').value
    let blueValue = document.querySelector('#blue').value
    document.querySelector('body').classList.remove('bg-dark');
    document.querySelector('body').style.backgroundColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`
}


document.querySelector('#red').addEventListener('change', color);
document.querySelector('#green').addEventListener('change', color);
document.querySelector('#blue').addEventListener('change', color);