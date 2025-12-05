  //models/Product.js
  const mongoose = require('mongoose');

  const productSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      description: { type: String },
      image: { type: String }, // store URL or base64
      price: { type: Number, required: true },
      category: { type: String, required: true }, // e.g. Serum, Creams, Sunscreen
      quantity: { type: Number, default: 1 }, // e.g. 200 (per item quantity)
      unit: { type: String, default: 'pcs' }, // e.g. ml, g, pcs
      stock: { type: Number, default: 0 }, // available items
    },
    { timestamps: true }
  );

  module.exports = mongoose.model('Product', productSchema);
