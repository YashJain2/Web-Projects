const express = require ("express");
const https = require("https");
const bodyParser = require("body-parser");
require('dotenv').config();
const app = express();

//middleware
app.use(bodyParser.urlencoded({extended:true}));
app.set('trust proxy',true);

//creating connection
app.listen(process.env.PORT || 3000, function(e){
  if(e){
    console.log(e);
  }
  else{
    console.log("Connection successful");
  }
})

//routes
app.get("/", (req,res) => {
  // console.log(__dirname);
  res.sendFile(__dirname +'/index.html',function(e){
    if(e) console.log(e);
  });
});

app.post("/", (req,res) => {

  // var ip;
  // if (req.headers['x-forwarded-for']) {
  //     ip = req.headers['x-forwarded-for'].split(",")[0];
  // } else if (req.connection && req.connection.remoteAddress) {
  //     ip = req.connection.remoteAddress;
  // } else {
  //     ip = req.ip;
  // }console.log("client IP is *********************" + ip);
  // const ipIndex = iplocation(ip);
  // console.log(ipIndex);

  const city = req.body.city;
  const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+process.env.APIKEY+"&units=metric";
  // console.log(city);
  https.get(url,function(response){
    response.on("data",function(data){
      var weatherDataObject=JSON.parse(data);
        var temp=weatherDataObject.main.temp;
        var weatherDescription=weatherDataObject.weather[0].description;
        var code = weatherDataObject.weather[0].icon;
        var imgCode="http://openweathermap.org/img/wn/"+ code +"@2x.png";
        res.write("<h1>The Temperature in " + city + " is "+ temp +" degree Celcuis</h1><h2>The weather is currently "+ weatherDescription);
        res.write("<br>");
        res.write("<img src = " + imgCode + ">");
        res.send();
    });
  });
});
