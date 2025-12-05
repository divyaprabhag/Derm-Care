// // routes/auth.js
// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const authMiddleware = require('../middleware/authMiddleware');

// const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

// // signup
// router.post('/signup', async (req, res) => {
//   const { name, email, phone, password } = req.body;
//   if (!name || !email || !password) return res.status(400).json({ message: 'name, email and password are required' });

//   try {
//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: 'User already exists with this email' });

//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);

//     const user = new User({ name, email, phone, password: hash });
//     await user.save();

//     const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
//     res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (err) {
//     res.status(500).json({ message: 'Signup error', err });
//   }
// });

// // secure login (email + password)
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) return res.status(400).json({ message: 'Email and password required' });

//   try {
//     const user = await User.findOne({ email });
//     if (!user || !user.password) return res.status(400).json({ message: 'Invalid credentials' });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
//     res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
//   } catch (err) {
//     res.status(500).json({ message: 'Login error', err });
//   }
// });

// // get current user
// router.get('/me', authMiddleware, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json({ user });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', err });
//   }
// });

// module.exports = router;










// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const authMiddleware = require('../middleware/authMiddleware');

// const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

// // Signup (user or admin)
// router.post('/signup', async (req, res) => {
//   const { name, email, phone, password, role } = req.body;
//   if (!name || !email || !password) {
//     return res.status(400).json({ message: 'Name, email and password are required' });
//   }

//   try {
//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: 'User already exists with this email' });

//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);

//     // role defaults to 'user' if not provided
//     const user = new User({ name, email, phone, password: hash, role: role || 'user' });
//     await user.save();

//     const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

//     res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
//   } catch (err) {
//     res.status(500).json({ message: 'Signup error', err });
//   }
// });

// // Secure login (email + password)
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) return res.status(400).json({ message: 'Email and password required' });

//   try {
//     const user = await User.findOne({ email });
//     if (!user || !user.password) return res.status(400).json({ message: 'Invalid credentials' });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

//     res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
//   } catch (err) {
//     res.status(500).json({ message: 'Login error', err });
//   }
// });

// // Get current user info
// router.get('/me', authMiddleware, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json({ user });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', err });
//   }
// });

// module.exports = router;










// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const authMiddleware = require('../middleware/authMiddleware');

// const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

// // Signup (user or admin)
// router.post('/signup', async (req, res) => {
//   const { name, email, phone, password, role } = req.body;
//   if (!name || !email || !password) {
//     return res.status(400).json({ message: 'Name, email and password are required' });
//   }

//   try {
//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: 'User already exists with this email' });

//     const salt = await bcrypt.genSalt(10);
//     const hash = await bcrypt.hash(password, salt);

//     // role defaults to 'user' if not provided
//     const user = new User({ name, email, phone, password: hash, role: role || 'user' });
//     await user.save();

//     const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

//     res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
//   } catch (err) {
//     res.status(500).json({ message: 'Signup error', err });
//   }
// });

// // Secure login (email + password)
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) return res.status(400).json({ message: 'Email and password required' });

//   try {
//     const user = await User.findOne({ email });
//     if (!user || !user.password) return res.status(400).json({ message: 'Invalid credentials' });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

//     res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
//   } catch (err) {
//     res.status(500).json({ message: 'Login error', err });
//   }
// });

// // Get current user info
// router.get('/me', authMiddleware, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json({ user });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', err });
//   }
// });

// module.exports = router;












// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const authMiddleware = require('../middleware/authMiddleware');

// const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';
// const ADMIN_SECRET_CODE = process.env.ADMIN_SECRET_CODE || 'ADMIN123'; // Only users with this code become admins

// // Signup (user or admin)
// router.post('/signup', async (req, res) => {
//   const { name, email, phone, password, adminCode } = req.body;

//   if (!name || !email || !password)
//     return res.status(400).json({ message: 'Name, email, and password are required' });

//   try {
//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: 'User already exists with this email' });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Assign role based on adminCode
//     let role = 'user';
//     if (adminCode && adminCode === ADMIN_SECRET_CODE) role = 'admin';

