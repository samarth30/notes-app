const request = require("request");
const geocode = require("./util/geocode");
const forcast = require("./util/forcast");

const address = process.argv[2];
if(!address){
    console.log("please provide the address");
}else{
geocode(address,(error,{lattitude,longitude,location})=>{
    if(error){  
    return console.log(error);
    }
    
    forcast(lattitude,longitude,(error,forecastData)=>{
        if(error){
        return console.log(error);
        }

       console.log(location);
       console.log(forecastData);
    })

})
}





