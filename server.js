const express = require('express');
const app = express();
const db = require('./db');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const personRoute = require('./routes/personRoutes');

app.use('/person',personRoute);

const menuRoute = require('./routes/menuRoutes');

app.use('/menu',menuRoute);


app.listen(3000,()=>{
    console.log("server is running");
})