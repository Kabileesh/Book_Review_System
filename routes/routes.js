const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/loginController");
const viewReview = require("../controllers/viewReviewController");
const addReview = require("../controllers/addReviewController");

router.get("/register", registerUser);
router.get("/login",loginUser);
router.get("/view-reviews", viewReview);
router.get("/add-review",addReview);
router.get("/",(req, res) => {
    res.json({ response : "Home page"})
})

module.exports =  router;