//version 1

let askQuestion = prompt('What would you like to do?');
let toDoList = [ ];

while(askQuestion !== 'quit'){
    if (askQuestion === 'new'){
        toDoList.push(prompt('Give a new list item'));

    } else if (askQuestion === 'list'){
        console.log(toDoList);

    } else if (askQuestion === 'delete'){
        toDoList.splice(prompt('Which item has to go?'), 1)

    }
    askQuestion = prompt('What would you like to do?');
}
console.log('You have quit the app');



//Version 2

let input = prompt('What would you like to do?');
const todo = ['Collect Chicken Eggs', 'Clean Liter Box'];

while(input !== 'quit' && input !== 'q'){
    if (input === 'list'){
        console.log('********')
        for(let i = 0; i < todo.length; i++){
            console.log(`${i}: ${todo[1]}`);
        }
        console.log('********')
    } else if (input === 'new'){
        const newToDo = prompt('Ok, what is the new to do?');
        todo.push(newToDo);
        console.log(`${newToDo} added to the list`);
    } else if (input === 'delete'){
        const index = parseInt(prompt('OK, enter an index to delete!'));
        const deleted = todo.splice(index, 1);
        console.log(`OK, deleted ${deleted[0]}`);
    }
    input = prompt('What would you like to do?');
}
console.log('OK, quit the app!'); 



