const request = require("request");


const geocode = (address,callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1Ijoic2FtYXJ0aDMwIiwiYSI6ImNrMjd5NHR2MTMxYzgzbW12aXJxbnlmMXUifQ.iq77cX-sSn8fNlTCaSqcyA'
    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback("unable to connect to internet",undefined)
        }else if(body.features.length === 0){
            callback("the address you searched is invalid",undefined);
        }else{
            callback(undefined,{
                lattitude:body.features[0].center[0],
                longitude:body.features[0].center[1],
                location:body.features[0].place_name
            })
        }
    });
}


module.exports = geocode;

