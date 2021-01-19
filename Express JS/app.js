//install express.js NPM

const express = require('express');
const app = express();

//Initialize web server with express framework

app.listen(3002, () => {
    console.log('Server is running');
})