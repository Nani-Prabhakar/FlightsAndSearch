const { config } = require('dotenv');
const express=require('express');
const {PORT}= require('./config/serverConfig')
const setupAndStart=async ()=>{
    const app=express();
    app.listen(PORT,()=>{
        console.log(`server is running at port ${PORT} `)
    })
}

setupAndStart();