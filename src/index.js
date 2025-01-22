const { config } = require('dotenv');
const cityRepository=require("./repository/city_repository");
const bodyParser=require('body-parser');
const express=require('express');
const {PORT}= require('./config/serverConfig')
const setupAndStart=async ()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.listen(PORT,async()=>{
        console.log(`server is running at port ${PORT} `)
        const repo=new cityRepository();
        await repo.createCity({name:"new delhi"});
       
    })
    
}

setupAndStart()