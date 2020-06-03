const express = require('express');
const routes = express.Router();
const authMiddleware = require('../middlewares/auth');
const ProductController = require('../controllers/ProductController');

routes.use(authMiddleware);

routes.get('/', ProductController.index);

module.exports = routes;