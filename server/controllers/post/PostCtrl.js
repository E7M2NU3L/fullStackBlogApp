// importing required Models
const PostModel = require("../../models/post/Posts");
const UserModel = require("../../models/user/User");

// App Error Handler middleware
const AppErr = require("../../utils/AppErr");

// Controllers for Post Model

// 1. Post Creation
const PostsCreateCtrl = async(req, res, next) => {
    try {
        // get the data parsed in the body
        const {title, description, category, image, user} = req.body;

        // get the id of the user
        const userID = req.session.userAuth;

        // path of the image
        const filepath = req.file.path;

        // handle empty body
        if(!title || !description || !category || !req.file){
            return next(AppErr("All fileds are required", 300));
        }

        // find the user of this post
        const UserFound = await UserModel.findById(userID);

        // handle user not Found
        if(!UserFound){
            return next(AppErr("User not Found Try Logging in"));
        }

        // if user Found Create Post
        const PostCreated = await PostModel.create({
            title,
            description,
            category,
            user: UserFound._id,
            image: filepath
        })

        // Push the post created into the User Model
        await UserFound.posts.push(PostCreated._id);

        // resave the model
        await UserFound.save();

        // success message
        console.log("Post has been created Successfully");
        res.json({
            status: true,
            message: "Post has been created Successfully",
            PostCreated,
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error.message));
    }
}

// 2. Fetch All Posts
const FetchAllPostsCtrl = async(req, res, next) => {
    try {
        // find all the posts in the database
        const PostsFound = await PostModel.find().populate("comments");

        // return the posts data
        console.log("All Posts has been Fetched");
        res.json({
            status: true,
            message: "Fetch All Posts Route",
            data: PostsFound,
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error.message));
    }
}

// 3. Fetch Single Posts Route
const FetchSinglePostsCtrl = async(req, res, next) => {
    try {
        // get the id of the posts
        const PostID = req.params.id;

        // find the Post in the DB
        const PostFound = await PostModel.findById(PostID).populate("comments");

        console.log("Single Post has been Fetched");
        return res.json({
            status: true,
            message: "Fetch Single Posts Route",
            data: PostFound,
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error.message))
    }
}

// 4. Update Posts Route
const UpdatePostsCtrl = async(req, res) => {
    try {
        // getting the data from the body
        const {title, description, category, image} = req.body;

        // get the id of the post
        const PostID = req.params.id;

        // getting the user ID
        const UserID = req.session.userAuth;

        // get the file path
        const filePath = req.file.path;
    
        // find the Post
        const Post = await PostModel.findById(PostID);
    
        if(Post?.user.toString() !== UserID.toString()){
            return next(AppErr("This post belongs to another User"));
        }
    
        // deleting the posts
        const UpdatedPost = await PostModel.findByIdAndUpdate(UserID,{
            title,
            description,
            category,
            image: filePath,
        },{
            new: true,
        });
        
        // return the response
        console.log("Regsiter Route");
        res.json({
            status: true,
            message: "Update Single Posts Route",
            data: UpdatedPost,
        })
    } catch (error) {
        console.log(error);
        res.json({
            error
        })
    }
}

// 5. Delete Posts
const DeleteSinglePostsCtrl = async(req, res, next) => {
    try {
        // get the id of the post
        const PostID = req.params.id;

        // getting the user ID
        const UserID = req.session.userAuth;

        // find the Post
        const Post = await PostModel.findById(PostID);

        if(Post?.user.toString() !== UserID.toString()){
            return next(AppErr("This post belongs to another User"));
        }

        // deleting the posts
        const DeletedPost = await PostModel.findByIdAndDelete(PostID);

        // return the status of the process
        console.log("Regsiter Route");
        res.json({
            status: true,
            message: "Delete Single Posts Route",
            DeletedPost,
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error.message));
    }
}

// exporting the modules
module.exports = {
    PostsCreateCtrl,
    UpdatePostsCtrl,
    DeleteSinglePostsCtrl,
    FetchAllPostsCtrl,
    FetchSinglePostsCtrl
}