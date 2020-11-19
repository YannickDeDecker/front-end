

// let todosOdd = document.querySelectorAll('.list-group-item:nth-of-type(odd)');
// let todosEven = document.querySelectorAll('.list-group-item:nth-of-type(even)');

// todosOdd.forEach(function(list){
//     list.classList.add('bg-warning');
// })

// todosEven.forEach(function(list){
//     list.classList.add('bg-secondary');
// })

let arrayTodo = [];

function styleFunction(){
    let todos = document.querySelectorAll('.list-group-item');
    todos.forEach(function(todo,index){
        if(index % 2 === 0){
            todo.classList.add('bg-warning')
        } else {
            todo.classList.add('bg-secondary')
            todo.classList.add('text-white')
        }
    })
    let closeButton = document.querySelectorAll('.fa-remove');

    closeButton.forEach(function(button){
    button.classList.add('text-white')
})
}

function addTodo(event){
    event.preventDefault()
    let enterTodo = document.querySelector('#todo').value;
    let newTodo = document.createElement('li');
    newTodo.innerHTML = `${enterTodo}
    <a href="#" class="delete-item">
        <i class="fa fa-remove"></i>
    </a>`
    newTodo.classList.add('list-group-item', 'd-flex', 'justify-content-between')
    let todoList = document.querySelector('.list-group');
    todoList.appendChild(newTodo);
    styleFunction();
    arrayTodo.push(newTodo);
}

styleFunction();
document.querySelector('#addTodo').addEventListener('click', addTodo);


function removeTodo(event){
    event.preventDefault()
    let parent = event.target.parentElement.parentElement;
    parent.remove();
}

document.querySelectorAll('.fa-remove').forEach(function(item){
    item.addEventListener('click', removeTodo);
})










// todos.forEach((todo,index) => todo.classList.add(index % 2 === 0 ? 'bg-warning': 'bg-secondary'))

// for (let i = 0; i < todos.length; i++){
//     if(i % 2 === 0){
//         todos[i].classList.add('bg-warning')
//     } else {
//         todos[i].classList.add('bg-secondary')
//     }
// }

