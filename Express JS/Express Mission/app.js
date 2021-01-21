const express = require('express');
const app = express();
const path = require('path');
const {HomeController} = require('./Controller/homeController');
const bodyParser =  require('body-parser');

app.set('view engine','ejs');

app.get('/',HomeController);
// app.get('/blog',BlogController);

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3010,() => {
    console.log('Server is running!');
})
