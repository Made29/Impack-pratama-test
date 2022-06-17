const errorHandler = (error, req, res) => {
    let status = 500;
    let message = "Internal Server Error";
    switch (error.name) {
        case "SequelizeValidationError":
        case "SequelizeUniqueConstraintError":
            status = 400;
            message = error.message;
            break;

        case "PRODUCT_NOT_FOUND":
            status = 404;
            message = error.message;
            break;

        default:
            break;
    }
    res.status(status).json({ message });
};

module.exports = errorHandler;
