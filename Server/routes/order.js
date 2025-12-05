// const express = require('express');
// const router = express.Router();
// const Order = require('../models/order');
// const Product = require('../models/Product');

// // CREATE order and update stock
// router.post('/', async (req, res) => {
//   try {
//     const { name, email, address, contact, products, totalAmount } = req.body;

//     // Save order
//     const newOrder = new Order({
//       name,
//       email,
//       address,
//       contact,
//       products: products.map(p => ({
//         productId: p._id,  // link to product
//         name: p.name,
//         price: p.price,
//         itemsCount: p.itemsCount,
//         quantity: p.quantity,
//         unit: p.unit
//       })),
//       totalAmount,
//     });

//     await newOrder.save();

//     // Update stock for each product
//     for (const p of products) {
//       await Product.findByIdAndUpdate(
//         p._id,
//         { $inc: { stock: -p.itemsCount } }, // reduce stock
//         { new: true }
//       );
//     }

//     res.status(201).json({ message: 'Order placed successfully', order: newOrder });
//   } catch (err) {
//     console.error('Order creation failed:', err);
//     res.status(500).json({ message: 'Order creation failed', error: err.message });
//   }
// });

// module.exports = router;








// routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const Order = require("../models/order");
const Product = require("../models/Product");

// CREATE order and update stock
router.post("/", async (req, res) => {
  try {
    const { name, email, address, contact, products, totalAmount } = req.body;

    // Validate stock before placing order
    for (const p of products) {
      const product = await Product.findById(p._id);

      if (!product) {
        return res.status(404).json({ message: `Product not found: ${p.name}` });
      }

      if (product.stock < (p.itemsCount || 1)) {
        return res
          .status(400)
          .json({ message: `Not enough stock for ${product.name}` });
      }
    }

    // Save order
    const newOrder = new Order({
      name,
      email,
      address,
      contact,
      products: products.map((p) => ({
        productId: p._id,
        name: p.name,
        price: p.price,
        itemsCount: p.itemsCount || 1,
        quantity: p.quantity,
        unit: p.unit,
      })),
      totalAmount,
    });

    await newOrder.save();

    // Update stock after order is saved
    for (const p of products) {
      await Product.findByIdAndUpdate(
        p._id,
        { $inc: { stock: -(p.itemsCount || 1) } }, // reduce safely
        { new: true }
      );
    }

    res
      .status(201)
      .json({ message: "Order placed successfully", order: newOrder });
  } catch (err) {
    console.error("Order creation failed:", err);
    res
      .status(500)
      .json({ message: "Order creation failed", error: err.message });
  }
});

module.exports = router;
