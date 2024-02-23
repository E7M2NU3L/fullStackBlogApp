// importing the module
const express = require('express');

// Controllers
const { RegisterCtrl, LoginCtrl, GetSingleUserCtrl, ProfileCtrl, ProfileImageCtrl, CoverImageCtrl, UpdatePasswordCtrl, LogoutCtrl, UpdateUserCtrl } = require('../../controllers/user/UserCtrl');
const Protected = require('../../middlewares/Protected');

// cloudinary Storage
const storage = require('../../config/Cloudinary');
const multer = require('multer');

// initializing the Router
const UsersRouter = express.Router();

// instance of multer
const upload = multer({
    storage
})

// Routes

// 1. Register Route
UsersRouter.post("/register", RegisterCtrl);

// 2. Login Route
UsersRouter.post("/login", LoginCtrl)

// 4. Profile Page
UsersRouter.get("/profile", Protected,  ProfileCtrl);

// 5. profile picture upload
UsersRouter.put("/profile-photo-upload", Protected, upload.single("profile"),  ProfileImageCtrl);

// 6. Cover Image Upload
UsersRouter.put("/cover-photo-upload", Protected, upload.single("cover"), CoverImageCtrl);

// 7. Update User
UsersRouter.put("/update/:id", Protected, UpdateUserCtrl);

// 3. Fetch Single User
UsersRouter.get("/:id", GetSingleUserCtrl)

// 8. Logout
UsersRouter.get("/logout", LogoutCtrl);

// 9. Update Password
UsersRouter.put("/update-password/:id", Protected, UpdatePasswordCtrl);

// exporting the Router
module.exports = UsersRouter