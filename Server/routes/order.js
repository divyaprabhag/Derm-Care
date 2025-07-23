const express = require('express');
const Order = require('../models/order');

const router = express.Router();

// Place order
router.post('/', async (req, res) => {
  const { name, email, address, contact, products, totalAmount } = req.body;

  const order = new Order({
    name,
    email,
    address,
    contact,
    products,
    totalAmount,
  });

  await order.save();
  res.status(200).json({ message: 'Order placed successfully' });
});

module.exports = router;
