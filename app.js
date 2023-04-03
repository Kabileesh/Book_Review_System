//jshint esversion:6

require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const { credentials } = require("./auth/passport");
const passport = require("passport");
const router = require("./routes/routes");
const { default: mongoose } = require("mongoose");
const { response } = require("express");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
credentials(passport);

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());


app.use(router);

mongoose.connect("mongodb://127.0.0.1:27017/book_review_system").then(() => {
  app.listen(3000, () => {
    console.log("Server started on port 3000 and db connected");
  });
}).catch(err => {
    console.log(err);
})
