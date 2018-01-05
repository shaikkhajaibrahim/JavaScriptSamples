var request = require('request');

request("http://www.npmjs.com",function (error, response, body) {
    console.log("error: ", error);
    console.log("status code: "+response.statusCode);
    console.log("body: "+body);
    
})