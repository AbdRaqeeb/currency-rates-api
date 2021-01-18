import ErrorResponse from "../utils/errorResponse.js";

export const errorHandler = (err, req, res, next) => {
    let error = {...err};

    error.message = err.message;

    // log to console for dev
    if (process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'production') {
        console.log(err);
    }

    if (err.response.status === 400) {
        let message = err.response.data.error;

        const regex = /symbols/gi;

        // replace symbols with currency
        message = message.replace(regex, 'Currency');

        error = new ErrorResponse(message, 400);
    }

    res.status(error.statusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
};