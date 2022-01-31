const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://localhost/crud";

const app = express(); 

mongoose.connect(url, {useNewUrlParser : true});

const db = mongoose.connection;

app.use(express.json());

const userRouter = require('./routes/users');
app.use('/users', userRouter);

db.on('open', function(){
    console.log('connected');
});

app.listen(8080);