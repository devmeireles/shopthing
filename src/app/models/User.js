const mongoose = require('../database');
const bcryptjs = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    description: {
        type: String,
        required: false,
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    passwordResetToken: {
        type: String,
        select: false
    },
    passwordResetExpires: {
        type: Date,
        select: false
    },
    profilePhoto: {
        type: String,
        required: false,
    },
    coverPhoto: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

UserSchema.pre('save', async function(next){
    const hash = await bcryptjs.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User