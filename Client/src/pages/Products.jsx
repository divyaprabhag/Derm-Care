// import React, { useState } from 'react';
// import axios from 'axios';
// import PureGlowImage from '../assets/img/regenerating cream.jpg';
// import RevitaLuxeImage from '../assets/img/cerave.jpg';
// import LumiCrestImage from '../assets/img/sunscreen.jpg';
// import SkinSuxImage from '../assets/img/serum.jpg';
// import Lipbalm from '../assets/img/Lip balm.png';
// import Vitamin from '../assets/img/vitamin c3.jpg';
// import Vitaminn from '../assets/img/vitamin c1.webp';
// import Vitaminnn from '../assets/img/vitamin c2.webp';
// import Vitaminm from'../assets/img/vitamin c4.webp';
// import Vitaminmm from'../assets/img/vitamin c5.avif';
// import Vitaming from'../assets/img/vitamin c6.jpg';
// import acid from'../assets/img/hylauronic1.jpg';
// import acidd from'../assets/img/hylauronic2.avif';
// import aciddd from'../assets/img/hylauronic3.webp';
// import nia from'../assets/img/niacinamide1.jpg';
// import niaa from'../assets/img/Niacinamide2.png';
// import niaaa from'../assets/img/niacinamide3.jpg';
// import sal from'../assets/img/salicylic1.jpg';
// import sall from'../assets/img/salicylic2.jpg';
// import acidf from'../assets/img/hyaluronic.jpg';
// import mois from'../assets/img/moisturizer1.jpg';
// import moiss from'../assets/img/moisturizer2.jpg';
// import moisss from'../assets/img/moisturizer3.jpg';

// const ProductPage = ({ searchTerm, onAddToCart }) => {
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [cartItems, setCartItems] = useState([]);
//   const [isOrderConfirmed, setOrderConfirmed] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false); 
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false); 

