const HomeController = (req,res)=>{
    res.render('index')};

// const BlogController = (req,res)=>{
//     res.render('blog',{userArray:userArray});
// }

const fetch = require('node-fetch');
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const getUsers = (req,res)=>{
    fetch(apiURL)
    .then(response=>response.json())
    .then(last=>{
        console.log(last)
        res.render('users',{last:last})
    })

}

module.exports={HomeController};