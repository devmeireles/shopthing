const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const dotenv = require('dotenv');

dotenv.config();

mongoose.plugin(slug);
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;
