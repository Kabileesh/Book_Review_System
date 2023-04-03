const passport = require("passport");
const findOrCreate = require("mongoose-findorcreate"); 
const User = require("../model/userModel");

const registerUser = (req, res)  => {
    const newUser = new User({
        name : req.body.name,
        username : req.body.username,
        phone : +req.body.phone
    })
    console.log(newUser.username,newUser.phone)
    User.register(newUser, req.body.password, (err, user) => {
        if(err){
            console.log(err);
            res.send("User already exist")
        }
        else{
             passport.authenticate("local")(req, res, next =>{
                res.json({ response : "Render Sign In Page"});
            });
        }
    })
}

const loginUser = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // console.log(username,password);
    if(!username || !password){
        console.log("Please enter email id");
        res.send("Enter valid email id");
    }
    else{
        passport.authenticate("local")(req, res, next => {
            res.send("Successfully Logged in");
        }
        // ,{
        //     // successRedirect : "/home",
        //     // failureRedirect : "/login",
        // }
        )
    }
}

module.exports = {
    registerUser,
    loginUser
}