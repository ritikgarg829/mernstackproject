const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path: './config.env' });
// const user = require('./model/userschema');
require('./db/conn');

app.use(express.json());

// ================================================we link the router file to make the app file easy--------------------
app.use(require('./router/auth'));
const PORT = process.env.PORT;


// ----------------middleware------------------------------


// app.get('/', (req, res) => {
//     res.send('hello welcome to my server')
// });

// app.get('/about', middleware, (req, res) => {
//     res.send('hello welcome to my about')
//     next();
// });

app.get('/contact', (req, res) => {
    res.send('hello welcome to my contact')
});

// app.get('/login',(req, res) => {
//     res.send('hello welcome to my signin')
// });

// app.get('/signup', (req, res) => {
//     res.send('hello welcome to my signup')
// });

app.listen(PORT, () => {
    console.log('my server is running at ${PORT}');
});