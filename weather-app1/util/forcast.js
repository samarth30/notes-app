const request = require("request");

const forcast = (longitude,lattitude,callback) =>{
    const url = 'https://api.darksky.net/forecast/d4d1ff10b5b30aed276dc3db10a2a6ac/'+longitude+','+lattitude+'?';

    request({url:url,json:true},(error,{body})=>{
        if(error){
            callback("unable to connect to the internet",undefined);
        }else if(body.error){
            callback("the address you entered is invalid",undefined);
        }else{
            callback(undefined,body.daily.data[0].summary+" the temp is " + body.currently.temperature + " digrees out. there is " + body.currently.precipProbability + " percent chance of rain");
        }
    })
}

module.exports = forcast;
