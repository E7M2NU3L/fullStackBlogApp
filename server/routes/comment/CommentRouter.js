// importing the module
const express = require('express');

// Controllers
const { CommentCreateCtrl, FetchSingleCommentCtrl, DeleteSingleCommentCtrl, UpdateCommentCtrl } = require('../../controllers/comment/CommentCtrl');
const Protected = require('../../middlewares/Protected');

// initializing the Router
const CommentRouter = express.Router();

// Comments Route
// 1. post creation Route
CommentRouter.post("/:id", Protected, CommentCreateCtrl);

// 2. Fetch single Post
CommentRouter.get("/:id", FetchSingleCommentCtrl);

// 3. Posts Delete
CommentRouter.delete("/:id", Protected, DeleteSingleCommentCtrl);

// 4. Update Posts Content
CommentRouter.put("/:id",Protected, UpdateCommentCtrl);

// exporting the Router
module.exports = CommentRouter;