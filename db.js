const mongoose = require('mongoose');
require('dotenv').config();
const mongoURL = process.env.LOCAL_DB_URL

//const mongoURL = process.env.DB_URL;

 
mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connectd to MongoDb Server");
})

db.on('error',(err)=>{
    console.error("error connection to MongoDb Server",err);
})

db.on('disconnected',()=>{
    console.log("Disconnectd to MongoDb Server");
})

module.exports = db;

