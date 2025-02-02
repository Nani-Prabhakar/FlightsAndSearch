const { City } = require('../models/index.js');
const { Op }=require('sequelize');

class CityRepository{
   async createCity({ name }){
    try {
        const city=await City.create({
            name
        });
        return city;
        
    } catch (error) {
        console.log("Something went wrong in the repository layer ");
        throw { error };
        
    }

   }

   async deleteCity(cityId){
    try {
        await City.destroy({
            where:{
                id:cityId
            }
        });
        return true;
        
    } catch (error) {
        console.log("Something went wrong in the repository layer ");
        throw { error };
        
    }

   }

   async updateCity(cityId,data){  //data={name:"changed value"}
    try {
        //The below approach also works but will not return updated object
        //If we are using pgsql then returning:true can be used,else not
       /* const city=await City.update(data,{
            where:{
                id:cityId
            }
        });*/

        //for getting updated data in mysql we use the below approach
        const city=await City.findByPk(cityId);
        city.name=data.name;
        await city.save();
        return city;
        
    } catch (error) {
        console.log("Something went wrong in the repository layer ");
        throw { error };
        
    }

   }

   async getCity(cityId){
    try {
        const city=await City.findByPk(cityId);
        return city;
        
    } catch (error) {
        console.log("Something went wrong in the repository layer ");
        throw { error };
        
    }

   }
   async getAllCities(filter){
    try {
        //if we send filter it will return results that matches with filter or else we get all cities
        if(filter.name){
            const cities=await City.findAll({
                where:{
                    name:{
                        [Op.startsWith]:filter.name
                    }  

                }
            });
            return cities;
        }
        const cities=await City.findAll();
        return cities;
        
    } catch (error) {
        console.log("Something went wrong in the repository layer ");
        throw { error };
        
    }

   }

}

module.exports=CityRepository;