//external modules
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongo");

//module instance
const app = express(); 

//PORT
const PORT = process.env.PORT || 4000;

//internal modules
const controllers = require("./controllers");

//app config
app.set("view engine", "ejs");

/* session controller */
app.use(
  session({
    // where to store the sessions in mongodb
    store: MongoStore.create({ mongoUrl: process.env.MONGODB_URI }),
    // secret key is used to sign every cookie to say its is valid
    secret: "super secret",
    resave: false,
    saveUninitialized: false,
    // configure the expiration of the cookie
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
    },
  })
);

app.use((req, res, next) => {
    res.locals.user= req.session.currentUser;
    return next();
});

//middleware
app.use(express.static("public"));

app.use(express.urlencoded({extended: false}));

app.use(methodOverride("_method"));

//routes
app.get("/", (req, res) => {
  const context = {
    error: req.error,
  };
  res.render("landing", context);
});

app.use("/home", controllers.home);
app.use("/profile", controllers.car);
app.use("/track", controllers.track);
app.use("/", controllers.auth);
app.use("/laptime", controllers.laptime);

app.get("/*", (req, res) => {
  const context = {
    error: req.error,
  };
  res.render("404", context);
});

app.listen(process.env.PORT || 4000);