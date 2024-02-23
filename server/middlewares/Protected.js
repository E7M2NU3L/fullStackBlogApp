// App Error Handling
const AppErr = require("../utils/AppErr")

const Protected = (req, res, next) => {
    // checking if the user is logged in
    if(req.session.userAuth){
        next()
    }
    else{
        return next(AppErr("Not Authorized, Log in Again"));
    }
}

// export the middleware
module.exports = Protected;