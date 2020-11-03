// Arrays are used to store multiple entrees in one variable

let studentNames = ['Mikail', 'Priya', 'Lotte', 'Kobe', 'Elnura', 'Oguz', 'Joty', 'Yannick', 'Susan'];

/*

0: Mikaeil
1: Priya
2: Lotte
3: Kobe
4: Elnura
...

*/

let moreStudentNames = [
    ['Mikail', 'Priya', 'Lotte', 'Kobe'],
    ['Elnura', 'Oguz', 'Joty', 'Yannick', ['Susan', 'Adnan']]
]



console.log(studentNames[2]); //returns Lotte
console.log(moreStudentNames[0][1]); //returns Priya

studentNames[1][2][0] = 'Rik';
console.log(studentNames);



// ARRAY METHODS

//.length 
let studentsLength = studentNames.length;
console.log(studentsLength);

//.sort

//access the last element
let lastStudent = studentNames[studentNames.length - 1]
console.log(lastStudent);

//adding array elements
//.push() - add element to the end of the array

let todo = [];

function addTodo(title){
    let temp = todos;
    temp.push(title)
    return todos = temp;
}

addTodo('Learn Javascript');
console.log(todos);