const { config } = require('dotenv');
const cityRepository=require("./repository/city-repository");
const bodyParser=require('body-parser');
const express=require('express');
const {PORT}= require('./config/serverConfig')
const db=require('./models/index');
const sequelize=require('sequelize');
const {City}=require('./models/index');
const {Airplane}=require('./models/index');
const ApiRoutes = require('./routes/index');
const setupAndStart=async ()=>{

    const app=express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/api',ApiRoutes);

    app.listen(PORT,async ()=>{
        console.log(`server is running at port ${PORT} `)
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter:true});
       }
    //    const city=await City.findOne({
    //         where:{
    //             id:5
    //         }
    //     });
    //     const airports=await city.getAirports();
    //     console.log(city,airports);
    await Airplane.create({
        modelNumber:"Bombardier CRJ"

    })
    })
    
}

setupAndStart()
// const city=await City.findOne({
//     where:{
//         id:5
//     }
// });
// const airports=await city.getAirports();
// const newAirport=await Airport.findOne({
//     where:{
//         cityId:1
//     }
    
//  });
//  await city.addAirport(newAirport);
// console.log(city,airports);