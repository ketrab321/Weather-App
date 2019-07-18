const request = require('request');

const url = 'https://api.darksky.net/forecast/94f2fdef961f7eab168800ccd1306646/37.8267,-122.4233?units=si&lang=pl';

request({
    url: url,
    json: true
},(error, response) => {
    console.log(response.body.daily.data[0].summary +" It's currently: " + response.body.currently.temperature + " degrees out. There is " + response.body.currently.precipProbability + " percent chance of rain.");
})