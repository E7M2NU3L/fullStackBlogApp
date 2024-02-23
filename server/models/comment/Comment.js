// importing the mongoose
const mongoose = require('mongoose');

// creating the comments Schema
const CommentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true, 
        ref: "User",
    },
    message: {
        type: String,
        required: true,
    }
},{
    timestamps: true,
});

// creating the Comments Model
const CommentModel = mongoose.model("Comment", CommentSchema);

// exporting the Model
module.exports = CommentModel;