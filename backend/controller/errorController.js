const AppError = require('../utils/appError');

const handleDuplicateFieldDb = (err) => {
  const field = Object.keys(err.keyValue);
  const value = Object.values(err.keyValue);
  const message = `Duplicate ${field}: ${value}`;
  return new AppError(message,400)
};

const handleCastErrorDb = (err) => {
  const message = `Invalid ${err.path}: ${err.value}`; //path = field yg error
  return new AppError(message, 400);
};

const handleValidationErrorDb = (err)=>{
  const errors = Object.values(err.errors).map(el =>el.message) //to extract the message we have to use value.message
  const message = `Invalid Input Data ${errors.join('. ')}`
  return new AppError(message,400)
}
const handleTokenExpError = ()=> new AppError('Your token has expired! Please log in again',401)

const handleJWTError = ()=> new AppError('Invalid Token. Please log in again',401) //unauthorized

const sendErrorDev = (err, req, res) => {
  // A) API
  if (req.originalUrl.startsWith('/api')) {
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack
    });
  }

  // B) RENDERED WEBSITE
  console.error('ERROR 💥', err);
  return res.status(err.statusCode).render('error', {
    title: 'Something went wrong!',
    msg: err.message
  });
};

const sendErrorProd = (err, req, res) => {
  // Operational, trusted error: send message to client
  
  if (err.isOperasional) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });

    // Programming or other unknown error: don't leak error details
  } else {
    // 1) Log error
    console.error('ERROR 💥', err);

    // 2) Send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!'
    });
  }
};

module.exports = (err, req, res, next) => {
  // console.log(err.stack)
  // show where the error hsppen
  //global error handling middleware
  console.log(err)
  err.statusCode = err.statusCode || 500; //internal server error
  err.status = err.status || 'error';
  // console.log(err)
  if (process.env.NODE_ENV === 'development') {
    let error = Object.create(err);

    if (error.code === 11000) error = handleDuplicateFieldDb(error);

    sendErrorDev(err,req, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = Object.create(err);
   
    if (error.name === 'CastError') error = handleCastErrorDb(error);
    if (error.code === 11000) error = handleDuplicateFieldDb(error);
    if (error.name === 'ValidationError') error = handleValidationErrorDb(error);
    if (error.name === "JsonWebTokenError") error =handleJWTError()
    if(error.name ==="TokenExpiredError") error = handleTokenExpError()
    console.log(error)
    sendErrorProd(error,req, res);
  }
   
  
};
