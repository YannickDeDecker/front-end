const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const {homeController} = require('./Controller/homeController');
const {blogController} = require('./Controller/blogController');
const {getUsers} = require('./Controller/userController')
const path = require('path');

app.use(bodyParser({
    extended: false
}))

app.set('view engine', 'ejs');
app.get('/', homeController);
app.get('/blog', blogController);
app.get('/users', getUsers);

app.listen(3009, () =>{
    console.log('Server is running');
});