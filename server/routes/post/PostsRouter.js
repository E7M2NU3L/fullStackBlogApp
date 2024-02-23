// importing the module
const cloudinary = require('cloudinary');
const MongoStore = require('connect-mongo');
const multer = require('multer');
const storage = require('../../config/Cloudinary');
const express = require('express');

// Controllers
const { PostsCreateCtrl, FetchAllPostsCtrl, FetchSinglePostsCtrl, DeleteSinglePostsCtrl, UpdatePostsCtrl } = require('../../controllers/post/PostCtrl');

// Authorizing the middleware
const Protected = require('../../middlewares/Protected');

// initializing the Router
const PostsRouter = express.Router();

// instance of multer
const upload = multer({
    storage,
})

// Posts Routes

// 1. post creation Route
PostsRouter.post("/", Protected, upload.single("head"), PostsCreateCtrl);

// 2. Get Posts List
PostsRouter.get("/", FetchAllPostsCtrl);

// 3. Fetch single Post
PostsRouter.get("/:id", FetchSinglePostsCtrl);

// 4. Posts Delete
PostsRouter.delete("/:id", Protected, DeleteSinglePostsCtrl);

// 5. Update Posts Content
PostsRouter.put("/:id", Protected, upload.single("head"), UpdatePostsCtrl);

// exporting the Router
module.exports = PostsRouter