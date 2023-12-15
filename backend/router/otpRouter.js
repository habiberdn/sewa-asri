const express = require('express');
const otpController = require('../controller/authController');
const router = express.Router();

router.post('/send-otp', otpController.sendOtp);
module.exports = router;