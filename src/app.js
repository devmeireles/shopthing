const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

const product = require('./app/routes/product');
const auth = require('./app/routes/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/auth', auth);
app.use('/product', product);

app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}!`))

module.exports = {
    app
}