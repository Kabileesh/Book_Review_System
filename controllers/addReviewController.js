const Review = require("../model/reviewModel")
const passport = require("passport")

const addReview = (req, res) => {
    const {bookName, author, description, review, rating} = req.body;
    // if(req.isAuthenticated()){
        const user_id = req.body.id;
        const newReview = new Review({
            bookName : bookName,
            author : author,
            description : description,
            review : review,
            user_id : user_id,
            rating : rating
        })
        newReview.save();
    res.send(newReview);
}

module.exports = addReview;