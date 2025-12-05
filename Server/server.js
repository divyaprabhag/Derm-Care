// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const path = require('path');

// // Initialize app
// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // MongoDB connection
// mongoose.connect('mongodb://localhost:27017/dermcare', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch((error) => {
//   console.error('MongoDB connection error:', error);
// });

// // Define the order schema
// const orderSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   address: String,
//   contact: String,
//   products: Array, // Store product info
//   totalAmount: Number,
//   orderDate: { type: Date, default: Date.now },
// });

// const Order = mongoose.model('Order', orderSchema);

// // Define the user schema
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   phone: String,
//   loginDate: { type: Date, default: Date.now },
// });

// const User = mongoose.model('User', userSchema);

// // API to submit order
// app.post('/api/order', async (req, res) => {
//   const { name, email, address, contact, products, totalAmount } = req.body;

//   try {
//     const newOrder = new Order({
//       name,
//       email,
//       address,
//       contact,
//       products,
//       totalAmount
//     });

//     await newOrder.save();
//     res.status(200).json({ message: 'Your order has been confirmed. Thank you for choosing Derm Care!!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error placing the order', error });
//   }
// });

// // API to save user login data
// app.post('/api/login', async (req, res) => {
//   const { name, email, phone } = req.body;

//   if (!name || !email || !phone) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const newUser = new User({
//       name,
//       email,
//       phone
//     });

//     await newUser.save();
//     res.status(200).json({ message: 'User data saved successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error saving user data', error });
//   }
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });






// server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// connect
const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/dermcare';
mongoose.connect(MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB error:', err));

// Models
const Order = require('./models/order'); // you said you have this already
const User = require('./models/User');   // new model

// Legacy API: keep existing behavior but be idempotent
app.post('/api/login', async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) return res.status(400).json({ message: 'All fields are required' });

  try {
    let user = await User.findOne({ email });
    if (user) {
      user.loginDate = Date.now();
      user.phone = phone;
      user.name = name;
      await user.save();
      return res.status(200).json({ message: 'User updated (legacy login)' });
    }

    user = new User({ name, email, phone });
    await user.save();
    return res.status(200).json({ message: 'User data saved successfully (legacy login)' });
  } catch (error) {
    return res.status(500).json({ message: 'Error saving user data', error });
  }
});

// Use the proper order route that handles stock reduction
const orderRoutes = require('./routes/order');
app.use('/api/order', orderRoutes);



const productRoutes = require('./routes/product');
app.use('/api/products', productRoutes);


// Mount auth routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Mount chatbot routes
const chatbotRoutes = require('./routes/chatbot');
app.use('/api/chatbot', chatbotRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
