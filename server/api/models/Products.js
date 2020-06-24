const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema(
  {
    name: String,
    key: Number,
    sku: Number,
    color: String,
    price: Number,
    released: Date,
    sale: Number,
    fileName: String,
    src: String,
  },
  { collection: 'Products' }
);
module.exports = mongoose.model('Products', ProductsSchema);
