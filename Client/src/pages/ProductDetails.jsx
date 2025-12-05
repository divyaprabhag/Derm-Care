// // src/pages/ProductDetails.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const ProductDetails = ({ onAddToCart }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const { id } = useParams(); // get product ID from URL
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [quantity, setQuantity] = useState(1);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

//   // Fetch product by ID
//   useEffect(() => {
//     let mounted = true;
//     setLoading(true);
//     axios
//       .get(`http://localhost:5000/api/products/${id}`)
//       .then((res) => {
//         if (mounted) setProduct(res.data);
//       })
//       .catch((err) => console.error('Error fetching product:', err))
//       .finally(() => setLoading(false));

//     return () => (mounted = false);
//   }, [id]);

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddToCart = () => {
//     if (!isAuthenticated) {
//       alert('Please login to add items to cart');
//       return;
//     }
//     onAddToCart({ ...product, quantity });
//     alert('Product added to cart');
//     navigate('/products');
//   };

//   const handleBuyNow = async () => {
//     if (!isAuthenticated) {
//       alert('Please login to continue');
//       return;
//     }
//     setShowOrderFormPopup(true);
//   };

//   const handleSubmitOrder = async () => {
//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: [
//         {
//           _id: product._id,
//           name: product.name,
//           price: product.price,
//           quantity,
//         },
//       ],
//       totalAmount: Number(product.price) * quantity,
//     };

//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       setShowOrderFormPopup(false);
//       setShowConfirmationPopup(true);
//     } catch (error) {
//       console.error('Order submission error:', error);
//       alert('Order failed. Try again.');
//     }
//   };

//   const formatINR = (n) =>
//     typeof n === 'number'
//       ? n.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
//       : n;

//   if (loading) return <p className="text-center mt-10">Loading product...</p>;
//   if (!product) return <p className="text-center mt-10">Product not found</p>;

//   return (
//     <div className="bg-white min-h-screen p-6 max-w-4xl mx-auto">
//       <button
//         onClick={() => navigate('/products')}
//         className="mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
//       >
//         &larr; Back to Products
//       </button>

//       <div className="flex flex-col md:flex-row gap-6">
//         <div className="md:w-1/2">
//           {product.image ? (
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-96 object-cover rounded-md"
//             />
//           ) : (
//             <div className="w-full h-96 bg-gray-200 rounded-md grid place-items-center">
//               <span className="text-gray-500">No image</span>
//             </div>
//           )}
//         </div>

//         <div className="md:w-1/2 flex flex-col gap-4">
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="text-gray-600">{product.description}</p>
//           <p className="text-2xl font-bold mt-2">{formatINR(Number(product.price))}</p>

//           <div className="flex items-center gap-4 mt-4">
//             <label>Quantity:</label>
//             <input
//               type="number"
//               min="1"
//               value={quantity}
//               onChange={(e) => setQuantity(Number(e.target.value))}
//               className="border p-2 w-20"
//             />
//           </div>

//           <div className="flex gap-4 mt-6">
//             <button
//               onClick={handleAddToCart}
//               className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
//             >
//               Add to Cart
//             </button>
//             <button
//               onClick={handleBuyNow}
//               className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Order Form Popup */}
//       {showOrderFormPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid gap-4">
//             <h3 className="text-2xl font-semibold mb-4 text-center">Complete Your Order</h3>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={userDetails.name}
//               onChange={handleUserDetailsChange}
//               className="border p-2 w-full"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={userDetails.email}
//               onChange={handleUserDetailsChange}
//               className="border p-2 w-full"
//             />
//             <input
//               type="text"
//               name="address"
//               placeholder="Address"
//               value={userDetails.address}
//               onChange={handleUserDetailsChange}
//               className="border p-2 w-full"
//             />
//             <input
//               type="text"
//               name="contact"
//               placeholder="Contact"
//               value={userDetails.contact}
//               onChange={handleUserDetailsChange}
//               className="border p-2 w-full"
//             />
//             <button
//               onClick={handleSubmitOrder}
//               className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md w-full"
//             >
//               Submit Order
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Confirmation */}
//       {showConfirmationPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h2 className="text-xl font-bold text-green-600 mb-4">
//               Your order has been confirmed!
//             </h2>
//             <p className="text-lg text-gray-600">Thank you for choosing Derm Care!</p>
//             <button
//               onClick={() => setShowConfirmationPopup(false)}
//               className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;













