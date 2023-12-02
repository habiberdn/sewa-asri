const mongoose = require('mongoose')
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: [true, 'A user must have a name'],
    },
    email: {
        type: String,
        unique: [true],
        required: [true, 'A user must have a email'],
        lowercase: true,
        validate: [validator.isEmail, 'please provide a valid email'],
    },
    password: {
        type: String,
        minLength: [8, 'Password must contain minimum 8 character'],
        required: [true, 'A user must have a password'],
        select: true,
    },
    passwordConfirm: {
        type: String,
        require: [true, 'Please confirm your password'],
        // only work on create and save
        validate: {
            validator: function (el) {
                return el === this.password;
            },
            message: 'Password are not the same',
        },
    },
    isVerify: { type: Boolean, default: false },
    photo: { type: String, default: 'default.jpg' },
    role: {
        type: String,
        enum: ['user','manager'],
        default: 'user',
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,

})

//only run if password is modified
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next(); //hash = encrypt | bcrypt = hashing algorithm
    //hash password with cost 12
    this.password = await bcrypt.hash(this.password, 12); //12 = cost parameter, it best to use 12
    //, the higher this cost,the more

    //delete pwConfirm Field
    this.passwordConfirm = undefined;
    next();
});

userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    //instance method
    return await bcrypt.compare(candidatePassword, userPassword);
};

const user = mongoose.model('User', userSchema);

module.exports = user;