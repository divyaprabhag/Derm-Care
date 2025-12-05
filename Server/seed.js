// const mongoose = require('mongoose');
// const Product = require('./models/Product'); // adjust path if needed

// mongoose.connect('mongodb://127.0.0.1:27017/dermcare', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

// const products = [
//   { name: 'Regenerating Cream', description: 'Revitalize your skin.', image: '/images/regenerating-cream.jpg', price: 49.99, category: 'Creams' },
//   { name: 'Moisturizing Cream', description: 'Nourish your skin.', image: '/images/cerave.jpg', price: 59.99, category: 'Moisturizer' },
//   { name: 'Suncreen', description: 'Brighten and protect.', image: '/images/sunscreen.jpg', price: 39.99, category: 'Sunscreen' },
//   { name: 'Serum', description: 'Luxury for your skin.', image: '/images/serum.jpg', price: 69.99, category: 'Serum' },
//   { name: 'Lip balm', description: 'Hydrate your Lips.', image: '/images/lip-balm.png', price: 6.99, category: 'Lip Care' },
//   { name: 'Vitamin c Minimalist Serum', description: 'to Brighten your Skin.', image: '/images/vitamin-c3.jpg', price: 20.1, category: 'Serum' },
//   { name: 'Vitamin C cosrx Serum', description: 'to Brighten your Skin.', image: '/images/vitamin-c1.webp', price: 50.1, category: 'Serum' },
//   { name: 'Vitamin c lakme Serum', description: 'to Brighten your Skin.', image: '/images/vitamin-c2.webp', price: 59.1, category: 'Serum' },
//   { name: 'Vitamin c plum Serum', description: 'to Brighten your Skin.', image: '/images/vitamin-c4.webp', price: 60.1, category: 'Serum' },
//   { name: 'Vitamin c garnier Serum', description: 'to Brighten your Skin.', image: '/images/vitamin-c5.avif', price: 30.1, category: 'Serum' },
//   { name: 'Vitamin c organic Serum', description: 'to Brighten your Skin.', image: '/images/vitamin-c6.jpg', price: 35.1, category: 'Serum' },
//   { name: 'Plum Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: '/images/hylauronic1.jpg', price: 40.1, category: 'Serum' },
//   { name: 'Loreal Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: '/images/hylauronic2.avif', price: 41.1, category: 'Serum' },
//   { name: 'Minimalist Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: '/images/hylauronic3.webp', price: 48.1, category: 'Serum' },
//   { name: 'Minimalist Niaciamide 5% Serum', description: 'to minimize pores.', image: '/images/niacinamide1.jpg', price: 56.1, category: 'Serum' },
//   { name: 'Ordinary Niacimaide 10% Serum', description: 'to minimize pores.', image: '/images/Niacinamide2.png', price: 42.1, category: 'Serum' },
//   { name: 'Plum Niacimaide 10% Serum', description: 'to minimize pores.', image: '/images/niacinamide3.jpg', price: 27.1, category: 'Serum' },
//   { name: 'Ordinary Salicylic acid Serum', description: 'for acne prone skin.', image: '/images/salicylic1.jpg', price: 57.1, category: 'Serum' },
//   { name: 'Skintific Salicylic acid Serum with ceramide', description: 'for acne prone skin.', image: '/images/salicylic2.jpg', price: 67.1, category: 'Serum' },
//   { name: 'Ordinary Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: '/images/hyaluronic.jpg', price: 56.1, category: 'Serum' },
//   { name: 'Plum moisturizer', description: 'to hydrate and to repair your skin.', image: '/images/moisturizer1.jpg', price: 46.1, category: 'Moisturizer' },
//   { name: 'Loreal moisturizer', description: 'to hydrate and to repair your skin.', image: '/images/moisturizer2.jpg', price: 78.1, category: 'Moisturizer' },
//   { name: 'Night Cream', description: 'to hydrate and to repair your dry skin.', image: '/images/moisturizer3.jpg', price: 70.1, category: 'Creams' }
// ];

// const seedDB = async () => {
//   try {
//     await Product.deleteMany({});
//     await Product.insertMany(products);
//     console.log('Database seeded successfully!');
//     mongoose.connection.close();
//   } catch (err) {
//     console.error(err);
//   }
// };

// seedDB();




