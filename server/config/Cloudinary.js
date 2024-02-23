// importing the modules
require('dotenv').config();
const cloudinary = require('cloudinary').v2;
const {CloudinaryStorage} =  require('multer-storage-cloudinary');

// configure cloudinary
cloudinary.config({
    cloud_name: process.env.cloudName,
    api_key: process.env.cloudAPIKey,
    api_secret: process.env.cloudSecret,
});

// instance of the cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg', 'jpeg', 'png'],
    params: {
        folder: 'blog-app-v1',
        transformation: [{
            width: 500,
            height: 500,
            crop: "limit"
        }]
    }
})

// exporting the cloudinary
module.exports = storage;