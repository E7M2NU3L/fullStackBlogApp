// App error handler function
const AppErr = (message, statusCode) => {
    // creating an Error Instance
    let error = new Error(message);

    // setting up the params for thecreated error
    error.stack = error.stack;
    error.statusCode = statusCode ? statusCode : 500;

    // returning the error
    return error
}

// exporting the error handler
module.exports = AppErr;