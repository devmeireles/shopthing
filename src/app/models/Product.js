const mongoose = require('../database');

const ProductPhotosSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    slug: 'title',
    slug_padding_size: 4,
    permanent: false,
  },
  description: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastUpdate: {
    type: Date,
    default: Date.now,
  },
  availability: {
    type: Boolean,
    required: true,
    default: true,
  },
  status: {
    type: Number,
    required: false,
    default: 0,
  },
  ownerID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  photos: [ProductPhotosSchema],
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
