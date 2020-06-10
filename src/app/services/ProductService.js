const faker = require('faker');
const Product = require('../models/Product');
const UserService = require('./UserService');

exports.getProducts = async (query, skip, limit) => {
  try {
    return await Product.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);
  } catch (e) {
    throw Error(e);
  }
};

exports.create = async (product) => {
  try {
    return await Product.create(product);
  } catch (e) {
    throw Error(e);
  }
};

exports.getByID = async (productID) => {
  try {
    return await Product.findById(productID);
  } catch (e) {
    throw Error(e);
  }
};

exports.getBySlug = async (slug) => {
  try {
    return await Product.find({ slug });
  } catch (e) {
    throw Error(e);
  }
};

exports.delete = async (productID) => {
  try {
    return await Product.findByIdAndRemove({ _id: productID });
  } catch (e) {
    throw Error(e);
  }
};

exports.update = async (productID, data) => {
  try {
    return await Product.findByIdAndUpdate(
      { _id: productID },
      data,
      { new: true },
    );
  } catch (e) {
    throw Error(e);
  }
};

exports.getFakeProduct = async () => {
  try {
    const ownerID = await UserService.getRandomUser();

    const product = {
      title: faker.commerce.productName(),
      description: faker.lorem.text(),
      price: faker.commerce.price(),
      department: faker.commerce.department(),
      featuredImage: faker.image.business(),
      ownerID,
      photos: [],
    };

    return await Product.create(product);
  } catch (e) {
    throw Error(e);
  }
};
