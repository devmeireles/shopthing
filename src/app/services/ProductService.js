const Product = require('../models/Product')

exports.getProducts = async function (query, page, limit) {
    try {
        var products = await Product.find(query)
        return products;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating products')
    }
}

exports.getTest = async function (query, page, limit) {
    try {
        var products = await Product.find(query)
        return products;
    } catch (e) {
        // Log Errors
        throw Error('Error while Paginating products')
    }
}