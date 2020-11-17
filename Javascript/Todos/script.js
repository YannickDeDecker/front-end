// let todosOdd = document.querySelectorAll('.list-group-item:nth-of-type(odd)');
// let todosEven = document.querySelectorAll('.list-group-item:nth-of-type(even)');

// todosOdd.forEach(function(list){
//     list.classList.add('bg-warning');
// })

// todosEven.forEach(function(list){
//     list.classList.add('bg-secondary');
// })

let todos = document.querySelectorAll('.list-group-item');

// todos.forEach((todo,index) => todo.classList.add(index % 2 === 0 ? 'bg-warning': 'bg-secondary'))

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

// for (let i = 0; i < todos.length; i++){
//     if(i % 2 === 0){
//         todos[i].classList.add('bg-warning')
//     } else {
//         todos[i].classList.add('bg-secondary')
//     }
// }



function addTodo(){
    let enterTodo = document.querySelector('#todo').value;
    let newTodo = document.createElement('li').innerText = enterTodo;
    document.querySelector('.list-group').appendChild(newTodo);
}

document.querySelector('button[type]').addEventListener('click', addTodo);