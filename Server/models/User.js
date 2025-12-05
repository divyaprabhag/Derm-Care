// // models/User.js
// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   phone: { type: String },
//   password: { type: String }, // hashed password (optional for legacy users)
//   role: { type: String, default: 'user' },
//   createdAt: { type: Date, default: Date.now },
//   loginDate: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('User', userSchema);



// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   phone: { type: String },
//   password: { type: String },
//   role: { type: String, default: 'user' }, // admin/user
//   createdAt: { type: Date, default: Date.now },
//   loginDate: { type: Date, default: Date.now }
// });







// // Server/models/User.js

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   phone: { type: String },
//   password: { type: String },
//   role: { type: String, default: 'user' }, // admin/user
//   createdAt: { type: Date, default: Date.now },
//   loginDate: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('User', userSchema);



//models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  password: { type: String, required: true },
  role: { type: String, default: 'user' }, // 'user' or 'admin'
  createdAt: { type: Date, default: Date.now },
  loginDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
