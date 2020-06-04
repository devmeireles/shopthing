const express = require('express');
const routes = express.Router();
const authMiddleware = require('../middlewares/auth');
const StoreController = require('../controllers/StoreController');

routes.use(authMiddleware);

routes.get('/', StoreController.index);
routes.get('/test', StoreController.getUserStore);

module.exports = routes;