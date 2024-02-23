// importing the required modules
const mongoose = require('mongoose');

// creating the Schema
const PostsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required:  true,
        enum: ["react js", "html", "css", "node js", "javascript", "other"],
    },
    image: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
},{
    timestamps: true,
})

// importing the model
const PostModel = mongoose.model("Posts", PostsSchema);

// exporting the Model
module.exports = PostModel;