//     const user = new User({ name, email, phone, password: hashedPassword, role });
//     await user.save();

//     const token = jwt.sign(
//       { id: user._id, email: user.email, role: user.role },
//       JWT_SECRET,
//       { expiresIn: '7d' }
//     );

//     res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
//   } catch (err) {
//     res.status(500).json({ message: 'Signup error', err });
//   }
// });

// // Login (user or admin)
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) return res.status(400).json({ message: 'Email and password required' });

//   try {
//     const user = await User.findOne({ email });
//     if (!user || !user.password) return res.status(400).json({ message: 'Invalid credentials' });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign(
//       { id: user._id, email: user.email, role: user.role },
//       JWT_SECRET,
//       { expiresIn: '7d' }
//     );

//     res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
//   } catch (err) {
//     res.status(500).json({ message: 'Login error', err });
//   }
// });

// // Get current user info
// router.get('/me', authMiddleware, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json({ user });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', err });
//   }
// });

// module.exports = router;










// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const authMiddleware = require('../middleware/authMiddleware');

// const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';
// const ADMIN_SECRET_CODE = process.env.ADMIN_SECRET_CODE || 'ADMIN123'; // Only users with this code become admins

// // Signup (user or admin)
// router.post('/signup', async (req, res) => {
//   const { name, email, phone, password, adminCode } = req.body;

//   if (!name || !email || !password)
//     return res.status(400).json({ message: 'Name, email, and password are required' });

//   try {
//     const existing = await User.findOne({ email });
//     if (existing) return res.status(400).json({ message: 'User already exists with this email' });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Assign role based on adminCode
//     let role = 'user';
//     if (adminCode && adminCode === ADMIN_SECRET_CODE) role = 'admin';

//     const user = new User({ name, email, phone, password: hashedPassword, role });
//     await user.save();

//     const token = jwt.sign(
//       { id: user._id, email: user.email, role: user.role },
//       JWT_SECRET,
//       { expiresIn: '7d' }
//     );

//     res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
//   } catch (err) {
//     res.status(500).json({ message: 'Signup error', err });
//   }
// });

// // Login (user or admin)
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) return res.status(400).json({ message: 'Email and password required' });

//   try {
//     const user = await User.findOne({ email });
//     if (!user || !user.password) return res.status(400).json({ message: 'Invalid credentials' });

//     const match = await bcrypt.compare(password, user.password);
//     if (!match) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign(
//       { id: user._id, email: user.email, role: user.role },
//       JWT_SECRET,
//       { expiresIn: '7d' }
//     );

//     res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
//   } catch (err) {
//     res.status(500).json({ message: 'Login error', err });
//   }
// });

// // Get current user info
// router.get('/me', authMiddleware, async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     if (!user) return res.status(404).json({ message: 'User not found' });
//     res.json({ user });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error', err });
//   }
// });

// module.exports = router;




// routes/auth.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authMiddleware = require('../middleware/authMiddleware');

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';
const ADMIN_SECRET_CODE = process.env.ADMIN_SECRET_CODE || 'ADMIN12345'; // Change in production

// ========================
// Signup (user or admin)
// ========================
router.post('/signup', async (req, res) => {
  try {
    const { name, email, phone, password, adminCode } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }

    // check if user already exists
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'User already exists with this email' });

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // assign role
    let role = 'user';
    if (adminCode && adminCode === ADMIN_SECRET_CODE) {
      role = 'admin';
    }

    const user = new User({ name, email, phone, password: hashedPassword, role });
    await user.save();

    // sign token
    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.status(201).json({
      message: 'Signup successful',
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Signup error', error: err.message });
  }
});

// ========================
// Login (user or admin)
// ========================
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: 'Email and password are required' });

    const user = await User.findOne({ email });
    if (!user || !user.password)
      return res.status(400).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user._id, name: user.name, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    res.json({
      message: 'Login successful',
      token,
      user: { id: user._id, name: user.name, email: user.email, role: user.role }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Login error', error: err.message });
  }
});

// ========================
// Get current user info
// ========================
router.get('/me', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.json({ user });
  } catch (err) {
    console.error('Get user error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;
