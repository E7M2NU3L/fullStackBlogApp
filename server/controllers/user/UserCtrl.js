// importing the required modules
const express = require('express');
const bcrypt = require('bcrypt');

// User Model
const UserModel = require('../../models/user/User');

// App Error Handler
const AppErr = require('../../utils/AppErr');

// Route Controllers

// 1. Register Controller
const RegisterCtrl = async(req, res, next) => {
    try {
        // 1. Getting the data from the form body
        const {email, fullname, password} = req.body;

        // 2. check if the user already exists
        const UserFound = await UserModel.findOne({
            email
        })

        // Handle if no fields in the form are filled
        if(!email || !fullname || !password) {
            return next(AppErr("User credentials not filled Properly"))
        }

        // 3. Handle if the User exists
        if(UserFound){
            return next(AppErr("The User already exists, try Logging in"))
        }

        // 4. Hash the Password
        const salt = await bcrypt.genSalt(10);
        const HashedPassword = await bcrypt.hash(password, salt);

        // 5. Create a New User Credentials and store it in the Database
        const UserCreated = await UserModel.create({
            fullname,
            email,
            password: HashedPassword,
        })

        // return the created User Credentials data
        console.log("Registration was successfull");
        return res.json({
            status: true,
            message: "Registration was successfull",
            UserCreated,
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error));
    }
}

// 2. Login Controller
const LoginCtrl = async(req, res, next) => {
    try {
        // 1. Getting the passed data from the body
        const {email, password} = req.body;

        // Handle if all the field is not Filled
        if(!email || !password) {
            return next(AppErr("the user credentials is not filled properly"))
        }

        // 2. Checking if the User's email is already present in the database
        const UserFound = await UserModel.findOne({
            email
        });

        // 3. Handle User not Found
        if(!UserFound) {
            return next(AppErr("User Not Found, Try Logging in"))
        }

        // 4. Check if the Password is correct
        const isPasswordValid = await bcrypt.compare(password, UserFound?.password);

        // 5. Handle if the Password is not Correct
        if(!isPasswordValid){
            return next(AppErr("User Credentials are Invalid"));
        }

        // Handle the session
        req.session.userAuth = UserFound._id;
        
        // 6. return the success message
        console.log("Login was Successful");
        console.log(req.session);
        res.json({
            status: true,
            message: "Login was successfull",
            UserFound,
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error));
    }
}

// 3. Update Passord
const UpdateUserCtrl = async(req, res, next) => {
    try {
        // get the data from body 
        const {fullname, email, password} = req.body;

        // check if the email is already taken
        if(email){
            const emailTaken = await UserModel.findOne({
                email
            })
            if(emailTaken){
                return next(AppErr("Email is already in Use"))
            }
        }

        // find the user to get update
        const UserUpdated = await UserModel.findByIdAndUpdate(req.params.id, {
            fullname,
            email,
        },{
            new: true
        })

        // return the updated user
        console.log("Regsiter Route");
        res.json({
            status: true,
            message: "Password Update Route",
            UserUpdated
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error.message))
    }
}

// 4. Get Single User
const GetSingleUserCtrl = async(req, res, next) => {
    try {
        // get the params id
        const id = req.params.id;

        // find the user details in the database
        const UserFound = await UserModel.findById(id);

        // Handle User Not Found
        if(!UserFound){
            return next(AppErr("The User Id not Found"));
        }

        // return the User Detail
        console.log("User Details has been Fetched");
        res.json({
            status: true,
            message: "User Details has been Fetched",
            UserFound
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error))
    }
}

// 5. Profile Section
const ProfileCtrl = async(req, res, next) => {
    try {
        // get the login user
        const userID = await req.session.userAuth;

        // find the user in the User Model
        const user = await UserModel.findById(userID).populate('posts').populate("comments");

        console.log("Profile Page");
        res.json({
            status: true,
            message: "Profile Route Fetched Successfully",
            user,
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error))
    }
}

// Update Password Control
const UpdatePasswordCtrl = async(req, res, next) => {
    try {
        // getting the data from the body
        const {password} = req.body;

        // get the id from the params
        const UserID = req.params.id;

        // handle if the password filed ot filled
        if(!password){
            return next(AppErr("fill the password field to update"));
        }

        // hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //  update the changed password
        const UserPassUpdated = await UserModel.findByIdAndUpdate(UserID, {
            password: hashedPassword,
        },{
            new: true,
        });

        // return success message
        console.log("the password has been updated successfully");
        return res.json({
            status: true,
            message: "the password has been updated successfully",
            UserPassUpdated,
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error.message));
    }
}

// 6. Logout
const LogoutCtrl = async(req, res) => {
    try {
        console.log("Regsiter Route");
        res.json({
            status: true,
            message: "Logout Route"
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error))
    }
}

// 7. Profile Image Upload Route
const ProfileImageCtrl = async(req, res, next) => {
    try {
        // get the file
        const file = req.file;

        // get the file path
        const filepath = req.file.path;

        // get the user id
        const UserID = req.session.userAuth;

        // check if the user is in the database
        const userFound = await UserModel.findById(UserID);

        // handle if the user not found
        if(!userFound){
            return next(AppErr("user not Found"));
        }

        // update the profile image in the database
        const profileImageUpdated = await UserModel.findByIdAndUpdate(UserID, {
            profileImage: filepath,
        },{
            new: true,
        })
        console.log("Profile image has been successfully uploaded");
        res.json({
            status: true,
            message: "Profile Image has been successfully Uploaded",
            profileImageUpdated,
        })
    } catch (error) {
        console.log(error);
        return next(AppErr(error.message));
    }
}

// 8. Cover Image Upload
const CoverImageCtrl = async(req, res, next) => {
    try {
        // get the file
        const file = req.file;

        // get the file path
        const filepath = req.file.path;

        // get the user id
        const UserID = req.session.userAuth;

        // check if the user is present in the database
        const userFound = await UserModel.findById(UserID);

        // handle user not Found Error
        if(!userFound){
            return next(AppErr("User not Found"));
        }

        // update the cover image data
        const coverImageUpdated = await UserModel.findByIdAndUpdate(UserID, {
            coverImage: filepath,
        },{
            new: true,
        });

        // return the success message
        console.log("Cover image has been uploaded successfully");
        return res.json({
            status: true,
            message: "Cover Image Upload Route",
            coverImageUpdated,
        });
    } catch (error) {
        console.log(error);
        return next(AppErr(error.message));
    }
}

// exporting the controllers
module.exports = {
    RegisterCtrl,
    LoginCtrl,
    UpdatePasswordCtrl,
    LogoutCtrl,
    ProfileCtrl,
    ProfileImageCtrl,
    CoverImageCtrl,
    UpdateUserCtrl,
    GetSingleUserCtrl
}