const { config } = require('dotenv');
const bodyParser=require('body-parser');
const express=require('express');
const {PORT}= require('./config/serverConfig')
const setupAndStart=async ()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,()=>{
        console.log(`server is running at port ${PORT} `)
    })
}

setupAndStart()