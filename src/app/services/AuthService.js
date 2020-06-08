const User = require('../models/User');

exports.checkUserMailExists = async function (email) {
  try {
    return await User.findOne({ email });
  } catch (e) {
    return e.message;
  }
};

exports.checkUserNameExists = async (username) => {
  try {
    return await User.findOne({ username });
  } catch (e) {
    return e.message;
  }
};

exports.checkUserByPassword = async (email) => {
  try {
    return await User.findOne({ email }).select('+password');
  } catch (e) {
    return e.message;
  }
};

exports.createUser = async (data) => {
  try {
    return await User.create(data);
  } catch (e) {
    return e.message;
  }
};
