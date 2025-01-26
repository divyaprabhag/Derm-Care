const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Initialize app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/dermcare', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Define the order schema
const orderSchema = new mongoose.Schema({
  name: String,
  email: String,
  address: String,
  contact: String,
  products: Array, // Store product info
  totalAmount: Number,
  orderDate: { type: Date, default: Date.now },
});

const Order = mongoose.model('Order', orderSchema);

// Define the user schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  loginDate: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

// API to submit order
app.post('/api/order', async (req, res) => {
  const { name, email, address, contact, products, totalAmount } = req.body;

  try {
    const newOrder = new Order({
      name,
      email,
      address,
      contact,
      products,
      totalAmount
    });

    await newOrder.save();
    res.status(200).json({ message: 'Your order has been confirmed. Thank you for choosing Derm Care!!' });
  } catch (error) {
    res.status(500).json({ message: 'Error placing the order', error });
  }
});

// API to save user login data
app.post('/api/login', async (req, res) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newUser = new User({
      name,
      email,
      phone
    });

    await newUser.save();
    res.status(200).json({ message: 'User data saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving user data', error });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});