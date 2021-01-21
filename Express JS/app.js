//install express.js NPM

const express = require('express');
const app = express();
const path = require('path');
const members = require('./members');
const moment = require('moment');

//CREATING MIDDLEWARE FUNCTION
const logger = (req,res,next) => {
    console.log('Hello World!');
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
}

app.use(logger) //initializing middleware function

const PORT = process.env.PORT || 8080;
app.listen(PORT, () =>{
    console.log(`Server started on PORT ${PORT}`);
});

// app.get('/', (req,res) => {
//     res.send('<h1>Hello World!</h1><h2>This is my first server</h2>');
// });

// app.get('/', (req,res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//SET STATIC FOLDER
app.use(express.static(path.join(__dirname, 'public')));

//ROUTE DEFINITION - ALL MEMBERS
// app.get('/api/members', (req,res) =>{
//     res.json(members);
// })

//GET SINGLE MEMBER
app.get('/members/:id', (req,res) =>{
    const found = members.some((member) =>{
        return member.id === parseInt(req.params.id)
    })

    if(found){
        res.json(members.filter((member) => {
            return member.id === parseInt(req.params.id)
        }))
    } else {
        res.status(400).json({msg: `No Member with the ID of ${req.params.id}`})
    }
})