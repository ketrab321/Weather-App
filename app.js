const request = require('request');

const url = 'https://api.darksky.net/forecast/94f2fdef961f7eab168800ccd1306646/37.8267,-122.4233?units=si&lang=pl';
const urlgeocoding = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYmFydG9zenN0YWpub3dza2kiLCJhIjoiY2p5OGNzZXQ2MDg4NDNpcXd0NHo3bXdndyJ9.ZYkQgNEIEk0n8kxNYyXz0A"
request({
    url: url,
    json: true
},(error, response) => {
    console.log(response.body.daily.data[0].summary +" It's currently: " + response.body.currently.temperature + " degrees out. There is " + response.body.currently.precipProbability + " percent chance of rain.");
})

request({
    url: urlgeocoding, json: true
}, (error,response)=>{
    const latitude = response.body.features[0].center[0];
    const longitude = response.body.features[0].center[1];
    console.log(latitude , longitude)
});