// // src/pages/ProductDetails.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const ProductDetails = ({ onAddToCart }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [itemsCount, setItemsCount] = useState(1); // how many pieces user wants
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

//   useEffect(() => {
//     let mounted = true;
//     setLoading(true);
//     axios
//       .get(`http://localhost:5000/api/products/${id}`)
//       .then((res) => {
//         if (mounted) setProduct(res.data);
//       })
//       .catch((err) => console.error('Error fetching product:', err))
//       .finally(() => setLoading(false));
//     return () => (mounted = false);
//   }, [id]);

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddToCart = () => {
//     if (!isAuthenticated) {
//       alert('Please login to add items to cart');
//       return;
//     }
//     onAddToCart({ ...product, itemsCount }); // pass items count
//     alert('Product added to cart');
//     navigate('/cart');
//   };

//   const handleBuyNow = () => {
//     if (!isAuthenticated) {
//       alert('Please login to continue');
//       return;
//     }
//     setShowOrderFormPopup(true);
//   };

//   const handleSubmitOrder = async () => {
//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: [
//         {
//           _id: product._id,
//           name: product.name,
//           price: product.price,
//           itemsCount,
//           quantity: product.quantity, // per item
//           unit: product.unit,
//         },
//       ],
//       totalAmount: Number(product.price) * itemsCount,
//     };

//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       setShowOrderFormPopup(false);
//       setShowConfirmationPopup(true);
//     } catch (error) {
//       console.error('Order submission error:', error);
//       alert('Order failed. Try again.');
//     }
//   };

//   const formatINR = (n) =>
//     typeof n === 'number'
//       ? n.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
//       : n;

//   if (loading) return <p className="text-center mt-10">Loading product...</p>;
//   if (!product) return <p className="text-center mt-10">Product not found</p>;

//   return (
//     <div className="bg-white min-h-screen p-6 max-w-4xl mx-auto">
//       <button
//         onClick={() => navigate('/products')}
//         className="mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
//       >
//         &larr; Back to Products
//       </button>

//       <div className="flex flex-col md:flex-row gap-6">
//         <div className="md:w-1/2">
//           {product.image ? (
//             <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-md" />
//           ) : (
//             <div className="w-full h-96 bg-gray-200 rounded-md grid place-items-center">
//               <span className="text-gray-500">No image</span>
//             </div>
//           )}
//         </div>

//         <div className="md:w-1/2 flex flex-col gap-4">
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="text-gray-600">{product.description}</p>
//           <p className="text-2xl font-bold mt-2">{formatINR(Number(product.price))}</p>

//           <p className="text-sm text-gray-600 mt-1">
//             {`Each item: ${product.quantity} ${product.unit}`}
//           </p>
//           <p className="text-sm text-gray-600">
//             {`Available stock: ${product.stock} items`}
//           </p>

//           <div className="flex items-center gap-4 mt-4">
//             <label>Items to buy:</label>
//             <input
//               type="number"
//               min="1"
//               max={product.stock}
//               value={itemsCount}
//               onChange={(e) => setItemsCount(Number(e.target.value))}
//               className="border p-2 w-20"
//             />
//           </div>

//           <div className="flex gap-4 mt-6">
//             <button
//               onClick={handleAddToCart}
//               className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded"
//             >
//               Add to Cart
//             </button>
//             <button
//               onClick={handleBuyNow}
//               className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Order Form Popup */}
//       {showOrderFormPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid gap-4">
//             <h3 className="text-2xl font-semibold mb-4 text-center">Complete Your Order</h3>
//             <input type="text" name="name" placeholder="Name" value={userDetails.name} onChange={handleUserDetailsChange} className="border p-2 w-full" />
//             <input type="email" name="email" placeholder="Email" value={userDetails.email} onChange={handleUserDetailsChange} className="border p-2 w-full" />
//             <input type="text" name="address" placeholder="Address" value={userDetails.address} onChange={handleUserDetailsChange} className="border p-2 w-full" />
//             <input type="text" name="contact" placeholder="Contact" value={userDetails.contact} onChange={handleUserDetailsChange} className="border p-2 w-full" />
//             <button onClick={handleSubmitOrder} className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md w-full">
//               Submit Order
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Confirmation */}
//       {showConfirmationPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h2 className="text-xl font-bold text-green-600 mb-4">Your order has been confirmed!</h2>
//             <p className="text-lg text-gray-600">Thank you for choosing Derm Care!</p>
//             <button
//               onClick={() => setShowConfirmationPopup(false)}
//               className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;
























