var students = [
    {
        name: "Yannick",
        score: 10
    },
    {
        name: "Erik",
        score: 8
    },

    {
        name: "Kenneth",
        score: 5
    },
    {
        name: "Stijn",
        score: 3
    }
]

// const newList = students.filter(function(element){
//     return element.score >= 5;
// }).map(function(input){
//     return input.name
// });

const newList = students
    .filter(student => student.score >= 5)
    .map(student => student.name);

newList.sort();
console.log(newList);

/*

get student names who got 5 or >5 and print alphabetically sorted new list

*/