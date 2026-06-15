
// Common function for all controller catch statements
const controllerErrorCatcher = (res, error) => {
  const statusCode = error.statusCode || 500;
  const message = statusCode === 500 ? "Internal Server Error" : error.message;

  return res.status(statusCode).json({
    success: false,
    message,
  })
};

// Throws formatted errors for the controller to catch
const serviceErrorThrower = (statusCode, message) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  throw error;
};

const globalHelper = {
  controllerErrorCatcher,
  serviceErrorThrower,
};

module.exports = globalHelper;