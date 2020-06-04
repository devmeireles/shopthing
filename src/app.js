const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const dotenv = require('dotenv');

dotenv.config();

const product = require('./app/routes/product');
const auth = require('./app/routes/auth');
const store = require('./app/routes/store');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/auth', auth);
app.use('/product', product);
app.use('/store', store);

app.listen(process.env.PORT);

module.exports = {
  app,
};
