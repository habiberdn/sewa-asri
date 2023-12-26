const express = require('express');
const otpController = require('../controller/authController');
const router = express.Router();

router.post('/send-otp', otpController.sendOtp);
router.get('/:otp', otpController.getOneOtp)
router.get('/', otpController.getAllOtp)
module.exports = router;