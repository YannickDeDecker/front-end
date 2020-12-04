//ENTER A TODO LIST ITEM TO THE PAGE AND LOCAL STORAGE

function Todo(text){
    this.text = text;
}

const inputTodo = document.querySelector('#todo'); //input field 'enter a todo'
const buttonAddTodo = document.querySelector('#addTodo'); //button 'add todo'
let todoArray = JSON.parse(window.localStorage.getItem('ToDoList') || '[]'); //'ToDoList' is key for array in local storage

function appendTodo(todo) {
    let template = document.querySelector("#todoTemplate").content.cloneNode(true);
    template.querySelector('span').textContent = todo.text
    template.querySelector('.fa-remove').addEventListener('click', removeTodo);
    document.querySelector('#todoList').appendChild(template);
}

function addTodo(event){
    event.preventDefault();
    let todo = new Todo(inputTodo.value);
    todoArray.push(todo);
    window.localStorage.setItem('ToDoList', JSON.stringify(todoArray));
    inputTodo.value = '';
    appendTodo(todo);
}

buttonAddTodo.addEventListener('click', addTodo);
todoArray.forEach(appendTodo);

//FILTER TODO LIST TO SEARCH

function filterTodos(){
    let inputText = document.querySelector('#filter').value.toLowerCase();
    let listTodos = document.querySelectorAll('li');
    listTodos.forEach(function(element){
        if (inputText && element.innerText.toLowerCase().includes(inputText)){
            element.classList.add('bg-warning')
        } else {
            element.classList.remove('bg-warning')
        }
    });
}

document.querySelector('#filter').addEventListener('input', filterTodos);

//REMOVE INDIVIDIUAL ELEMENTS

function removeTodo(event){
    event.preventDefault();
    let x = event.target;
    let item = x.parentElement.parentElement
    let text = item.firstElementChild.textContent;
    todoArray = todoArray.filter(function(element){
        return element.text !== text;
    })
    item.remove();
    window.localStorage.setItem('ToDoList', JSON.stringify(todoArray));
}

//REMOVE ALL ELEMENTS

document.querySelector('#clear-todos').addEventListener('click', function(event){
    event.preventDefault();
    todoArray = [];
    window.localStorage.removeItem('ToDoList');
    document.querySelectorAll('#todoList > li').forEach(el => el.remove());
})




