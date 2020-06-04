const Product = require('../models/Product');

exports.getStores = async function () {
  try {
    return await Product.find();
  } catch (e) {
    throw Error('Error while Paginating products');
  }
};

exports.getUserStore = async function (ownerID) {
  try {
    return await Product.find({ ownerID })
      .populate('user')
      .exec();
  } catch (e) {
    throw Error(e);
  }
};
