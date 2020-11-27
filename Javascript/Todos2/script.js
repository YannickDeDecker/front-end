let inputTodo = document.querySelector('#todo');
let buttonAddTodo = document.querySelector('#addTodo');
const todoArray = JSON.parse(window.localStorage.getItem('ToDoList') || '[]');

function appendTodo(item) {
    let template = document.querySelector("#todoTemplate").content.cloneNode(true);
    template.querySelector('span').textContent = item
    document.querySelector('#todoList').appendChild(template);
}

function addTodo(event){
    event.preventDefault();
    let inputTodoValue = inputTodo.value;
    todoArray.push(inputTodoValue);
    window.localStorage.setItem('ToDoList', JSON.stringify(todoArray));
    inputTodo.value = '';
    appendTodo(inputTodoValue);
}

buttonAddTodo.addEventListener('click', addTodo);
todoArray.forEach(appendTodo);

let listTodos = document.querySelectorAll('li');

// function filterTodos(){
//     let inputText = document.querySelector('#filter').value.toLowerCase();
//     listTodos.forEach(function(element){
//         if (inputText && element.innerText.toLowerCase().includes(inputText)){
//             element.classList.add('bg-warning')
//         } else {
//             element.classList.remove('bg-warning')
//         }
//     });
// }

// document.querySelector('#filter').addEventListener('input', filterTodos);