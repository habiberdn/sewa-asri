const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit');
const userRouter = require('./router/userRouter')
const otpRouter = require('./router/otpRouter')
const ratingsRouter = require('./router/ratingsRouter')
const bookmarkRouter = require('./router/bookmarkRouter')
const villaRouter = require('./router/villaRouter')
const globalError = require('./controller/errorController');
const AppError = require('./utils/appError');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10kb' }));
app.use(cors( {
    origin: ['http://localhost:5173'],
    credentials: true,            //access-control-allow-credentials:true
    methods: ["POST", "GET"],
  }))
app.use(cookieParser());
const limiter = rateLimit({
    max: 100,
    windowMs: 60 * 60 * 1000,
    message: 'Too many request from this IP,please try again in an hour!',
    
});

app.set('trust proxy', 1);
// app.use((req, res, next) => {
//     if (req.secure) {
//         next();
//     } else {
//         res.redirect('https://' + req.headers.host + req.url);
//     }
// });
app.use(limiter);
app.use('/api/v1/otp',otpRouter)
app.use('/api/v1/rating', ratingsRouter)
app.use('/api/v1/bookmark', bookmarkRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/villa', villaRouter)


app.get('/favicon.ico', (req, res) => res.status(204));
app.all('*', (req, res, next) => {
    //handling unhandled route
    next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});
app.use(globalError);

module.exports = app