//external modules
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

//module instance
const app = express(); 

//PORT
const PORT = process.env.PORT || 4000;

// //internal modules
// const controllers = require("./controllers");

//app config
app.set("view engine", "ejs");

// //mongodb connection
// const dbConnection = require("./config/db.connection.js")

//middleware


// this will listen for any GET requests coming to the server
app.get('/', function(request,response){
    // this will send the words "Hello World" to the client that requested the home page
    response.send("Hello World"); 
});

app.use("")

app.listen(4000, function(){
  console.log("I am live on port 4000");
});