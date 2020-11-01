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



