const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/admin',{
   useCreateIndex:true,
   useNewUrlParser:true,
   useUnifiedTopology:true
})

mongoose.connection.on('connected', () => {
    console.log('Connectd to DB')
})