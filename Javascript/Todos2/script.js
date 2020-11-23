let listTodos = document.querySelectorAll('li');

function filterTodos(){
    let inputText = document.querySelector('#filter').value.toLowerCase();
    listTodos.forEach(function(element){
        if (inputText && element.innerText.toLowerCase().includes(inputText)){
            element.classList.add('bg-warning')
        } else {
            element.classList.remove('bg-warning')
        }
    });
}

document.querySelector('#filter').addEventListener('input', filterTodos);