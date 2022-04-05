const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");
const app = express();

//Using body parser modeule
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

//connecting to database
mongoose.connect(process.env.DB_CONNECTION,()=> console.log("Connected to DB"));

//Listening on port 3000
app.listen(3000 || process.env.PORT, function(event){
  console.log("Listening on port 3000");
});


//Middlewares
// app.use("/",()=> console.log("Middleware function running"));


//Importing routes using Middleware
const postRoute = require("./routes/posts");
app.use("/posts",postRoute);


//Routes
//setting different routes to add functionality
app.get("/",function(req,res){
  res.send("Hello");
});
