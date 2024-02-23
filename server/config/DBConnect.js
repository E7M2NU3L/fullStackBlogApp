// importing the required modules
const mongoose = require('mongoose');
require('dotenv').config();

// database connector function
const DBConnect = () => {
    // url for mongoDB database connection
    const url = "mongodb+srv://EmmanuelA:49QCmHce35QaNdP@sensorcluster.eugopwl.mongodb.net/BLOG?retryWrites=true&w=majority" || process.env.DB_URL;

    // connecting to the database
    mongoose.connect(url).then(() => {
        console.log("the database has been connected successfully")
    }).catch((err) => {
        console.log(err);
    })
}

// exporting the module
module.exports = DBConnect;