// // src/pages/ProductDetails.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const ProductDetails = ({ onAddToCart }) => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [itemsCount, setItemsCount] = useState(1);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

//   useEffect(() => {
//     let mounted = true;
//     setLoading(true);
//     axios
//       .get(`http://localhost:5000/api/products/${id}`)
//       .then((res) => {
//         if (mounted) setProduct(res.data);
//       })
//       .catch((err) => console.error('Error fetching product:', err))
//       .finally(() => setLoading(false));
//     return () => (mounted = false);
//   }, [id]);

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddToCart = () => {
//     if (!isAuthenticated) {
//       alert('Please login to add items to cart');
//       return;
//     }
//     if (product.stock === 0) {
//       alert('Product is out of stock');
//       return;
//     }
//     onAddToCart({ ...product, itemsCount });
//     alert('Product added to cart');
//     navigate('/cart');
//   };

//   const handleBuyNow = () => {
//     if (!isAuthenticated) {
//       alert('Please login to continue');
//       return;
//     }
//     if (product.stock === 0) {
//       alert('Product is out of stock');
//       return;
//     }
//     setShowOrderFormPopup(true);
//   };

//   const handleSubmitOrder = async () => {
//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: [
//         {
//           _id: product._id,
//           name: product.name,
//           price: product.price,
//           itemsCount,
//           quantity: product.quantity,
//           unit: product.unit,
//         },
//       ],
//       totalAmount: Number(product.price) * itemsCount,
//     };

//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       setShowOrderFormPopup(false);
//       setShowConfirmationPopup(true);
//     } catch (error) {
//       console.error('Order submission error:', error);
//       alert('Order failed. Try again.');
//     }
//   };

//   const formatINR = (n) =>
//     typeof n === 'number'
//       ? n.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
//       : n;

//   if (loading) return <p className="text-center mt-10">Loading product...</p>;
//   if (!product) return <p className="text-center mt-10">Product not found</p>;

//   return (
//     <div className="bg-white min-h-screen p-6 max-w-4xl mx-auto">
//       <button
//         onClick={() => navigate('/products')}
//         className="mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
//       >
//         &larr; Back to Products
//       </button>

//       <div className="flex flex-col md:flex-row gap-6">
//         <div className="md:w-1/2">
//           {product.image ? (
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-96 object-cover rounded-md"
//             />
//           ) : (
//             <div className="w-full h-96 bg-gray-200 rounded-md grid place-items-center">
//               <span className="text-gray-500">No image</span>
//             </div>
//           )}
//         </div>

//         <div className="md:w-1/2 flex flex-col gap-4">
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="text-gray-600">{product.description}</p>
//           <p className="text-2xl font-bold mt-2">{formatINR(Number(product.price))}</p>

//           <p className="text-sm text-gray-600 mt-1">
//             {`Per unit: ${product.quantity} ${product.unit}`}
//           </p>
//           <p className="text-sm text-gray-600">
//             {product.stock > 0 ? `Available stock: ${product.stock}` : 'Out of Stock'}
//           </p>

//           <div className="flex items-center gap-4 mt-4">
//             <label>Items to buy:</label>
//             <input
//               type="number"
//               min="1"
//               max={product.stock}
//               value={itemsCount}
//               onChange={(e) => setItemsCount(Number(e.target.value))}
//               className="border p-2 w-20"
//             />
//           </div>

//           <div className="flex gap-4 mt-6">
//             <button
//               onClick={handleAddToCart}
//               className={`px-6 py-2 rounded ${
//                 product.stock === 0
//                   ? 'bg-gray-500 text-white cursor-not-allowed'
//                   : 'bg-blue-500 hover:bg-blue-600 text-white'
//               }`}
//               disabled={product.stock === 0}
//             >
//               Add to Cart
//             </button>
//             <button
//               onClick={handleBuyNow}
//               className={`px-6 py-2 rounded ${
//                 product.stock === 0
//                   ? 'bg-gray-500 text-white cursor-not-allowed'
//                   : 'bg-pink-500 hover:bg-pink-600 text-white'
//               }`}
//               disabled={product.stock === 0}
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Order Form Popup */}
//       {showOrderFormPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid gap-4">
//             <h3 className="text-2xl font-semibold mb-4 text-center">Complete Your Order</h3>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={userDetails.name}
//               onChange={handleUserDetailsChange}
//               className="border p-2 w-full"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={userDetails.email}
//               onChange={handleUserDetailsChange}
//               className="border p-2 w-full"
//             />
//             <input
//               type="text"
//               name="address"
//               placeholder="Address"
//               value={userDetails.address}
//               onChange={handleUserDetailsChange}
//               className="border p-2 w-full"
//             />
//             <input
//               type="text"
//               name="contact"
//               placeholder="Contact"
//               value={userDetails.contact}
//               onChange={handleUserDetailsChange}
//               className="border p-2 w-full"
//             />
//             <button
//               onClick={handleSubmitOrder}
//               className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md w-full"
//             >
//               Submit Order
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Confirmation Popup */}
//       {showConfirmationPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h2 className="text-xl font-bold text-green-600 mb-4">
//               Your order has been confirmed!
//             </h2>
//             <p className="text-lg text-gray-600">Thank you for choosing Derm Care!</p>
//             <button
//               onClick={() => setShowConfirmationPopup(false)}
//               className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;






















