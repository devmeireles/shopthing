const express = require('express');

const routes = express.Router();
const authMiddleware = require('../middlewares/auth');
const ProductController = require('../controllers/ProductController');

routes.use(authMiddleware);

routes.get('/faker', ProductController.faker);

routes.get('/', ProductController.index);
routes.get('/:productID', ProductController.getByID);
routes.get('/slug/:slug', ProductController.getBySlug);
routes.post('/', ProductController.create);
routes.put('/:productID', ProductController.update);
routes.post('/:productID', ProductController.changeStatus);
routes.delete('/:productID', ProductController.delete);

module.exports = routes;