const mongoose = require('mongoose');
const Product = require('./models/Product'); // Adjust path if needed

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/dermcare', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log('MongoDB connection error:', err));

// Products array with custom id field
const products = [
  { id: 1, name: 'Regenerating Cream', description: 'Revitalize your skin.', image: '/images/regenerating cream.jpg', price: 49.99, category: 'Creams' },
  { id: 2, name: 'Moisturizing Cream', description: 'Nourish your skin.', image: '/images/cerave.jpg', price: 59.99, category: 'Moisturizer' },
  { id: 3, name: 'Sunscreen', description: 'Brighten and protect.', image: '/images/sunscreen.jpg', price: 39.99, category: 'Sunscreen' },
  { id: 4, name: 'Serum', description: 'Luxury for your skin.', image: '/images/serum.jpg', price: 69.99, category: 'Serum' },
  { id: 5, name: 'Lip balm', description: 'Hydrate your Lips.', image: '/images/Lip balm.png', price: 6.99, category: 'Lip Care' },
  { id: 6, name: 'Vitamin C Minimalist Serum', description: 'to Brighten your Skin.', image: '/images/vitamin c3.jpg', price: 20.1, category: 'Serum' },
  { id: 7, name: 'Vitamin C cosrx Serum', description: 'to Brighten your Skin.', image: '/images/vitamin c1.webp', price: 50.1, category: 'Serum' },
  { id: 8, name: 'Vitamin C lakme Serum', description: 'to Brighten your Skin.', image: '/images/vitamin c2.webp', price: 59.1, category: 'Serum' },
  { id: 9, name: 'Vitamin C plum Serum', description: 'to Brighten your Skin.', image: '/images/vitamin c4.webp', price: 60.1, category: 'Serum' },
  { id: 10, name: 'Vitamin C garnier Serum', description: 'to Brighten your Skin.', image: '/images/vitamin c5.avif', price: 30.1, category: 'Serum' },
  { id: 11, name: 'Vitamin C organic Serum', description: 'to Brighten your Skin.', image: '/images/vitamin c6.jpg', price: 35.1, category: 'Serum' },
  { id: 12, name: 'Plum Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: '/images/hylauronic1.jpg', price: 40.1, category: 'Serum' },
  { id: 13, name: 'Loreal Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: '/images/hylauronic2.avif', price: 41.1, category: 'Serum' },
  { id: 14, name: 'Minimalist Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: '/images/hylauronic3.webp', price: 48.1, category: 'Serum' },
  { id: 15, name: 'Minimalist Niaciamide 5% Serum', description: 'to minimize pores.', image: '/images/niacinamide1.jpg', price: 56.1, category: 'Serum' },
  { id: 16, name: 'Ordinary Niacimaide 10% Serum', description: 'to minimize pores.', image: '/images/Niacinamide2.png', price: 42.1, category: 'Serum' },
  { id: 17, name: 'Plum Niacimaide 10% Serum', description: 'to minimize pores.', image: '/images/niacinamide3.jpg', price: 27.1, category: 'Serum' },
  { id: 18, name: 'Ordinary Salicylic acid Serum', description: 'for acne prone skin.', image: '/images/salicylic1.jpg', price: 57.1, category: 'Serum' },
  { id: 19, name: 'Skintific Salicylic acid Serum with ceramide', description: 'for acne prone skin.', image: '/images/salicylic2.jpg', price: 67.1, category: 'Serum' },
  { id: 20, name: 'Ordinary Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: '/images/hyaluronic.jpg', price: 56.1, category: 'Serum' },
  { id: 21, name: 'Plum moisturizer', description: 'to hydrate and to repair your skin.', image: '/images/moisturizer1.jpg', price: 46.1, category: 'Moisturizer' },
  { id: 22, name: 'Loreal moisturizer', description: 'to hydrate and to repair your skin.', image: '/images/moisturizer2.jpg', price: 78.1, category: 'Moisturizer' },
  { id: 23, name: 'Night Cream', description: 'to hydrate and to repair your dry skin.', image: '/images/moisturizer3.jpg', price: 70.1, category: 'Creams' }
];

const seedDB = async () => {
  try {
    await Product.deleteMany({}); // Clear existing products
    await Product.insertMany(products); // Insert in the given order
    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
  }
};

seedDB();
