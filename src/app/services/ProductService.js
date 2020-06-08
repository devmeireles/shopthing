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
    throw Error('Error while Paginating products');
  }
};

exports.getFakeProduct = async () => {
  try {
    const product = {
      title: faker.commerce.productName(),
      description: faker.lorem.text(),
      price: faker.commerce.price(),
      department: faker.commerce.department(),
      featuredImage: faker.image.business(),
      ownerID: await UserService.getRandomUser(),
    };

    return await Product.create(product);
  } catch (e) {
    throw Error(e);
  }
};
