// Error Handler Utility Middleware
const globalErrHandler = (err, req, res, next) => {
    // status
    const status = err.status ? err.status : "failed";

    // message
    const message = err.message || "";

    // stack of the error occurrance
    const stack = err.stack || "";

    // statusCode of the error
    const statusCode = err.statusCode ? err.statusCode : 500;

    // sending the response
    res.status(statusCode).json({
        status,
        message,
        stack,
    })
}

// exporting the global Error Handler
module.exports = globalErrHandler;