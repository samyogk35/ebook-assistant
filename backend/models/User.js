// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { selectLine } = require('@uiw/react-md-editor');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6 ,
            selectLine: false, 
        }, 
        avatar: {
            type: String,
            default: "", 
        },
        isPro: {
            type: Boolean,
            default: false,
        },  
    },
    { timestamps: true }
);

//Password hashing middleware
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

//Password comparison method
UserSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);