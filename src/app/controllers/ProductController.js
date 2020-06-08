const ProductService = require('../services/ProductService');

exports.index = async (req, res) => {
  const page = req.body.page ? parseInt(req.body.page, 10) : 1;
  const limit = req.body.limit ? parseInt(req.body.limit, 10) : 10;
  const skip = (page * limit) - limit;

  try {
    const data = await ProductService.getProducts({}, skip, limit);
    return res.status(200).json(
      {
        success: true,
        data,
      },
    );
  } catch (e) {
    return res.status(400).json(
      {
        success: false,
        message: e.message,
      },
    );
  }
};

exports.faker = async (req, res) => {
  try {
    const data = await ProductService.getFakeProduct();
    return res.status(200).json(
      {
        success: true,
        data,
      },
    );
  } catch (e) {
    return res.status(400).json(
      {
        success: false,
        message: e.message,
      },
    );
  }
};
