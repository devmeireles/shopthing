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

exports.create = async (req, res) => {
  try {
    const { data } = await req.body;
    data.ownerID = await req.user;

    const product = await ProductService.create(data);

    return res.status(200).json(
      {
        success: true,
        product,
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

exports.getByID = async (req, res) => {
  try {
    const { productID } = req.params;

    const data = await ProductService.getByID(productID);
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

exports.getBySlug = async (req, res) => {
  try {
    const { slug } = req.params;

    const data = await ProductService.getBySlug(slug);
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

exports.delete = async (req, res) => {
  try {
    const { productID } = req.params;

    if (!await ProductService.checkPermission(req.user, productID)) {
      return res.status(400).send({ error: 'User without permission' });
    }

    await ProductService.delete(productID);
    return res.status(200).json(
      {
        success: true,
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

exports.update = async (req, res) => {
  try {
    const { data } = await req.body;
    const { productID } = await req.params;

    if (!await ProductService.checkPermission(req.user, productID)) {
      return res.status(400).send({ error: 'User without permission' });
    }

    const product = await ProductService.update(productID, data);

    return res.status(200).json(
      {
        success: true,
        product,
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

exports.changeStatus = async (req, res) => {
  try {
    const { data } = await req.body;
    const { productID } = await req.params;

    if (!await ProductService.checkPermission(req.user, productID)) {
      return res.status(400).send({ error: 'User without permission' });
    }

    const product = await ProductService.update(productID, data);

    return res.status(200).json(
      {
        success: true,
        product,
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
