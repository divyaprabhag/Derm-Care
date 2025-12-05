// const express = require('express');
// const router = express.Router();
// const Product = require('../models/Product');
// const authMiddleware = require('../middleware/authMiddleware');

// // get all products
// router.get('/', async (req, res) => {
//   const products = await Product.find();
//   res.json(products);
// });

// // add product (admin only)
// router.post('/', authMiddleware, async (req, res) => {
//   if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
//   const { name, description, image, price, category, quantity } = req.body;
//   const product = new Product({ name, description, image, price, category, quantity });
//   await product.save();
//   res.json(product);
// });

// module.exports = router;












// const express = require('express');
// const router = express.Router();
// const Product = require('../models/Product');
// const authMiddleware = require('../middleware/authMiddleware');

// // GET all products
// router.get('/', async (req, res) => {
//   try {
//     const products = await Product.find().sort({ createdAt: -1 });
//     res.json(products);
//   } catch (e) {
//     res.status(500).json({ message: 'Failed to fetch products' });
//   }
// });

// // GET single product
// router.get('/:id', async (req, res) => {
//   try {
//     const p = await Product.findById(req.params.id);
//     if (!p) return res.status(404).json({ message: 'Product not found' });
//     res.json(p);
//   } catch (e) {
//     res.status(400).json({ message: 'Invalid product id' });
//   }
// });

// // CREATE product (admin only)
// router.post('/', authMiddleware, async (req, res) => {
//   if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
//   try {
//     const { name, description, image, price, category, quantity } = req.body;
//     const product = new Product({
//       name,
//       description,
//       image,
//       price: Number(price || 0),
//       category,
//       quantity: Number(quantity || 1),
//     });
//     await product.save();
//     res.status(201).json(product);
//   } catch (e) {
//     res.status(400).json({ message: 'Invalid product payload', error: e.message });
//   }
// });

// // UPDATE product (admin only)
// router.put('/:id', authMiddleware, async (req, res) => {
//   if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
//   try {
//     const update = { ...req.body };
//     if (update.price != null) update.price = Number(update.price);
//     if (update.quantity != null) update.quantity = Number(update.quantity);
//     const p = await Product.findByIdAndUpdate(req.params.id, update, { new: true });
//     if (!p) return res.status(404).json({ message: 'Product not found' });
//     res.json(p);
//   } catch (e) {
//     res.status(400).json({ message: 'Update failed', error: e.message });
//   }
// });

// // DELETE product (admin only)
// router.delete('/:id', authMiddleware, async (req, res) => {
//   if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
//   try {
//     const p = await Product.findByIdAndDelete(req.params.id);
//     if (!p) return res.status(404).json({ message: 'Product not found' });
//     res.json({ message: 'Deleted', id: req.params.id });
//   } catch (e) {
//     res.status(400).json({ message: 'Delete failed', error: e.message });
//   }
// });

// module.exports = router;



















// //routes/product.js
// const express = require('express');
// const router = express.Router();
// const Product = require('../models/Product');
// const authMiddleware = require('../middleware/authMiddleware');

// // GET all products with optional search and category filter
// router.get('/', async (req, res) => {
//   try {
//     const { search, category } = req.query;
//     let filter = {};

//     if (category && category !== 'All') {
//       filter.category = category;
//     }

//     if (search) {
//       filter.name = { $regex: search, $options: 'i' }; // case-insensitive search
//     }

//     const products = await Product.find(filter).sort({ createdAt: -1 });
//     res.json(products);
//   } catch (e) {
//     res.status(500).json({ message: 'Failed to fetch products' });
//   }
// });

// // GET single product
// router.get('/:id', async (req, res) => {
//   try {
//     const p = await Product.findById(req.params.id);
//     if (!p) return res.status(404).json({ message: 'Product not found' });
//     res.json(p);
//   } catch (e) {
//     res.status(400).json({ message: 'Invalid product id' });
//   }
// })


