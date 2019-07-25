const request = require('request');

const forecast= (latitude,longitude, callback) =>{

    const url = 'https://api.darksky.net/forecast/94f2fdef961f7eab168800ccd1306646/'+latitude+','+longitude+'?units=si&lang=pl';
    //console.log(url);
    request({url: url,json: true},(error, response) => {
        //console.log(response.body);
        if(error){
            callback('Unable to connect to forecast services',undefined);
        }
        else if(response.body.error){
            callback('Unable to find forecast. Try another search',undefined)
        }
        else{
            callback(undefined,response.body.daily.data[0].summary +" It's currently: " + response.body.currently.temperature + " degrees out. There is " + response.body.currently.precipProbability + " percent chance of rain.");
        }

    })
}
module.exports=forecast