// // src/pages/ProductDetails.jsx
// import React, { useEffect, useState, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';
// import { CartContext } from '../context/CartContext';

// const ProductDetails = () => {
//   const { isAuthenticated } = useContext(AuthContext);
//   const { cartItems, addToCart, clearCart } = useContext(CartContext);
//   const { id } = useParams();
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [itemsCount, setItemsCount] = useState(1);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

//   useEffect(() => {
//     let mounted = true;
//     setLoading(true);
//     axios
//       .get(`http://localhost:5000/api/products/${id}`)
//       .then((res) => {
//         if (mounted) setProduct(res.data);
//       })
//       .catch((err) => console.error('Error fetching product:', err))
//       .finally(() => setLoading(false));
//     return () => (mounted = false);
//   }, [id]);

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleAddToCartClick = () => {
//     if (!isAuthenticated) {
//       alert('Please login to add items to cart');
//       return;
//     }
//     if (product.stock === 0) {
//       alert('Product is out of stock');
//       return;
//     }
//     if (cartItems.find((i) => i._id === product._id)) {
//       alert('Product already in cart!');
//       return;
//     }
//     addToCart(product, itemsCount);
//     navigate('/cart');
//   };

//   const handleBuyNow = () => {
//     if (!isAuthenticated) {
//       alert('Please login to continue');
//       return;
//     }
//     if (product.stock === 0) {
//       alert('Product is out of stock');
//       return;
//     }
//     setShowOrderFormPopup(true);
//   };

//   const handleSubmitOrder = async () => {
//     if (!product) return;

//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: [
//         {
//           _id: product._id,
//           name: product.name,
//           price: product.price,
//           quantity: itemsCount,
//           unit: product.unit,
//         },
//       ],
//       totalAmount: Number(product.price || 0) * itemsCount,
//     };

//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       setShowOrderFormPopup(false);
//       clearCart();
//       setShowConfirmationPopup(true);
//     } catch (error) {
//       console.error('Order submission error:', error);
//       alert('Order failed. Try again.');
//     }
//   };

//   const formatINR = (n) =>
//     typeof n === 'number'
//       ? n.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
//       : n;

//   if (loading) return <p className="text-center mt-10">Loading product...</p>;
//   if (!product) return <p className="text-center mt-10">Product not found</p>;

//   return (
//     <div className="bg-white min-h-screen p-6 max-w-4xl mx-auto">
//       <button
//         onClick={() => navigate('/shop')}
//         className="mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
//       >
//         &larr; Back to Products
//       </button>

//       <div className="flex flex-col md:flex-row gap-6">
//         <div className="md:w-1/2">
//           {product.image ? (
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-96 object-cover rounded-md"
//             />
//           ) : (
//             <div className="w-full h-96 bg-gray-200 rounded-md grid place-items-center">
//               <span className="text-gray-500">No image</span>
//             </div>
//           )}
//         </div>

//         <div className="md:w-1/2 flex flex-col gap-4">
//           <h1 className="text-3xl font-bold">{product.name}</h1>
//           <p className="text-gray-600">{product.description}</p>
//           <p className="text-2xl font-bold mt-2">{formatINR(Number(product.price))}</p>

//           <p className="text-sm text-gray-600 mt-1">
//             {`Per unit: ${product.quantity} ${product.unit}`}
//           </p>
//           <p className="text-sm text-gray-600">
//             {product.stock > 0 ? `Available stock: ${product.stock}` : 'Out of Stock'}
//           </p>

//           <div className="flex items-center gap-4 mt-4">
//             <label>Items to buy:</label>
//             <input
//               type="number"
//               min="1"
//               max={product.stock}
//               value={itemsCount}
//               onChange={(e) => setItemsCount(Number(e.target.value))}
//               className="border p-2 w-20"
//             />
//           </div>

//           <div className="flex gap-4 mt-6">
//             <button
//               onClick={handleAddToCartClick}
//               className={`px-6 py-2 rounded ${
//                 product.stock === 0
//                   ? 'bg-gray-500 text-white cursor-not-allowed'
//                   : 'bg-blue-500 hover:bg-blue-600 text-white'
//               }`}
//               disabled={product.stock === 0}
//             >
//               Add to Cart
//             </button>
//             <button
//               onClick={handleBuyNow}
//               className={`px-6 py-2 rounded ${
//                 product.stock === 0
//                   ? 'bg-gray-500 text-white cursor-not-allowed'
//                   : 'bg-pink-500 hover:bg-pink-600 text-white'
//               }`}
//               disabled={product.stock === 0}
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Order Form Popup */}
//       {showOrderFormPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid gap-4">
//             <h3 className="text-2xl font-semibold mb-4 text-center">Complete Your Order</h3>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={userDetails.name}
//               onChange={handleUserDetailsChange}
//               className="border p-2 w-full"
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={userDetails.email}
//               onChange={handleUserDetailsChange}
//               className="border p-2 w-full"
//             />
//             <input
//               type="text"
//               name="address"
//               placeholder="Address"
//               value={userDetails.address}
//               onChange={handleUserDetailsChange}
//               className="border p-2 w-full"
//             />
//             <input
//               type="text"
//               name="contact"
//               placeholder="Contact"
//               value={userDetails.contact}
//               onChange={handleUserDetailsChange}
//               className="border p-2 w-full"
//             />
//             <button
//               onClick={handleSubmitOrder}
//               className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md w-full"
//             >
//               Submit Order
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Confirmation Popup */}
//       {showConfirmationPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
//             <h2 className="text-xl font-bold text-green-600 mb-4">
//               Your order has been confirmed!
//             </h2>
//             <p className="text-lg text-gray-600">Thank you for choosing Derm Care!</p>
//             <button
//               onClick={() => setShowConfirmationPopup(false)}
//               className="mt-4 px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductDetails;





