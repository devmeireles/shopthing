const Product = require('../models/Product');
const UserService = require('./UserService');
const faker = require('faker');

exports.getProducts = async function (query, page, limit) {
    try {
        return await Product.find(query)
    } catch (e) {
        throw Error('Error while Paginating products')
    }
}

exports.getFakeProduct = async function () {
    try {
        const product = {
            title: faker.commerce.productName(),
            description: faker.lorem.text(),
            price: faker.commerce.price(),
            department: faker.commerce.department(),
            featuredImage: faker.image.business(),
            ownerID: await UserService.getRandomUser(),
        }

        return await Product.create(product);
    } catch (e) {
        throw Error(e)
    }
}