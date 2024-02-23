// importing the module
const mongoose = require('mongoose');

// creating the schema for the model
const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profileImage: {
        type: String,
    },
    coverImage: {
        type: String,
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Posts"
        }
    ],
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
},{
    timestamps: true,
})

// creating the user model
const UserModel = mongoose.model("User", UserSchema);

// exporting the created model
module.exports = UserModel;