const Product = require('../models/Product');

exports.getStores = async () => {
  try {
    return await Product.find();
  } catch (e) {
    throw Error('Error while Paginating products');
  }
};

exports.getUserStore = async (ownerID) => {
  try {
    return await Product.find({ ownerID })
      .sort([['createdAt', -1]])
      .populate('user')
      .exec();
  } catch (e) {
    throw Error(e);
  }
};