// src/pages/ProductDetails.jsx
import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const ProductDetails = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { cartItems, addToCart, clearCart } = useContext(CartContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [itemsCount, setItemsCount] = useState(1);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
  });
  const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then((res) => {
        if (mounted) setProduct(res.data);
      })
      .catch((err) => console.error('Error fetching product:', err))
      .finally(() => setLoading(false));
    return () => (mounted = false);
  }, [id]);

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddToCartClick = () => {
    if (!isAuthenticated) {
      alert('Please login to add items to cart');
      return;
    }
    if (product.stock === 0) {
      alert('Product is out of stock');
      return;
    }
    if (cartItems.find((i) => i._id === product._id)) {
      alert('Product already in cart!');
      return;
    }
    addToCart(product, itemsCount); // respect stock
    navigate('/cart');
  };

  const handleBuyNow = () => {
    if (!isAuthenticated) {
      alert('Please login to continue');
      return;
    }
    if (product.stock === 0) {
      alert('Product is out of stock');
      return;
    }
    setShowOrderFormPopup(true);
  };

  const handleSubmitOrder = async () => {
    if (!product) return;

    const orderDetails = {
      ...userDetails,
      products: [
        {
          _id: product._id,
          name: product.name,
          price: product.price,
          quantity: itemsCount,
          unit: product.unit,
        },
      ],
      totalAmount: Number(product.price || 0) * itemsCount,
    };

    try {
      await axios.post('http://localhost:5000/api/order', orderDetails);
      setShowOrderFormPopup(false);
      clearCart();
      setShowConfirmationPopup(true);
    } catch (error) {
      console.error('Order submission error:', error);
      alert('Order failed. Try again.');
    }
  };

  const formatINR = (n) =>
    typeof n === 'number'
      ? n.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
      : n;

  if (loading) return <p className="text-center mt-10">Loading product...</p>;
  if (!product) return <p className="text-center mt-10">Product not found</p>;

  return (
    <div className="bg-white min-h-screen p-6 max-w-4xl mx-auto">
      <button
        onClick={() => navigate('/shop')}
        className="mb-4 px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded"
      >
        &larr; Back to Products
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-md"
            />
          ) : (
            <div className="w-full h-96 bg-gray-200 rounded-md grid place-items-center">
              <span className="text-gray-500">No image</span>
            </div>
          )}
        </div>

        <div className="md:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-2xl font-bold mt-2">{formatINR(Number(product.price))}</p>

          <p className="text-sm text-gray-600 mt-1">
            {`Per unit: ${product.quantity} ${product.unit}`}
          </p>
          <p className="text-sm text-gray-600">
            {product.stock > 0 ? `Available stock: ${product.stock}` : 'Out of Stock'}
          </p>

          <div className="flex items-center gap-4 mt-4">
            <label>Items to buy:</label>
            <input
              type="number"
              min="1"
              max={product.stock}
              value={itemsCount}
              onChange={(e) =>
                setItemsCount(Math.min(Number(e.target.value), product.stock))
              }
              className="border p-2 w-20"
            />
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={handleAddToCartClick}
              className={`px-6 py-2 rounded ${
                product.stock === 0
                  ? 'bg-gray-500 text-white cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600 text-white'
              }`}
              disabled={product.stock === 0}
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className={`px-6 py-2 rounded ${
                product.stock === 0
                  ? 'bg-gray-500 text-white cursor-not-allowed'
                  : 'bg-pink-500 hover:bg-pink-600 text-white'
              }`}
              disabled={product.stock === 0}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Order Form Popup */}
      {showOrderFormPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid gap-4">
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
                max={product.stock}
                value={itemsCount}
                onChange={(e) =>
                  setItemsCount(Math.min(Number(e.target.value), product.stock))
                }
                className="border p-2 w-20"
              />
              <span className="text-sm text-gray-600">/ {product.stock} available</span>
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
  );
};

export default ProductDetails;