//   const products = [
//     { id: 1, name: 'Regenerating Cream', description: 'Revitalize your skin.', image: PureGlowImage, price: '$49.99', category: 'Creams' },
//     { id: 2, name: 'Moisturizing Cream', description: 'Nourish your skin.', image: RevitaLuxeImage, price: '$59.99', category: 'Moisturizer' },
//     { id: 3, name: 'Suncreen', description: 'Brighten and protect.', image: LumiCrestImage, price: '$39.99', category: 'Sunscreen' },
//     { id: 4, name: 'Serum', description: 'Luxury for your skin.', image: SkinSuxImage, price: '$69.99', category: 'Serum' },
//     { id: 5, name: 'Lip balm', description: 'Hydrate your Lips.', image: Lipbalm, price: '$6.99', category: 'Lip Care' },
//     { id: 6, name: 'Vitamin c Minimalist Serum', description: 'to Brighten your Skin.', image: Vitamin, price: '$20.1', category: 'Serum' },
//     { id: 7, name: 'Vitamin C cosrx Serum', description: 'to Brighten your Skin.', image: Vitaminn, price: '$50.1', category: 'Serum' },
//     { id: 8, name: 'Vitamin c lakme Serum', description: 'to Brighten your Skin.', image: Vitaminnn, price: '$59.1', category: 'Serum' },
//     { id: 9, name: 'Vitamin c plum Serum', description: 'to Brighten your Skin.', image: Vitaminm, price: '$60.1', category: 'Serum' },
//     { id: 10, name: 'Vitamin c garnier Serum', description: 'to Brighten your Skin.', image: Vitaminmm, price: '$30.1', category: 'Serum' },
//     { id: 11, name: 'Vitamin c organic Serum', description: 'to Brighten your Skin.', image: Vitaming, price: '$35.1', category: 'Serum' },
//     { id: 12, name: 'Plum Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: acid, price: '$40.1', category: 'Serum' },
//     { id: 13, name: 'Loreal Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: acidd, price: '$41.1', category: 'Serum' },
//     { id: 14, name: 'Minimalist Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: aciddd, price: '$48.1', category: 'Serum' },
//     { id: 15, name: 'Minimalist Niaciamide 5% Serum', description: 'to minimize pores.', image: nia, price: '$56.1', category: 'Serum' },
//     { id: 16, name: 'Ordinary Niacimaide 10% Serum', description: 'to minimize pores.', image: niaa, price: '$42.1', category: 'Serum' },
//     { id: 17, name: 'Plum Niacimaide 10% Serum', description: 'to minimize pores.', image: niaaa, price: '$27.1', category: 'Serum' },
//     { id: 18, name: 'Ordinary Salicylic acid Serum', description: 'for acne prone skin.', image: sal, price: '$57.1', category: 'Serum' },
//     { id: 19, name: 'Skintific Salicylic acid Serum with ceramide', description: 'for acne prone skin.', image: sall, price: '$67.1', category: 'Serum' },
//     { id: 20, name: 'Ordinary Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: acidf, price: '$56.1', category: 'Serum' },
//     { id: 21, name: 'Plum moisturizer', description: 'to hydrate and to repair your skin.', image: mois, price: '$46.1', category: 'Moisturizer' },
//     { id: 22, name: 'Loreal moisturizer', description: 'to hydrate and to repair your skin.', image: moiss, price: '$78.1', category: 'Moisturizer' },
//     { id: 23, name: 'Night Cream', description: 'to hydrate and to repair your dry skin.', image: moisss, price: '$70.1', category: 'Creams' }
//   ];

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   const handleBuyNow = (product) => {
//     setSelectedProduct(product); 
//     setShowOrderFormPopup(true); 
//   };

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
//   };

//   const handleSubmitOrder = async () => {
//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: [selectedProduct], 
//       totalAmount: parseFloat(selectedProduct.price.replace('$', '')),
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/api/order', orderDetails);
//       setOrderConfirmed(true);
//       setCartItems([]); 
//       setShowOrderFormPopup(false); 
//       setShowConfirmationPopup(true); 
//     } catch (error) {
//       console.error('Error submitting order:', error);
//     }
//   };

//   const handleAddToCart = (product) => {
//     if (!cartItems.find((item) => item.id === product.id)) {
//       setCartItems([...cartItems, product]);
//       onAddToCart(product);
//     } else {
//       alert('Product already exists in the cart!');
//     }
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
//     return matchesSearchTerm && matchesCategory;
//   });

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Discover Radiant Skin</h1>
//         <p className="text-lg text-center text-gray-600 mb-12">Explore premium skincare products for a glowing complexion.</p>

//         <div className="text-center mb-8">
//           <button onClick={() => handleCategoryChange('All')} className={`px-4 py-2 ${selectedCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>All</button>
//           <button onClick={() => handleCategoryChange('Serum')} className={`px-4 py-2 ml-4 ${selectedCategory === 'Serum' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Serum</button>
//           <button onClick={() => handleCategoryChange('Moisturizer')} className={`px-4 py-2 ml-4 ${selectedCategory === 'Moisturizer' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Moisturizer</button>
//           <button onClick={() => handleCategoryChange('Sunscreen')} className={`px-4 py-2 ml-4 ${selectedCategory === 'Sunscreen' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Sunscreen</button>
//           <button onClick={() => handleCategoryChange('Creams')} className={`px-4 py-2 ml-4 ${selectedCategory === 'Creams' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Creams</button>
//         </div>

//         {filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <div key={product.id} className="bg-gray-100 rounded-lg shadow-lg p-6">
//                 <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
//                 <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
//                 <p className="text-gray-600 mt-2">{product.description}</p>
//                 <p className="text-lg font-bold text-gray-800 mt-4">{product.price}</p>

//                 <div className="mt-6 flex space-x-4">
//                   <button 
//                     onClick={() => handleAddToCart(product)}
//                     className={`px-4 py-2 rounded-md ${cartItems.includes(product) ? 'bg-gray-500 text-white' : 'bg-blue-400 hover:bg-blue-500 text-white'}`}
//                     disabled={cartItems.includes(product)}
//                   >
//                     {cartItems.includes(product) ? 'Already in Cart' : 'Add to Cart'}
//                   </button>
//                   <button 
//                     onClick={() => handleBuyNow(product)}
//                     className="px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}

//         {showConfirmationPopup && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//               <h2 className="text-xl font-bold text-green-600 mb-4">Your order has been confirmed!</h2>
//               <p className="text-lg text-gray-600">Thank you for choosing Derm Care!</p>
//               <button
//                 onClick={() => setShowConfirmationPopup(false)}
//                 className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}

//         {showOrderFormPopup && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid grid-cols-1 gap-8">
//               <div className="grid grid-cols-1 gap-4">
//                 <h3 className="text-2xl font-semibold mb-4 text-center">Complete Your Order</h3>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={userDetails.name}
//                   onChange={handleUserDetailsChange}
//                   className="border p-2 mb-4 w-full"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={userDetails.email}
//                   onChange={handleUserDetailsChange}
//                   className="border p-2 mb-4 w-full"
//                 />
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Address"
//                   value={userDetails.address}
//                   onChange={handleUserDetailsChange}
//                   className="border p-2 mb-4 w-full"
//                 />
//                 <input
//                   type="text"
//                   name="contact"
//                   placeholder="Contact"
//                   value={userDetails.contact}
//                   onChange={handleUserDetailsChange}
//                   className="border p-2 mb-4 w-full"
//                 />

//                 <button
//                   onClick={handleSubmitOrder}
//                   className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md mt-4 w-full"
//                 >
//                   Submit Order
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;












// // src/components/ProductPage.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ProductPage = ({ searchTerm, onAddToCart }) => {
//   const [products, setProducts] = useState([]);
//   const [cartItems, setCartItems] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
//   const [userDetails, setUserDetails] = useState({ name: '', email: '', address: '', contact: '' });
//   const [selectedCategory, setSelectedCategory] = useState('All');

//   // Fetch products from backend
//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const handleAddToCart = (product) => {
//     if (!cartItems.find(item => item.id === product.id)) {
//       setCartItems([...cartItems, product]);
//       onAddToCart(product);
//     } else alert('Product already exists in the cart!');
//   };

//   const handleBuyNow = (product) => {
//     setSelectedProduct(product);
//     setShowOrderFormPopup(true);
//   };

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmitOrder = async () => {
//     const orderDetails = {
//       ...userDetails,
//       products: [selectedProduct],
//       totalAmount: parseFloat(selectedProduct.price.replace('$', '')),
//     };
//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       setShowOrderFormPopup(false);
//       setShowConfirmationPopup(true);
//       setCartItems([]);
//     } catch (error) {
//       console.error('Error submitting order:', error);
//     }
//   };

//   const filteredProducts = products.filter(product => {
//     const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm?.toLowerCase() || '');
//     const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
//     return matchesSearchTerm && matchesCategory;
//   });

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Discover Radiant Skin</h1>
//         <p className="text-lg text-center text-gray-600 mb-12">Explore premium skincare products for a glowing complexion.</p>

//         <div className="text-center mb-8">
//           {['All', 'Serum', 'Moisturizer', 'Sunscreen', 'Creams'].map(category => (
//             <button
//               key={category}
//               onClick={() => handleCategoryChange(category)}
//               className={`px-4 py-2 ml-4 ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map(product => (
//               <div key={product.id} className="bg-gray-100 rounded-lg shadow-lg p-6">
//                 <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
//                 <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
//                 <p className="text-gray-600 mt-2">{product.description}</p>
//                 <p className="text-lg font-bold text-gray-800 mt-4">{product.price}</p>
//                 <div className="mt-6 flex space-x-4">
//                   <button
//                     onClick={() => handleAddToCart(product)}
//                     className={`px-4 py-2 rounded-md ${cartItems.includes(product) ? 'bg-gray-500 text-white' : 'bg-blue-400 hover:bg-blue-500 text-white'}`}
//                     disabled={cartItems.includes(product)}
//                   >
//                     {cartItems.includes(product) ? 'Already in Cart' : 'Add to Cart'}
//                   </button>
//                   <button
//                     onClick={() => handleBuyNow(product)}
//                     className="px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}

//         {showOrderFormPopup && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid grid-cols-1 gap-4">
//               <h3 className="text-2xl font-semibold mb-4 text-center">Complete Your Order</h3>
//               {['name', 'email', 'address', 'contact'].map(field => (
//                 <input
//                   key={field}
//                   type={field === 'email' ? 'email' : 'text'}
//                   name={field}
//                   placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
//                   value={userDetails[field]}
//                   onChange={handleUserDetailsChange}
//                   className="border p-2 mb-4 w-full"
//                 />
//               ))}
//               <button onClick={handleSubmitOrder} className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md w-full">
//                 Submit Order
//               </button>
//             </div>
//           </div>
//         )}

//         {showConfirmationPopup && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
//               <h2 className="text-xl font-bold text-green-600 mb-4">Your order has been confirmed!</h2>
//               <p className="text-lg text-gray-600">Thank you for choosing Derm Care!</p>
//               <button onClick={() => setShowConfirmationPopup(false)} className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md">
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;















// //Products.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const ProductPage = ({ searchTerm = '', onAddToCart = () => {} }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [cartItems, setCartItems] = useState([]);
//   const [isOrderConfirmed, setOrderConfirmed] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);

//   // Fetch products from backend
//   useEffect(() => {
//     let mounted = true;
//     setLoadingProducts(true);
//     axios
//       .get('http://localhost:5000/api/products')
//       .then((res) => {
//         if (mounted) setProducts(res.data || []);
//       })
//       .catch((err) => console.error('Fetch products error:', err))
//       .finally(() => setLoadingProducts(false));
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const formatINR = (n) =>
//     typeof n === 'number'
//       ? n.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
//       : n;

//   const handleBuyNow = (product) => {
//     if (!isAuthenticated) {
//       alert('Please login to continue');
//       return;
//     }
//     setSelectedProduct(product);
//     setShowOrderFormPopup(true);
//   };

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmitOrder = async () => {
//     if (!selectedProduct) return;

//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: [
//         {
//           _id: selectedProduct._id,
//           name: selectedProduct.name,
//           price: selectedProduct.price,
//           quantity: 1,
//         },
//       ],
//       totalAmount: Number(selectedProduct.price || 0),
//     };

//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       setOrderConfirmed(true);
//       setCartItems([]);
//       setShowOrderFormPopup(false);
//       setShowConfirmationPopup(true);
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       alert('Order failed. Try again.');
//     }
//   };

//   const handleAddToCart = (product) => {
//     if (!isAuthenticated) {
//       alert('Please login to add items to cart');
//       return;
//     }
//     if (!cartItems.find((item) => item._id === product._id)) {
//       const updated = [...cartItems, product];
//       setCartItems(updated);
//       onAddToCart(product);
//     } else {
//       alert('Product already exists in the cart!');
//     }
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesSearchTerm = product.name
//       ?.toLowerCase()
//       ?.includes((searchTerm || '').toLowerCase());
//     const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
//     return matchesSearchTerm && matchesCategory;
//   });

//   const uniqueCategories = ['All', ...Array.from(new Set(products.map((p) => p.category).filter(Boolean)))];

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Discover Radiant Skin</h1>
//         <p className="text-lg text-center text-gray-600 mb-12">
//           Explore premium skincare products for a glowing complexion.
//         </p>

//         {/* Categories */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <div key={product._id} className="bg-gray-100 rounded-lg shadow-lg p-6">
//                 {product.image ? (
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-64 object-cover rounded-md mb-4"
//                   />
//                 ) : (
//                   <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                     <span className="text-gray-500">No image</span>
//                   </div>
//                 )}
//                 <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
//                 <p className="text-lg font-bold text-gray-800 mt-4">
//                   {formatINR(Number(product.price || 0))}
//                 </p>

//                 <div className="mt-6 flex space-x-4">
//                   <button
//                     onClick={() => handleAddToCart(product)}
//                     className={`px-4 py-2 rounded-md ${
//                       cartItems.find((i) => i._id === product._id)
//                         ? 'bg-gray-500 text-white'
//                         : 'bg-blue-400 hover:bg-blue-500 text-white'
//                     }`}
//                     disabled={!!cartItems.find((i) => i._id === product._id)}
//                   >
//                     {cartItems.find((i) => i._id === product._id) ? 'Already in Cart' : 'Add to Cart'}
//                   </button>
//                   <button
//                     onClick={() => handleBuyNow(product)}
//                     className="px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}

//         {/* Order Success */}
//         {showConfirmationPopup && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//               <h2 className="text-xl font-bold text-green-600 mb-4">Your order has been confirmed!</h2>
//               <p className="text-lg text-gray-600">Thank you for choosing Derm Care!</p>
//               <button
//                 onClick={() => setShowConfirmationPopup(false)}
//                 className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Order Form */}
//         {showOrderFormPopup && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid grid-cols-1 gap-8">
//               <div className="grid grid-cols-1 gap-4">
//                 <h3 className="text-2xl font-semibold mb-4 text-center">Complete Your Order</h3>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={userDetails.name}
//                   onChange={handleUserDetailsChange}
//                   className="border p-2 mb-4 w-full"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={userDetails.email}
//                   onChange={handleUserDetailsChange}
//                   className="border p-2 mb-4 w-full"
//                 />
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Address"
//                   value={userDetails.address}
//                   onChange={handleUserDetailsChange}
//                   className="border p-2 mb-4 w-full"
//                 />
//                 <input
//                   type="text"
//                   name="contact"
//                   placeholder="Contact"
//                   value={userDetails.contact}
//                   onChange={handleUserDetailsChange}
//                   className="border p-2 mb-4 w-full"
//                 />
//                 <button
//                   onClick={handleSubmitOrder}
//                   className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md mt-4 w-full"
//                 >
//                   Submit Order
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;

















// // Products.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const ProductPage = ({ searchTerm = '', onAddToCart = () => {} }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [cartItems, setCartItems] = useState([]);
//   const [isOrderConfirmed, setOrderConfirmed] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);

//   // Load cart from localStorage on mount
//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) setCartItems(JSON.parse(savedCart));
//   }, []);

//   // Fetch products from backend
//   useEffect(() => {
//     let mounted = true;
//     setLoadingProducts(true);
//     axios
//       .get('http://localhost:5000/api/products')
//       .then((res) => {
//         if (mounted) setProducts(res.data || []);
//       })
//       .catch((err) => console.error('Fetch products error:', err))
//       .finally(() => setLoadingProducts(false));
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const formatINR = (n) =>
//     typeof n === 'number'
//       ? n.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
//       : n;

//   const handleBuyNow = (product) => {
//     if (!isAuthenticated) {
//       alert('Please login to continue');
//       return;
//     }
//     setSelectedProduct(product);
//     setShowOrderFormPopup(true);
//   };

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmitOrder = async () => {
//     if (!selectedProduct) return;

//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: [
//         {
//           _id: selectedProduct._id,
//           name: selectedProduct.name,
//           price: selectedProduct.price,
//           quantity: 1,
//         },
//       ],
//       totalAmount: Number(selectedProduct.price || 0),
//     };

//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       setOrderConfirmed(true);
//       setCartItems([]);
//       localStorage.removeItem('cart'); // clear cart in localStorage
//       setShowOrderFormPopup(false);
//       setShowConfirmationPopup(true);
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       alert('Order failed. Try again.');
//     }
//   };

//   const handleAddToCart = (product) => {
//     if (!isAuthenticated) {
//       alert('Please login to add items to cart');
//       return;
//     }
//     if (!cartItems.find((item) => item._id === product._id)) {
//       const updated = [...cartItems, product];
//       setCartItems(updated);
//       localStorage.setItem('cart', JSON.stringify(updated)); // persist cart
//       onAddToCart(product);
//     } else {
//       alert('Product already exists in the cart!');
//     }
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesSearchTerm = product.name
//       ?.toLowerCase()
//       ?.includes((searchTerm || '').toLowerCase());
//     const matchesCategory =
//       selectedCategory === 'All' || product.category === selectedCategory;
//     return matchesSearchTerm && matchesCategory;
//   });

//   const uniqueCategories = [
//     'All',
//     ...Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
//   ];

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
//           Discover Radiant Skin
//         </h1>
//         <p className="text-lg text-center text-gray-600 mb-12">
//           Explore premium skincare products for a glowing complexion.
//         </p>

//         {/* Categories */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <div key={product._id} className="bg-gray-100 rounded-lg shadow-lg p-6">
//                 {product.image ? (
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-64 object-cover rounded-md mb-4"
//                   />
//                 ) : (
//                   <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                     <span className="text-gray-500">No image</span>
//                   </div>
//                 )}
//                 <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
//                 <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
//                 <p className="text-lg font-bold text-gray-800 mt-4">
//                   {formatINR(Number(product.price || 0))}
//                 </p>

//                 <div className="mt-6 flex space-x-4">
//                   <button
//                     onClick={() => handleAddToCart(product)}
//                     className={`px-4 py-2 rounded-md ${
//                       cartItems.find((i) => i._id === product._id)
//                         ? 'bg-gray-500 text-white'
//                         : 'bg-blue-400 hover:bg-blue-500 text-white'
//                     }`}
//                     disabled={!!cartItems.find((i) => i._id === product._id)}
//                   >
//                     {cartItems.find((i) => i._id === product._id)
//                       ? 'Already in Cart'
//                       : 'Add to Cart'}
//                   </button>
//                   <button
//                     onClick={() => handleBuyNow(product)}
//                     className="px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}

//         {/* Order Success */}
//         {showConfirmationPopup && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//               <h2 className="text-xl font-bold text-green-600 mb-4">
//                 Your order has been confirmed!
//               </h2>
//               <p className="text-lg text-gray-600">Thank you for choosing Derm Care!</p>
//               <button
//                 onClick={() => setShowConfirmationPopup(false)}
//                 className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Order Form */}
//         {showOrderFormPopup && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid grid-cols-1 gap-8">
//               <div className="grid grid-cols-1 gap-4">
//                 <h3 className="text-2xl font-semibold mb-4 text-center">Complete Your Order</h3>
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   value={userDetails.name}
//                   onChange={handleUserDetailsChange}
//                   className="border p-2 mb-4 w-full"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   value={userDetails.email}
//                   onChange={handleUserDetailsChange}
//                   className="border p-2 mb-4 w-full"
//                 />
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Address"
//                   value={userDetails.address}
//                   onChange={handleUserDetailsChange}
//                   className="border p-2 mb-4 w-full"
//                 />
//                 <input
//                   type="text"
//                   name="contact"
//                   placeholder="Contact"
//                   value={userDetails.contact}
//                   onChange={handleUserDetailsChange}
//                   className="border p-2 mb-4 w-full"
//                 />
//                 <button
//                   onClick={handleSubmitOrder}
//                   className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md mt-4 w-full"
//                 >
//                   Submit Order
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;













// //pages/Products.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const ProductPage = ({ searchTerm = '', onAddToCart = () => {} }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [cartItems, setCartItems] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });
//   const [quantity, setQuantity] = useState(1);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

//   // Load cart from localStorage
//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) setCartItems(JSON.parse(savedCart));
//   }, []);

//   // Fetch products
//   useEffect(() => {
//     let mounted = true;
//     setLoadingProducts(true);
//     axios
//       .get('http://localhost:5000/api/products')
//       .then((res) => {
//         if (mounted) setProducts(res.data || []);
//       })
//       .catch((err) => console.error('Fetch products error:', err))
//       .finally(() => setLoadingProducts(false));
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const formatINR = (n) =>
//     typeof n === 'number'
//       ? n.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
//       : n;

//   const handleAddToCart = (product, qty = 1) => {
//     if (!isAuthenticated) {
//       alert('Please login to add items to cart');
//       return;
//     }
//     const existing = cartItems.find((i) => i._id === product._id);
//     if (existing) {
//       alert('Product already in cart!');
//       return;
//     }
//     const updated = [...cartItems, { ...product, quantity: qty }];
//     setCartItems(updated);
//     localStorage.setItem('cart', JSON.stringify(updated));
//     onAddToCart(product);
//   };

//   const handleBuyNow = (product) => {
//     if (!isAuthenticated) {
//       alert('Please login to continue');
//       return;
//     }
//     setSelectedProduct(product);
//     setQuantity(1);
//     setShowOrderFormPopup(true);
//   };

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmitOrder = async () => {
//     if (!selectedProduct) return;

//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: [
//         {
//           _id: selectedProduct._id,
//           name: selectedProduct.name,
//           price: selectedProduct.price,
//           quantity: quantity,
//         },
//       ],
//       totalAmount: Number(selectedProduct.price || 0) * quantity,
//     };

//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       setShowOrderFormPopup(false);
//       setCartItems([]);
//       localStorage.removeItem('cart');
//       setShowConfirmationPopup(true);
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       alert('Order failed. Try again.');
//     }
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesSearchTerm = product.name
//       ?.toLowerCase()
//       ?.includes((searchTerm || '').toLowerCase());
//     const matchesCategory =
//       selectedCategory === 'All' || product.category === selectedCategory;
//     return matchesSearchTerm && matchesCategory;
//   });

//   const uniqueCategories = [
//     'All',
//     ...Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
//   ];

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
//           Discover Radiant Skin
//         </h1>
//         <p className="text-lg text-center text-gray-600 mb-12">
//           Explore premium skincare products for a glowing complexion.
//         </p>

//         {/* Categories */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <div key={product._id} className="bg-gray-100 rounded-lg shadow-lg p-6">
//                 <div
//                   onClick={() => navigate(`/product/${product._id}`)}
//                   className="cursor-pointer"
//                 >
//                   {product.image ? (
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-64 object-cover rounded-md mb-4"
//                     />
//                   ) : (
//                     <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                       <span className="text-gray-500">No image</span>
//                     </div>
//                   )}
//                   <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
//                   <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
//                   <p className="text-lg font-bold text-gray-800 mt-4">
//                     {formatINR(Number(product.price || 0))}
//                   </p>
//                 </div>

//                 <div className="mt-6 flex space-x-4">
//                   <button
//                     onClick={() => handleAddToCart(product)}
//                     className={`px-4 py-2 rounded-md ${
//                       cartItems.find((i) => i._id === product._id)
//                         ? 'bg-gray-500 text-white'
//                         : 'bg-blue-400 hover:bg-blue-500 text-white'
//                     }`}
//                     disabled={!!cartItems.find((i) => i._id === product._id)}
//                   >
//                     {cartItems.find((i) => i._id === product._id)
//                       ? 'Already in Cart'
//                       : 'Add to Cart'}
//                   </button>
//                   <button
//                     onClick={() => handleBuyNow(product)}
//                     className="px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}

//         {/* Order Success */}
//         {showConfirmationPopup && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//               <h2 className="text-xl font-bold text-green-600 mb-4">
//                 Your order has been confirmed!
//               </h2>
//               <p className="text-lg text-gray-600">Thank you for choosing Derm Care!</p>
//               <button
//                 onClick={() => setShowConfirmationPopup(false)}
//                 className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Order Form */}
//         {showOrderFormPopup && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid grid-cols-1 gap-6">
//               <h3 className="text-2xl font-semibold mb-4 text-center">
//                 Complete Your Order
//               </h3>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={userDetails.name}
//                 onChange={(e) => handleUserDetailsChange(e)}
//                 className="border p-2 w-full"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={userDetails.email}
//                 onChange={(e) => handleUserDetailsChange(e)}
//                 className="border p-2 w-full"
//               />
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 value={userDetails.address}
//                 onChange={(e) => handleUserDetailsChange(e)}
//                 className="border p-2 w-full"
//               />
//               <input
//                 type="text"
//                 name="contact"
//                 placeholder="Contact"
//                 value={userDetails.contact}
//                 onChange={(e) => handleUserDetailsChange(e)}
//                 className="border p-2 w-full"
//               />
//               <input
//                 type="number"
//                 min="1"
//                 value={quantity}
//                 onChange={(e) => setQuantity(Number(e.target.value))}
//                 className="border p-2 w-full"
//                 placeholder="Quantity"
//               />
//               <button
//                 onClick={handleSubmitOrder}
//                 className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md w-full"
//               >
//                 Submit Order
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;























// // pages/Products.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';

// const ProductPage = ({ searchTerm = '', onAddToCart = () => {} }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [selectedCategory, setSelectedCategory] = useState('All');
//   const [cartItems, setCartItems] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });
//   const [quantity, setQuantity] = useState(1);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

//   useEffect(() => {
//     const savedCart = localStorage.getItem('cart');
//     if (savedCart) setCartItems(JSON.parse(savedCart));
//   }, []);

//   useEffect(() => {
//     let mounted = true;
//     setLoadingProducts(true);
//     axios
//       .get('http://localhost:5000/api/products')
//       .then((res) => {
//         if (mounted) setProducts(res.data || []);
//       })
//       .catch((err) => console.error('Fetch products error:', err))
//       .finally(() => setLoadingProducts(false));
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const formatINR = (n) =>
//     typeof n === 'number'
//       ? n.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
//       : n;

//   const handleAddToCart = (product, qty = 1) => {
//     if (!isAuthenticated) {
//       alert('Please login to add items to cart');
//       return;
//     }
//     if (product.stock === 0) {
//       alert('Product is out of stock');
//       return;
//     }
//     const existing = cartItems.find((i) => i._id === product._id);
//     if (existing) {
//       alert('Product already in cart!');
//       return;
//     }
//     const updated = [...cartItems, { ...product, quantity: qty }];
//     setCartItems(updated);
//     localStorage.setItem('cart', JSON.stringify(updated));
//     onAddToCart(product);
//   };

//   const handleBuyNow = (product) => {
//     if (!isAuthenticated) {
//       alert('Please login to continue');
//       return;
//     }
//     if (product.stock === 0) {
//       alert('Product is out of stock');
//       return;
//     }
//     setSelectedProduct(product);
//     setQuantity(1);
//     setShowOrderFormPopup(true);
//   };

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmitOrder = async () => {
//     if (!selectedProduct) return;

//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: [
//         {
//           _id: selectedProduct._id,
//           name: selectedProduct.name,
//           price: selectedProduct.price,
//           quantity: quantity,
//         },
//       ],
//       totalAmount: Number(selectedProduct.price || 0) * quantity,
//     };

//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       setShowOrderFormPopup(false);
//       setCartItems([]);
//       localStorage.removeItem('cart');
//       setShowConfirmationPopup(true);
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       alert('Order failed. Try again.');
//     }
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesSearchTerm = product.name
//       ?.toLowerCase()
//       ?.includes((searchTerm || '').toLowerCase());
//     const matchesCategory =
//       selectedCategory === 'All' || product.category === selectedCategory;
//     return matchesSearchTerm && matchesCategory;
//   });

//   const uniqueCategories = [
//     'All',
//     ...Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
//   ];

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
//           Discover Radiant Skin
//         </h1>
//         <p className="text-lg text-center text-gray-600 mb-12">
//           Explore premium skincare products for a glowing complexion.
//         </p>

//         {/* Categories */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat ? 'bg-blue-500 text-white' : 'bg-gray-200'
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <div key={product._id} className="bg-gray-100 rounded-lg shadow-lg p-6">
//                 <div
//                   onClick={() => navigate(`/product/${product._id}`)}
//                   className="cursor-pointer"
//                 >
//                   {product.image ? (
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-64 object-cover rounded-md mb-4"
//                     />
//                   ) : (
//                     <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                       <span className="text-gray-500">No image</span>
//                     </div>
//                   )}
//                   <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
//                   <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
//                   <p className="text-lg font-bold text-gray-800 mt-4">
//                     {formatINR(Number(product.price || 0))}
//                   </p>
//                   <p className="text-sm text-gray-600 mt-1">
//                     {`Per unit: ${product.quantity} ${product.unit}`}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     {product.stock > 0
//                       ? `Available stock: ${product.stock}`
//                       : 'Out of Stock'}
//                   </p>
//                 </div>

//                 <div className="mt-6 flex space-x-4">
//                   <button
//                     onClick={() => handleAddToCart(product)}
//                     className={`px-4 py-2 rounded-md ${
//                       cartItems.find((i) => i._id === product._id) || product.stock === 0
//                         ? 'bg-gray-500 text-white cursor-not-allowed'
//                         : 'bg-blue-400 hover:bg-blue-500 text-white'
//                     }`}
//                     disabled={!!cartItems.find((i) => i._id === product._id) || product.stock === 0}
//                   >
//                     {cartItems.find((i) => i._id === product._id)
//                       ? 'Already in Cart'
//                       : product.stock === 0
//                       ? 'Out of Stock'
//                       : 'Add to Cart'}
//                   </button>
//                   <button
//                     onClick={() => handleBuyNow(product)}
//                     className={`px-4 py-2 rounded-md ${
//                       product.stock === 0
//                         ? 'bg-gray-500 text-white cursor-not-allowed'
//                         : 'bg-pink-400 hover:bg-pink-500 text-white'
//                     }`}
//                     disabled={product.stock === 0}
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}

//         {/* Order Success and Form popups remain same */}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;














// // pages/Products.jsx
// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const ProductPage = ({ searchTerm = "" }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const { cartItems, addToCart, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [userDetails, setUserDetails] = useState({
//     name: "",
//     email: "",
//     address: "",
//     contact: "",
//   });
//   const [quantity, setQuantity] = useState(1);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

//   useEffect(() => {
//     let mounted = true;
//     setLoadingProducts(true);
//     axios
//       .get("http://localhost:5000/api/products")
//       .then((res) => {
//         if (mounted) setProducts(res.data || []);
//       })
//       .catch((err) => console.error("Fetch products error:", err))
//       .finally(() => setLoadingProducts(false));
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const formatINR = (n) =>
//     typeof n === "number"
//       ? n.toLocaleString("en-IN", { style: "currency", currency: "INR" })
//       : n;

//   const handleAddToCartClick = (product) => {
//     if (!isAuthenticated) {
//       alert("Please login to add items to cart");
//       return;
//     }
//     if (product.stock === 0) {
//       alert("Product is out of stock");
//       return;
//     }
//     if (cartItems.find((i) => i._id === product._id)) {
//       alert("Product already in cart!");
//       return;
//     }
//     addToCart(product, 1);
//   };

//   const handleBuyNow = (product) => {
//     if (!isAuthenticated) {
//       alert("Please login to continue");
//       return;
//     }
//     if (product.stock === 0) {
//       alert("Product is out of stock");
//       return;
//     }
//     setSelectedProduct(product);
//     setQuantity(1);
//     setShowOrderFormPopup(true);
//   };

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmitOrder = async () => {
//     if (!selectedProduct) return;

//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: [
//         {
//           _id: selectedProduct._id,
//           name: selectedProduct.name,
//           price: selectedProduct.price,
//           quantity: quantity,
//         },
//       ],
//       totalAmount: Number(selectedProduct.price || 0) * quantity,
//     };

//     try {
//       await axios.post("http://localhost:5000/api/order", orderDetails);
//       setShowOrderFormPopup(false);
//       clearCart();
//       setShowConfirmationPopup(true);
//     } catch (error) {
//       console.error("Error submitting order:", error);
//       alert("Order failed. Try again.");
//     }
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesSearchTerm = product.name
//       ?.toLowerCase()
//       ?.includes((searchTerm || "").toLowerCase());
//     const matchesCategory =
//       selectedCategory === "All" || product.category === selectedCategory;
//     return matchesSearchTerm && matchesCategory;
//   });

//   const uniqueCategories = [
//     "All",
//     ...Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
//   ];

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
//           Discover Radiant Skin
//         </h1>
//         <p className="text-lg text-center text-gray-600 mb-12">
//           Explore premium skincare products for a glowing complexion.
//         </p>

//         {/* Categories */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <div key={product._id} className="bg-gray-100 rounded-lg shadow-lg p-6">
//                 <div
//                   onClick={() => navigate(`/product/${product._id}`)}
//                   className="cursor-pointer"
//                 >
//                   {product.image ? (
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-64 object-cover rounded-md mb-4"
//                     />
//                   ) : (
//                     <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                       <span className="text-gray-500">No image</span>
//                     </div>
//                   )}
//                   <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
//                   <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
//                   <p className="text-lg font-bold text-gray-800 mt-4">
//                     {formatINR(Number(product.price || 0))}
//                   </p>
//                   <p className="text-sm text-gray-600 mt-1">
//                     {`Per unit: ${product.quantity} ${product.unit}`}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     {product.stock > 0 ? `Available stock: ${product.stock}` : "Out of Stock"}
//                   </p>
//                 </div>

//                 <div className="mt-6 flex space-x-4">
//                   <button
//                     onClick={() => handleAddToCartClick(product)}
//                     className={`px-4 py-2 rounded-md ${
//                       cartItems.find((i) => i._id === product._id) || product.stock === 0
//                         ? "bg-gray-500 text-white cursor-not-allowed"
//                         : "bg-blue-400 hover:bg-blue-500 text-white"
//                     }`}
//                     disabled={!!cartItems.find((i) => i._id === product._id) || product.stock === 0}
//                   >
//                     {cartItems.find((i) => i._id === product._id)
//                       ? "Already in Cart"
//                       : product.stock === 0
//                       ? "Out of Stock"
//                       : "Add to Cart"}
//                   </button>
//                   <button
//                     onClick={() => handleBuyNow(product)}
//                     className={`px-4 py-2 rounded-md ${
//                       product.stock === 0
//                         ? "bg-gray-500 text-white cursor-not-allowed"
//                         : "bg-pink-400 hover:bg-pink-500 text-white"
//                     }`}
//                     disabled={product.stock === 0}
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}

//         {/* Order Form Popup */}
//         {showOrderFormPopup && selectedProduct && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid grid-cols-1 gap-8">
//               <h3 className="text-2xl font-semibold mb-4 text-center">Complete Your Order</h3>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={userDetails.name}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 mb-4 w-full"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={userDetails.email}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 mb-4 w-full"
//               />
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 value={userDetails.address}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 mb-4 w-full"
//               />
//               <input
//                 type="text"
//                 name="contact"
//                 placeholder="Contact"
//                 value={userDetails.contact}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 mb-4 w-full"
//               />
//               <button
//                 onClick={handleSubmitOrder}
//                 className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md mt-4 w-full"
//               >
//                 Submit Order
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Confirmation Popup */}
//         {showConfirmationPopup && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//               <h2 className="text-xl font-bold text-green-600 mb-4">
//                 Your order has been confirmed!
//               </h2>
//               <p className="text-lg text-gray-600">Thank you for choosing Derm Care!</p>
//               <button
//                 onClick={() => setShowConfirmationPopup(false)}
//                 className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;











// // pages/Products.jsx
// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const ProductPage = ({ searchTerm = "" }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const { cartItems, addToCart, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [userDetails, setUserDetails] = useState({
//     name: "",
//     email: "",
//     address: "",
//     contact: "",
//   });
//   const [quantity, setQuantity] = useState(1);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

//   useEffect(() => {
//     let mounted = true;
//     setLoadingProducts(true);
//     axios
//       .get("http://localhost:5000/api/products")
//       .then((res) => {
//         if (mounted) setProducts(res.data || []);
//       })
//       .catch((err) => console.error("Fetch products error:", err))
//       .finally(() => setLoadingProducts(false));
//     return () => {
//       mounted = false;
//     };
//   }, []);

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const formatINR = (n) =>
//     typeof n === "number"
//       ? n.toLocaleString("en-IN", { style: "currency", currency: "INR" })
//       : n;

//   const handleAddToCartClick = (product) => {
//     if (!isAuthenticated) {
//       alert("Please login to add items to cart");
//       return;
//     }
//     if (product.stock === 0) {
//       alert("Product is out of stock");
//       return;
//     }
//     const existingItem = cartItems.find((i) => i._id === product._id);
//     if (existingItem) {
//       alert("Product already in cart!");
//       return;
//     }
//     addToCart(product, 1); // CartContext ensures stock is respected
//   };

//   const handleBuyNow = (product) => {
//     if (!isAuthenticated) {
//       alert("Please login to continue");
//       return;
//     }
//     if (product.stock === 0) {
//       alert("Product is out of stock");
//       return;
//     }
//     setSelectedProduct(product);
//     setQuantity(1);
//     setShowOrderFormPopup(true);
//   };

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmitOrder = async () => {
//     if (!selectedProduct) return;

//     const orderDetails = {
//       ...userDetails,
//       products: [
//         {
//           _id: selectedProduct._id,
//           name: selectedProduct.name,
//           price: selectedProduct.price,
//           itemsCount: quantity,
//           quantity: selectedProduct.quantity,
//           unit: selectedProduct.unit,
//         },
//       ],
//       totalAmount: Number(selectedProduct.price || 0) * quantity,
//     };

//     try {
//       await axios.post("http://localhost:5000/api/order", orderDetails);
//       setShowOrderFormPopup(false);
//       clearCart();
//       setShowConfirmationPopup(true);
//     } catch (error) {
//       console.error("Error submitting order:", error);
//       alert("Order failed. Try again.");
//     }
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesSearchTerm = product.name
//       ?.toLowerCase()
//       ?.includes((searchTerm || "").toLowerCase());
//     const matchesCategory =
//       selectedCategory === "All" || product.category === selectedCategory;
//     return matchesSearchTerm && matchesCategory;
//   });

//   const uniqueCategories = [
//     "All",
//     ...Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
//   ];

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
//           Discover Radiant Skin
//         </h1>
//         <p className="text-lg text-center text-gray-600 mb-12">
//           Explore premium skincare products for a glowing complexion.
//         </p>

//         {/* Categories */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <div key={product._id} className="bg-gray-100 rounded-lg shadow-lg p-6">
//                 <div
//                   onClick={() => navigate(`/product/${product._id}`)}
//                   className="cursor-pointer"
//                 >
//                   {product.image ? (
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-64 object-cover rounded-md mb-4"
//                     />
//                   ) : (
//                     <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                       <span className="text-gray-500">No image</span>
//                     </div>
//                   )}
//                   <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
//                   <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
//                   <p className="text-lg font-bold text-gray-800 mt-4">
//                     {formatINR(Number(product.price || 0))}
//                   </p>
//                   <p className="text-sm text-gray-600 mt-1">
//                     {`Per unit: ${product.quantity} ${product.unit}`}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     {product.stock > 0 ? `Available stock: ${product.stock}` : "Out of Stock"}
//                   </p>
//                 </div>

//                 <div className="mt-6 flex space-x-4">
//                   <button
//                     onClick={() => handleAddToCartClick(product)}
//                     className={`px-4 py-2 rounded-md ${
//                       cartItems.find((i) => i._id === product._id) || product.stock === 0
//                         ? "bg-gray-500 text-white cursor-not-allowed"
//                         : "bg-blue-400 hover:bg-blue-500 text-white"
//                     }`}
//                     disabled={!!cartItems.find((i) => i._id === product._id) || product.stock === 0}
//                   >
//                     {cartItems.find((i) => i._id === product._id)
//                       ? "Already in Cart"
//                       : product.stock === 0
//                       ? "Out of Stock"
//                       : "Add to Cart"}
//                   </button>
//                   <button
//                     onClick={() => handleBuyNow(product)}
//                     className={`px-4 py-2 rounded-md ${
//                       product.stock === 0
//                         ? "bg-gray-500 text-white cursor-not-allowed"
//                         : "bg-pink-400 hover:bg-pink-500 text-white"
//                     }`}
//                     disabled={product.stock === 0}
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}

//         {/* Order Form Popup */}
//         {showOrderFormPopup && selectedProduct && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid grid-cols-1 gap-4">
//               <h3 className="text-2xl font-semibold mb-4 text-center">Complete Your Order</h3>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={userDetails.name}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 w-full"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={userDetails.email}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 w-full"
//               />
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 value={userDetails.address}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 w-full"
//               />
//               <input
//                 type="text"
//                 name="contact"
//                 placeholder="Contact"
//                 value={userDetails.contact}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 w-full"
//               />

//               {/* Quantity input respecting stock */}
//               <div className="flex items-center space-x-2">
//                 <label className="font-semibold">Quantity:</label>
//                 <input
//                   type="number"
//                   min="1"
//                   max={selectedProduct.stock}
//                   value={quantity}
//                   onChange={(e) =>
//                     setQuantity(Math.min(Number(e.target.value), selectedProduct.stock))
//                   }
//                   className="border p-2 w-20"
//                 />
//                 <span className="text-sm text-gray-600">/ {selectedProduct.stock} available</span>
//               </div>

//               <button
//                 onClick={handleSubmitOrder}
//                 className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md mt-4 w-full"
//               >
//                 Submit Order
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Confirmation Popup */}
//         {showConfirmationPopup && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//               <h2 className="text-xl font-bold text-green-600 mb-4">
//                 Your order has been confirmed!
//               </h2>
//               <p className="text-lg text-gray-600">Thank you for choosing Derm Care!</p>
//               <button
//                 onClick={() => setShowConfirmationPopup(false)}
//                 className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;
















// // pages/Products.jsx
// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const ProductPage = ({ searchTerm = "" }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const { cartItems, addToCart, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [userDetails, setUserDetails] = useState({
//     name: "",
//     email: "",
//     address: "",
//     contact: "",
//   });
//   const [quantity, setQuantity] = useState(1);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

//   // Fetch products, refetch whenever cart or order changes
//   useEffect(() => {
//     let mounted = true;
//     setLoadingProducts(true);
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/products");
//         if (mounted) setProducts(res.data || []);
//       } catch (err) {
//         console.error("Fetch products error:", err);
//       } finally {
//         setLoadingProducts(false);
//       }
//     };
//     fetchProducts();
//     return () => {
//       mounted = false;
//     };
//   }, [cartItems, showOrderFormPopup]);

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const formatINR = (n) =>
//     typeof n === "number"
//       ? n.toLocaleString("en-IN", { style: "currency", currency: "INR" })
//       : n;

//   const handleAddToCartClick = (product) => {
//     if (!isAuthenticated) {
//       alert("Please login to add items to cart");
//       return;
//     }
//     if (product.stock === 0) {
//       alert("Product is out of stock");
//       return;
//     }
//     const existingItem = cartItems.find((i) => i._id === product._id);
//     if (existingItem) {
//       alert("Product already in cart!");
//       return;
//     }
//     addToCart(product, 1); // CartContext ensures stock is respected
//   };

//   const handleBuyNow = (product) => {
//     if (!isAuthenticated) {
//       alert("Please login to continue");
//       return;
//     }
//     if (product.stock === 0) {
//       alert("Product is out of stock");
//       return;
//     }
//     setSelectedProduct(product);
//     setQuantity(1);
//     setShowOrderFormPopup(true);
//   };

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmitOrder = async () => {
//     if (!selectedProduct) return;

//     const orderDetails = {
//       ...userDetails,
//       products: [
//         {
//           _id: selectedProduct._id,
//           name: selectedProduct.name,
//           price: selectedProduct.price,
//           itemsCount: quantity,
//           quantity: selectedProduct.quantity,
//           unit: selectedProduct.unit,
//         },
//       ],
//       totalAmount: Number(selectedProduct.price || 0) * quantity,
//     };

//     try {
//       await axios.post("http://localhost:5000/api/order", orderDetails);

//       // Update stock locally
//       setProducts((prev) =>
//         prev.map((p) =>
//           p._id === selectedProduct._id
//             ? { ...p, stock: p.stock - quantity }
//             : p
//         )
//       );

//       setShowOrderFormPopup(false);
//       clearCart();
//       setShowConfirmationPopup(true);
//     } catch (error) {
//       console.error("Error submitting order:", error);
//       alert("Order failed. Try again.");
//     }
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesSearchTerm = product.name
//       ?.toLowerCase()
//       ?.includes((searchTerm || "").toLowerCase());
//     const matchesCategory =
//       selectedCategory === "All" || product.category === selectedCategory;
//     return matchesSearchTerm && matchesCategory;
//   });

//   const uniqueCategories = [
//     "All",
//     ...Array.from(new Set(products.map((p) => p.category).filter(Boolean))),
//   ];

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
//           Discover Radiant Skin
//         </h1>
//         <p className="text-lg text-center text-gray-600 mb-12">
//           Explore premium skincare products for a glowing complexion.
//         </p>

//         {/* Categories */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <div key={product._id} className="bg-gray-100 rounded-lg shadow-lg p-6">
//                 <div
//                   onClick={() => navigate(`/product/${product._id}`)}
//                   className="cursor-pointer"
//                 >
//                   {product.image ? (
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-64 object-cover rounded-md mb-4"
//                     />
//                   ) : (
//                     <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                       <span className="text-gray-500">No image</span>
//                     </div>
//                   )}
//                   <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
//                   <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
//                   <p className="text-lg font-bold text-gray-800 mt-4">
//                     {formatINR(Number(product.price || 0))}
//                   </p>
//                   <p className="text-sm text-gray-600 mt-1">
//                     {`Per unit: ${product.quantity} ${product.unit}`}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     {product.stock > 0 ? `Available stock: ${product.stock}` : "Out of Stock"}
//                   </p>
//                 </div>

//                 <div className="mt-6 flex space-x-4">
//                   <button
//                     onClick={() => handleAddToCartClick(product)}
//                     className={`px-4 py-2 rounded-md ${
//                       cartItems.find((i) => i._id === product._id) || product.stock === 0
//                         ? "bg-gray-500 text-white cursor-not-allowed"
//                         : "bg-blue-400 hover:bg-blue-500 text-white"
//                     }`}
//                     disabled={!!cartItems.find((i) => i._id === product._id) || product.stock === 0}
//                   >
//                     {cartItems.find((i) => i._id === product._id)
//                       ? "Already in Cart"
//                       : product.stock === 0
//                       ? "Out of Stock"
//                       : "Add to Cart"}
//                   </button>
//                   <button
//                     onClick={() => handleBuyNow(product)}
//                     className={`px-4 py-2 rounded-md ${
//                       product.stock === 0
//                         ? "bg-gray-500 text-white cursor-not-allowed"
//                         : "bg-pink-400 hover:bg-pink-500 text-white"
//                     }`}
//                     disabled={product.stock === 0}
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}

//         {/* Order Form Popup */}
//         {showOrderFormPopup && selectedProduct && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid grid-cols-1 gap-4">
//               <h3 className="text-2xl font-semibold mb-4 text-center">Complete Your Order</h3>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={userDetails.name}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 w-full"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={userDetails.email}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 w-full"
//               />
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 value={userDetails.address}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 w-full"
//               />
//               <input
//                 type="text"
//                 name="contact"
//                 placeholder="Contact"
//                 value={userDetails.contact}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 w-full"
//               />

//               {/* Quantity input respecting stock */}
//               <div className="flex items-center space-x-2">
//                 <label className="font-semibold">Quantity:</label>
//                 <input
//                   type="number"
//                   min="1"
//                   max={selectedProduct.stock}
//                   value={quantity}
//                   onChange={(e) =>
//                     setQuantity(Math.min(Number(e.target.value), selectedProduct.stock))
//                   }
//                   className="border p-2 w-20"
//                 />
//                 <span className="text-sm text-gray-600">/ {selectedProduct.stock} available</span>
//               </div>

//               <button
//                 onClick={handleSubmitOrder}
//                 className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md mt-4 w-full"
//               >
//                 Submit Order
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Confirmation Popup */}
//         {showConfirmationPopup && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//               <h2 className="text-xl font-bold text-green-600 mb-4">
//                 Your order has been confirmed!
//               </h2>
//               <p className="text-lg text-gray-600">Thank you for choosing Derm Care!</p>
//               <button
//                 onClick={() => setShowConfirmationPopup(false)}
//                 className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;





























// // pages/Products.jsx
// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";
// import { CartContext } from "../context/CartContext";
// import { useNavigate } from "react-router-dom";

// const ProductPage = ({ searchTerm = "" }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const { cartItems, addToCart, clearCart } = useContext(CartContext);
//   const navigate = useNavigate();

//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [loadingProducts, setLoadingProducts] = useState(true);
//   const [userDetails, setUserDetails] = useState({
//     name: "",
//     email: "",
//     address: "",
//     contact: "",
//   });
//   const [quantity, setQuantity] = useState(1);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

//   // ✅ normalize category consistently
//   const normalizeCategory = (cat) =>
//     cat ? cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase() : "";

//   // Fetch products, refetch whenever cart or order changes
//   useEffect(() => {
//     let mounted = true;
//     setLoadingProducts(true);
//     const fetchProducts = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/products");
//         if (mounted) setProducts(res.data || []);
//       } catch (err) {
//         console.error("Fetch products error:", err);
//       } finally {
//         setLoadingProducts(false);
//       }
//     };
//     fetchProducts();
//     return () => {
//       mounted = false;
//     };
//   }, [cartItems, showOrderFormPopup]);

//   const handleCategoryChange = (category) => setSelectedCategory(category);

//   const formatINR = (n) =>
//     typeof n === "number"
//       ? n.toLocaleString("en-IN", { style: "currency", currency: "INR" })
//       : n;

//   const handleAddToCartClick = (product) => {
//     if (!isAuthenticated) {
//       alert("Please login to add items to cart");
//       return;
//     }
//     if (product.stock === 0) {
//       alert("Product is out of stock");
//       return;
//     }
//     const existingItem = cartItems.find((i) => i._id === product._id);
//     if (existingItem) {
//       alert("Product already in cart!");
//       return;
//     }
//     addToCart(product, 1); // CartContext ensures stock is respected
//   };

//   const handleBuyNow = (product) => {
//     if (!isAuthenticated) {
//       alert("Please login to continue");
//       return;
//     }
//     if (product.stock === 0) {
//       alert("Product is out of stock");
//       return;
//     }
//     setSelectedProduct(product);
//     setQuantity(1);
//     setShowOrderFormPopup(true);
//   };

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmitOrder = async () => {
//     if (!selectedProduct) return;

//     const orderDetails = {
//       ...userDetails,
//       products: [
//         {
//           _id: selectedProduct._id,
//           name: selectedProduct.name,
//           price: selectedProduct.price,
//           itemsCount: quantity,
//           quantity: selectedProduct.quantity,
//           unit: selectedProduct.unit,
//         },
//       ],
//       totalAmount: Number(selectedProduct.price || 0) * quantity,
//     };

//     try {
//       await axios.post("http://localhost:5000/api/order", orderDetails);

//       // Update stock locally
//       setProducts((prev) =>
//         prev.map((p) =>
//           p._id === selectedProduct._id
//             ? { ...p, stock: p.stock - quantity }
//             : p
//         )
//       );

//       setShowOrderFormPopup(false);
//       clearCart();
//       setShowConfirmationPopup(true);
//     } catch (error) {
//       console.error("Error submitting order:", error);
//       alert("Order failed. Try again.");
//     }
//   };

//   // ✅ apply normalization for filtering
//   const filteredProducts = products.filter((product) => {
//     const matchesSearchTerm = product.name
//       ?.toLowerCase()
//       ?.includes((searchTerm || "").toLowerCase());
//     const normalizedCategory = normalizeCategory(product.category);
//     const matchesCategory =
//       selectedCategory === "All" || normalizedCategory === selectedCategory;
//     return matchesSearchTerm && matchesCategory;
//   });

//   // ✅ unique categories with normalization
//   const uniqueCategories = [
//     "All",
//     ...Array.from(
//       new Set(
//         products
//           .map((p) => normalizeCategory(p.category))
//           .filter(Boolean)
//       )
//     ),
//   ];

//   return (
//     <div className="bg-white min-h-screen p-6">
//       <div className="max-w-7xl mx-auto">
//         <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
//           Discover Radiant Skin
//         </h1>
//         <p className="text-lg text-center text-gray-600 mb-12">
//           Explore premium skincare products for a glowing complexion.
//         </p>

//         {/* Categories */}
//         <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
//           {uniqueCategories.map((cat) => (
//             <button
//               key={cat}
//               onClick={() => handleCategoryChange(cat)}
//               className={`px-4 py-2 rounded ${
//                 selectedCategory === cat
//                   ? "bg-blue-500 text-white"
//                   : "bg-gray-200"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>

//         {/* Products Grid */}
//         {loadingProducts ? (
//           <p className="text-center text-gray-600">Loading products…</p>
//         ) : filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredProducts.map((product) => (
//               <div key={product._id} className="bg-gray-100 rounded-lg shadow-lg p-6">
//                 <div
//                   onClick={() => navigate(`/product/${product._id}`)}
//                   className="cursor-pointer"
//                 >
//                   {product.image ? (
//                     <img
//                       src={product.image}
//                       alt={product.name}
//                       className="w-full h-64 object-cover rounded-md mb-4"
//                     />
//                   ) : (
//                     <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
//                       <span className="text-gray-500">No image</span>
//                     </div>
//                   )}
//                   <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
//                   <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
//                   <p className="text-lg font-bold text-gray-800 mt-4">
//                     {formatINR(Number(product.price || 0))}
//                   </p>
//                   <p className="text-sm text-gray-600 mt-1">
//                     {`Per unit: ${product.quantity} ${product.unit}`}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     {product.stock > 0 ? `Available stock: ${product.stock}` : "Out of Stock"}
//                   </p>
//                   <p className="text-sm text-gray-600 mt-1">
//                     Category: {normalizeCategory(product.category)}
//                   </p>
//                 </div>

//                 <div className="mt-6 flex space-x-4">
//                   <button
//                     onClick={() => handleAddToCartClick(product)}
//                     className={`px-4 py-2 rounded-md ${
//                       cartItems.find((i) => i._id === product._id) || product.stock === 0
//                         ? "bg-gray-500 text-white cursor-not-allowed"
//                         : "bg-blue-400 hover:bg-blue-500 text-white"
//                     }`}
//                     disabled={!!cartItems.find((i) => i._id === product._id) || product.stock === 0}
//                   >
//                     {cartItems.find((i) => i._id === product._id)
//                       ? "Already in Cart"
//                       : product.stock === 0
//                       ? "Out of Stock"
//                       : "Add to Cart"}
//                   </button>
//                   <button
//                     onClick={() => handleBuyNow(product)}
//                     className={`px-4 py-2 rounded-md ${
//                       product.stock === 0
//                         ? "bg-gray-500 text-white cursor-not-allowed"
//                         : "bg-pink-400 hover:bg-pink-500 text-white"
//                     }`}
//                     disabled={product.stock === 0}
//                   >
//                     Buy Now
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-center text-gray-600">No products found</p>
//         )}

//         {/* Order Form Popup */}
//         {showOrderFormPopup && selectedProduct && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid grid-cols-1 gap-4">
//               <h3 className="text-2xl font-semibold mb-4 text-center">Complete Your Order</h3>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 value={userDetails.name}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 w-full"
//               />
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Email"
//                 value={userDetails.email}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 w-full"
//               />
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="Address"
//                 value={userDetails.address}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 w-full"
//               />
//               <input
//                 type="text"
//                 name="contact"
//                 placeholder="Contact"
//                 value={userDetails.contact}
//                 onChange={handleUserDetailsChange}
//                 className="border p-2 w-full"
//               />

//               {/* Quantity input respecting stock */}
//               <div className="flex items-center space-x-2">
//                 <label className="font-semibold">Quantity:</label>
//                 <input
//                   type="number"
//                   min="1"
//                   max={selectedProduct.stock}
//                   value={quantity}
//                   onChange={(e) =>
//                     setQuantity(Math.min(Number(e.target.value), selectedProduct.stock))
//                   }
//                   className="border p-2 w-20"
//                 />
//                 <span className="text-sm text-gray-600">/ {selectedProduct.stock} available</span>
//               </div>

//               <button
//                 onClick={handleSubmitOrder}
//                 className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md mt-4 w-full"
//               >
//                 Submit Order
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Confirmation Popup */}
//         {showConfirmationPopup && (
//           <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//               <h2 className="text-xl font-bold text-green-600 mb-4">
//                 Your order has been confirmed!
//               </h2>
//               <p className="text-lg text-gray-600">Thank you for choosing Derm Care!</p>
//               <button
//                 onClick={() => setShowConfirmationPopup(false)}
//                 className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProductPage;




// pages/Products.jsx
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductPage = ({ searchTerm = "" }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { cartItems, addToCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
    contact: "",
  });
  const [quantity, setQuantity] = useState(1);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  // ✅ normalize category consistently
  const normalizeCategory = (cat) =>
    cat ? cat.charAt(0).toUpperCase() + cat.slice(1).toLowerCase() : "";

  // Fetch products, refetch whenever cart or order changes
  useEffect(() => {
    let mounted = true;
    setLoadingProducts(true);
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        if (mounted) setProducts(res.data || []);
      } catch (err) {
        console.error("Fetch products error:", err);
      } finally {
        setLoadingProducts(false);
      }
    };
    fetchProducts();
    return () => {
      mounted = false;
    };
  }, [cartItems, showOrderFormPopup]);

  const handleCategoryChange = (category) => setSelectedCategory(category);

  const formatINR = (n) =>
    typeof n === "number"
      ? n.toLocaleString("en-IN", { style: "currency", currency: "INR" })
      : n;

  const handleAddToCartClick = (product) => {
    if (!isAuthenticated) {
      alert("Please login to add items to cart");
      return;
    }
    if (product.stock === 0) {
      alert("Product is out of stock");
      return;
    }
    const existingItem = cartItems.find((i) => i._id === product._id);
    if (existingItem) {
      alert("Product already in cart!");
      return;
    }
    addToCart(product, 1); // CartContext ensures stock is respected
  };

  const handleBuyNow = (product) => {
    if (!isAuthenticated) {
      alert("Please login to continue");
      return;
    }
    if (product.stock === 0) {
      alert("Product is out of stock");
      return;
    }
    setSelectedProduct(product);
    setQuantity(1);
    setShowOrderFormPopup(true);
  };

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = async () => {
    if (!selectedProduct) return;

    const orderDetails = {
      ...userDetails,
      products: [
        {
          _id: selectedProduct._id,
          name: selectedProduct.name,
          price: selectedProduct.price,
          itemsCount: quantity,
          quantity: selectedProduct.quantity,
          unit: selectedProduct.unit,
        },
      ],
      totalAmount: Number(selectedProduct.price || 0) * quantity,
    };

    try {
      await axios.post("http://localhost:5000/api/order", orderDetails);

      // Update stock locally
      setProducts((prev) =>
        prev.map((p) =>
          p._id === selectedProduct._id
            ? { ...p, stock: p.stock - quantity }
            : p
        )
      );

      setShowOrderFormPopup(false);
      clearCart();
      setShowConfirmationPopup(true);
    } catch (error) {
      console.error("Error submitting order:", error);
      alert("Order failed. Try again.");
    }
  };

  // ✅ apply normalization for filtering
  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name
      ?.toLowerCase()
      ?.includes((searchTerm || "").toLowerCase());
    const normalizedCategory = normalizeCategory(product.category);
    const matchesCategory =
      selectedCategory === "All" || normalizedCategory === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  // ✅ unique categories with normalization
  const uniqueCategories = [
    "All",
    ...Array.from(
      new Set(
        products
          .map((p) => normalizeCategory(p.category))
          .filter(Boolean)
      )
    ),
  ];

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Discover Radiant Skin
        </h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Explore premium skincare products for a glowing complexion.
        </p>

        {/* Categories */}
        <div className="text-center mb-8 flex flex-wrap gap-3 justify-center">
          {uniqueCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded ${
                selectedCategory === cat
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {loadingProducts ? (
          <p className="text-center text-gray-600">Loading products…</p>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product._id} className="bg-gray-100 rounded-lg shadow-lg p-6">
                <div
                  onClick={() => navigate(`/product/${product._id}`)}
                  className="cursor-pointer"
                >
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-cover rounded-md mb-4"
                    />
                  ) : (
                    <div className="w-full h-64 bg-gray-200 rounded-md mb-4 grid place-items-center">
                      <span className="text-gray-500">No image</span>
                    </div>
                  )}
                  <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-gray-600 mt-2 line-clamp-2">{product.description}</p>
                  <p className="text-lg font-bold text-gray-800 mt-4">
                    {formatINR(Number(product.price || 0))}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {`Per unit: ${product.quantity} ${product.unit}`}
                  </p>
                  <p className="text-sm text-gray-600">
                    {product.stock > 0 ? `Available stock: ${product.stock}` : "Out of Stock"}
                  </p>
                  {/* 🚫 Removed category line here */}
                </div>

                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={() => handleAddToCartClick(product)}
                    className={`px-4 py-2 rounded-md ${
                      cartItems.find((i) => i._id === product._id) || product.stock === 0
                        ? "bg-gray-500 text-white cursor-not-allowed"
                        : "bg-blue-400 hover:bg-blue-500 text-white"
                    }`}
                    disabled={!!cartItems.find((i) => i._id === product._id) || product.stock === 0}
                  >
                    {cartItems.find((i) => i._id === product._id)
                      ? "Already in Cart"
                      : product.stock === 0
                      ? "Out of Stock"
                      : "Add to Cart"}
                  </button>
                  <button
                    onClick={() => handleBuyNow(product)}
                    className={`px-4 py-2 rounded-md ${
                      product.stock === 0
                        ? "bg-gray-500 text-white cursor-not-allowed"
                        : "bg-pink-400 hover:bg-pink-500 text-white"
                    }`}
                    disabled={product.stock === 0}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">No products found</p>
        )}

        {/* Order Form Popup */}
        {showOrderFormPopup && selectedProduct && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid grid-cols-1 gap-4">
              <h3 className="text-2xl font-semibold mb-4 text-center">Complete Your Order</h3>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={userDetails.name}
                onChange={handleUserDetailsChange}
                className="border p-2 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userDetails.email}
                onChange={handleUserDetailsChange}
                className="border p-2 w-full"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={userDetails.address}
                onChange={handleUserDetailsChange}
                className="border p-2 w-full"
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact"
                value={userDetails.contact}
                onChange={handleUserDetailsChange}
                className="border p-2 w-full"
              />

              {/* Quantity input respecting stock */}
              <div className="flex items-center space-x-2">
                <label className="font-semibold">Quantity:</label>
                <input
                  type="number"
                  min="1"
                  max={selectedProduct.stock}
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.min(Number(e.target.value), selectedProduct.stock))
                  }
                  className="border p-2 w-20"
                />
                <span className="text-sm text-gray-600">/ {selectedProduct.stock} available</span>
              </div>

              <button
                onClick={handleSubmitOrder}
                className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md mt-4 w-full"
              >
                Submit Order
              </button>
            </div>
          </div>
        )}

        {/* Confirmation Popup */}
        {showConfirmationPopup && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-xl font-bold text-green-600 mb-4">
                Your order has been confirmed!
              </h2>
              <p className="text-lg text-gray-600">Thank you for choosing Derm Care!</p>
              <button
                onClick={() => setShowConfirmationPopup(false)}
                className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
