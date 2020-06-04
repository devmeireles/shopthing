const ProductService = require('../services/ProductService');

exports.index = async function (req, res) {
  const page = req.params.page ? req.params.page : 1;
  const limit = req.params.limit ? req.params.limit : 10;
  try {
    const users = await ProductService.getProducts({}, page, limit);
    return res.status(200).json({ status: 200, data: users, message: 'Succesfully Users Retrieved' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};

exports.faker = async function (req, res) {
  try {
    const product = await ProductService.getFakeProduct();
    return res.status(200).json({ status: 200, data: product, message: 'Succesfully created' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
};
