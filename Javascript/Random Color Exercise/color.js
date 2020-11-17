
document.querySelector('.btn').addEventListener('click', function(){
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    document.querySelector('h2').innerText = `${red}, ${green}, ${blue}`
    document.querySelector('body').classList.remove('bg-dark');
    document.querySelector('body').style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
})