const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit');
const userRouter = require('./router/userRouter')
const otpRouter = require('./router/otpRouter')
const ratingsRouter = require('./router/ratingsRouter')
const bookmarkRouter = require('./router/bookmarkRouter')
const addressRouter = require('./router/addressRouter')
const attractionRouter = require("./router/attractionRouter")
const bathroomRouter = require('./router/bathroomRouter')
const bathroomFacilityRouter = require('./router/bathroomFacilityRouter')

const villaRouter = require('./router/villaRouter')
const globalError = require('./controller/errorController');
const bedroomRouter = require('./router/bedroomRouter')
const bedroomFacilityRouter = require('./router/bedroomFacility')

const AppError = require('./utils/appError');
const app = express();
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '10kb' }));
app.use(cors({
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

app.use(function(req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Origin'
    )
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Replace with your client's origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next()
  })

app.set('trust proxy', 1);
// app.use((req, res, next) => {
//     if (req.secure) {
//         next();
//     } else {
//         res.redirect('https://' + req.headers.host + req.url);
//     }
// });
app.use(limiter);
app.use('/api/v1/otp', otpRouter)
app.use('/api/v1/rating', ratingsRouter)
app.use('/api/v1/bookmark', bookmarkRouter)
app.use('/api/v1/user', userRouter)
app.use('/api/v1/villa', villaRouter)
app.use('/api/v1/bedroom', bedroomRouter)
app.use('/api/v1/bedroomFasility', bedroomFacilityRouter)
app.use('/api/v1/address', addressRouter)
app.use('/api/v1/attraction', attractionRouter)
app.use('/api/v1/bathroom', bathroomRouter)
app.use('/api/v1/bathroomFacility', bathroomFacilityRouter)








app.get('/favicon.ico', (req, res) => res.status(204));
app.all('*', (req, res, next) => {
    //handling unhandled route
    next(new AppError(`Cant find ${req.originalUrl} on this server`, 404));
});
app.use(globalError);

module.exports = app