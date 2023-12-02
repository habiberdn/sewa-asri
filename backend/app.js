const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit');
const userRouter = require('./router/userRouter')
const globalError = require('./controller/errorController');
const AppError = require('./utils/appError');
const app = express()
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10kb' }));
app.use(cors())
app.use(cookieParser());
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many request from this IP,please try again in an hour!',
});
app.use('/api', limiter);

app.use('/api/v1/user', userRouter)

app.all('*', (req, res, next) => {
    //handling unhandled route
    next(new AppError(`Cant fint ${req.originalUrl} on this server`, 404));
});
app.use(globalError);

module.exports = app