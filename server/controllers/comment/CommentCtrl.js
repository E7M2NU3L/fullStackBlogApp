const CommentModel = require("../../models/comment/Comment");
const PostModel = require("../../models/post/Posts");
const UserModel = require("../../models/user/User");
const { use } = require("../../routes/user/UsersRouter");
const AppErr = require("../../utils/AppErr");

// Controllers for Post Model

// 1. Post Creation
const CommentCreateCtrl = async(req, res, next) => {
    try {
        // getting the comment from the body
        const {message} = req.body;

        // get the id of the Post
        const PostID = req.params.id;

        // find the Post
        const PostFound = await PostModel.findById(PostID);

        // user of this comment
        const user = req.session.userAuth;

        // create the Comment
        const Comment = await CommentModel.create({
            user,
            message,
        });

        // pushing the comment to the post
        await PostFound.comments.push(Comment._id);

        // find the user for the post
        const userFound = await UserModel.findById(user);

        // pushing the comment to the user Model
        await userFound.comments.push(Comment._id);

        // saving the content
        await PostFound.save({
            validateBeforeSave: false
        });
        await userFound.save({
            validateBeforeSave: false
        });

        // returning the response
        console.log("The Comment has been created Successfully");
        res.json({
            status: true,
            message: "Create Comment Route",
            comment:Comment,
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error.message));
    }
}

// 3. Fetch Single Comment Route
const FetchSingleCommentCtrl = async(req, res, next) => {
    try {
        // getting the id
        const CommentID = req.params.id;

        // fetching the comment
        const CommentFound = await CommentModel.findById(CommentID);

        // retuning the response Data
        console.log("Fetching Single Comment Was Done");
        res.json({
            status: true,
            message: "Fetch Single Comment Route",
            CommentFound,
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error.nessage));
    }
}

// 4. Update Comment Route
const UpdateCommentCtrl = async(req, res, next) => {
    try {
        // getting the comment ID from the params
        const CommentID = req.params.id;

        // getting the UserID
        const UserID = req.session.userAuth;

        // getting the comment to be updated
        const {message} = req.body;

        // finding the user of the comment
        const CommentFound = await CommentModel.findById(CommentID);

        // checking the user of the Comment
        const CommentedUser = CommentFound.user;

        // checking if the logged in user and commented user are same
        if(UserID.toString() !== CommentedUser.toString){
            return next(AppErr("You cannot Update Another User's Comment", 403));
        }

        // update the Comment
        const CommentUpdated = await CommentModel.findByIdAndUpdate(CommentID,{
            message,
        },{
            new: true,
        });

        // return the response
        console.log("Comment Successfully Updated");
        res.json({
            status: true,
            message: "Update Single Comment Route",
            CommentUpdated,
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error.message));
    }
}

// 5. Delete Comment
const DeleteSingleCommentCtrl = async(req, res, next) => {
    try {
        // getting the comment ID from the params
        const CommentID = req.params.id;

        // getting the UserID
        const UserID = req.session.userAuth;

        // getting the comment to be updated
        const {message} = req.body;

        // finding the user of the comment
        const CommentFound = await CommentModel.findById(CommentID);

        // checking the user of the Comment
        const CommentedUser = CommentFound.user;

        // checking if the logged in user and commented user are same
        if(UserID.toString() !== CommentedUser.toString){
            return next(AppErr("You cannot Update Another User's Comment", 403));
        }

        // Delete the Comment
        const DeletedComment = await CommentModel.findByIdAndDelete(CommentID);

        console.log("Regsiter Route");
        res.json({
            status: true,
            message: "Delete Single Comment Route",
            DeletedComment,
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error.message));
    }
}

// exporting the modules
module.exports = {
    CommentCreateCtrl,
    UpdateCommentCtrl,
    DeleteSingleCommentCtrl,
    FetchSingleCommentCtrl
}