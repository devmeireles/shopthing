const User = require('../models/User');

exports.checkUserMailExists = async function (email) {
    try {
        return await User.findOne({ email })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.checkUserNameExists = async function (username) {
    try {
        return await User.findOne({ username })
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.checkUserByPassword = async function (email) {
    try {
        return await User.findOne({ email }).select('+password');
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

exports.createUser = async function (data) {
    try {
        return await User.create(data);
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}