// // CREATE product (admin only)
// router.post('/', authMiddleware, async (req, res) => {
//   if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
//   try {
//     const { name, description, image, price, category, quantity, unit, stock } = req.body;
//     const product = new Product({
//       name,
//       description,
//       image,
//       price: Number(price || 0),
//       category,
//       quantity: Number(quantity || 1),
//       unit: unit || 'pcs',
//       stock: Number(stock || 0),
//     });
//     await product.save();
//     res.status(201).json(product);
//   } catch (e) {
//     res.status(400).json({ message: 'Invalid product payload', error: e.message });
//   }
// });

// // UPDATE product (admin only)
// router.put('/:id', authMiddleware, async (req, res) => {
//   if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
//   try {
//     const update = { ...req.body };
//     if (update.price != null) update.price = Number(update.price);
//     if (update.quantity != null) update.quantity = Number(update.quantity);
//     if (update.stock != null) update.stock = Number(update.stock);
//     const p = await Product.findByIdAndUpdate(req.params.id, update, { new: true });
//     if (!p) return res.status(404).json({ message: 'Product not found' });
//     res.json(p);
//   } catch (e) {
//     res.status(400).json({ message: 'Update failed', error: e.message });
//   }
// });


// // DELETE product (admin only)
// router.delete('/:id', authMiddleware, async (req, res) => {
//   if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
//   try {
//     const p = await Product.findByIdAndDelete(req.params.id);
//     if (!p) return res.status(404).json({ message: 'Product not found' });
//     res.json({ message: 'Deleted', id: req.params.id });
//   } catch (e) {
//     res.status(400).json({ message: 'Delete failed', error: e.message });
//   }
// });

// module.exports = router;






//routes/product.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const authMiddleware = require('../middleware/authMiddleware');

// GET all products with optional search and category filter
router.get('/', async (req, res) => {
  try {
    const { search, category } = req.query;
    let filter = {};

    if (category && category !== 'All') {
      filter.category = category.toLowerCase(); // normalize for filter
    }

    if (search) {
      filter.name = { $regex: search, $options: 'i' }; // case-insensitive search
    }

    const products = await Product.find(filter).sort({ createdAt: -1 });
    res.json(products);
  } catch (e) {
    res.status(500).json({ message: 'Failed to fetch products' });
  }
});

// GET single product
router.get('/:id', async (req, res) => {
  try {
    const p = await Product.findById(req.params.id);
    if (!p) return res.status(404).json({ message: 'Product not found' });
    res.json(p);
  } catch (e) {
    res.status(400).json({ message: 'Invalid product id' });
  }
})

// CREATE product (admin only)
router.post('/', authMiddleware, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
  try {
    const { name, description, image, price, category, quantity, unit, stock } = req.body;
    const product = new Product({
      name,
      description,
      image,
      price: Number(price || 0),
      category: category.toLowerCase(), // normalize category
      quantity: Number(quantity || 1),
      unit: unit || 'pcs',
      stock: Number(stock || 0),
    });
    await product.save();
    res.status(201).json(product);
  } catch (e) {
    res.status(400).json({ message: 'Invalid product payload', error: e.message });
  }
});

// UPDATE product (admin only)
router.put('/:id', authMiddleware, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
  try {
    const update = { ...req.body };
    if (update.price != null) update.price = Number(update.price);
    if (update.quantity != null) update.quantity = Number(update.quantity);
    if (update.stock != null) update.stock = Number(update.stock);
    if (update.category) update.category = update.category.toLowerCase(); // normalize category
    const p = await Product.findByIdAndUpdate(req.params.id, update, { new: true });
    if (!p) return res.status(404).json({ message: 'Product not found' });
    res.json(p);
  } catch (e) {
    res.status(400).json({ message: 'Update failed', error: e.message });
  }
});

// DELETE product (admin only)
router.delete('/:id', authMiddleware, async (req, res) => {
  if (req.user.role !== 'admin') return res.status(403).json({ message: 'Admin only' });
  try {
    const p = await Product.findByIdAndDelete(req.params.id);
    if (!p) return res.status(404).json({ message: 'Product not found' });
    res.json({ message: 'Deleted', id: req.params.id });
  } catch (e) {
    res.status(400).json({ message: 'Delete failed', error: e.message });
  }
});

module.exports = router;
