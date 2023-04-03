const mongoose = require("mongoose");

checkRating = (rating) => {
    return rating > 0 && rating < 6;
}

const reviewSchema = new mongoose.Schema({
    bookName : {
        type : String,
        trim : true
    },
    author : String,
    description : String,
    review : String,
    user_id : mongoose.Schema.Types.ObjectId,
    rating : {
        type : Number,
        validate : [checkRating, "Enter proper rating"]
    }
});

const Review = mongoose.model("Reviews",reviewSchema);

module.exports = Review;