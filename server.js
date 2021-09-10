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


//landing page
app.get('/', (req,res) => {
  res.render('landing.ejs')
});

//home page
app.get("/home", (req,res) => {
  res.render('index.ejs')
});

//profile page
app.get("/profile", (req,res) => {
  res.render('profile.ejs')
});

//track page
app.get("/track", (req,res) => {
  res.render('track_show.ejs')
});

//car page
app.get("/car", (req,res) => {
  res.render('car_show.ejs')
});

app.get("/*", (req, res) => {
  const context = {
    error: req.error,
  };
  res.render("404", context);
});

app.listen(4000, function(){
  console.log("I am live on port 4000");
});