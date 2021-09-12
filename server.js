//external modules
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

//module instance
const app = express(); 

//PORT
const PORT = process.env.PORT || 4000;

//internal modules
const controllers = require("./controllers");

//app config
app.set("view engine", "ejs");

//middleware
app.use(express.static("public"));

app.use(express.urlencoded({extended: false}));

app.use(methodOverride("_method"));

//routes
app.use("/home", controllers.track);

app.get("/*", (req, res) => {
  const context = {
    error: req.error,
  };
  res.render("404", context);
});

app.listen(4000, function(){
  console.log("ON MY MOMMA ITS LIT ON PORT 4000. TYBG");
});