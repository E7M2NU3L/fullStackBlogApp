// importing the required modules

// safety configuration
require('dotenv').config();

// express App for server creation and handling
const express = require('express');

// cors
const cors = require('cors');

// session module
const session = require('express-session');

// body parser
const bodyparser = require('body-parser');

// connecting session to Db
const MongoStore = require('connect-mongo');

// Database connector utility 
const DBConnect = require('./config/DBConnect');

// Router modules
const UsersRouter = require('./routes/user/UsersRouter');
const PostsRouter = require('./routes/post/PostsRouter');
const CommentRouter = require('./routes/comment/CommentRouter');

// Global Error Handler Middleware
const globalErrHandler = require('./middlewares/globalErrHandler');

// creating the instance of the express app
const app = express();

// connecting to the database
DBConnect();

// express middleware declaration

// to parse json data
app.use(express.json());

// cors usage
app.use(cors());

// session creation
app.use(session({
    secret: process.env.SessionKey,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        mongoUrl: process.env.DB_URL,
        ttl: 3*24*60*60
    })
}))

// to parse form data
app.use(express.urlencoded({
    extended: true
}));

// routes creation

// 1. User Routes
app.use("/api/v1/users", UsersRouter);

// 2. Comment Routes
app.use("/api/v1/comments", CommentRouter);

// 3. Post Routes
app.use("/api/v1/posts", PostsRouter);

// global Error Handler
app.use(globalErrHandler);

// starting the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`app has been started and running on the port ${port}`);
})