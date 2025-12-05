// import React, { useState } from 'react';
// import ProductPage from './ProductPage'; // Import your ProductPage component
// import Cart from './Cart'; // Import your Cart component

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleAddToCart = (product) => {
//     // Check if the product is already in the cart
//     if (!cartItems.find((item) => item.id === product.id)) {
//       setCartItems([...cartItems, product]);
//     } else {
//       alert('Product already exists in the cart!');
//     }
//   };

//   const handleBuyNow = (product) => {
//     // Implement buy now logic, e.g., add to cart and redirect to checkout
//     setCartItems([...cartItems, product]);
//     // Redirect or show checkout logic here
//   };

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   return (
//     <div>
//       <Navbar onSearch={handleSearch} cartItems={cartItems} onCartClick={() => {/* handle cart click logic */}} />
//       <ProductPage searchTerm={searchTerm} onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} />
//       <Cart cartItems={cartItems} />
//     </div>
//   );
// };

// export default App;




// import React from 'react';

// const Cart = ({ cartItems, onRemoveFromCart, onClearCart, onPayNow }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>

//       {cartItems.length > 0 ? (
//         <div>
//           {/* Display each cart item */}
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-4">
//                 <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                   <p className="text-gray-600">{item.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => onRemoveFromCart(item.id)}
//                 className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           {/* Cart Actions */}
//           <div className="flex justify-between mt-6">
//             <button
//               onClick={onClearCart}
//               className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
//             >
//               Close
//             </button>
//             <button
//               onClick={onPayNow}
//               className="bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-lg"
//             >
//               Pay Now
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500 text-lg">Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;










// import React from 'react';

// const Cart = ({ cartItems, onRemoveFromCart, onClearCart, onBuyNow }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>

//       {cartItems.length > 0 ? (
//         <div>
//           {/* Display each cart item */}
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-4">
//                 <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                   <p className="text-gray-600">{item.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => onRemoveFromCart(item.id)} // This will now correctly remove the specific item
//                 className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           {/* Cart Actions */}
//           <div className="flex justify-between mt-6">
//             <button
//               onClick={onClearCart}
//               className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
//             >
//               Close
//             </button>
//             <button
//               onClick={onBuyNow} // Replaces Pay Now with Buy Now
//               className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500 text-lg">Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;












// import React from 'react';

// const Cart = ({ cartItems, onRemoveFromCart, onClearCart, onBuyNow }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>

//       {cartItems.length > 0 ? (
//         <div>
//           {/* Display each cart item */}
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-4">
//                 <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                   <p className="text-gray-600">{item.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => onRemoveFromCart(item.id)} // This will now correctly remove the specific item
//                 className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           {/* Cart Actions */}
//           <div className="flex justify-between mt-6">
//             <button
//               onClick={onClearCart} // Just hides the cart, doesn't remove items
//               className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
//             >
//               Close
//             </button>
//             <button
//               onClick={onBuyNow} // Replaces Pay Now with Buy Now
//               className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500 text-lg">Your cart is empty.</p>
//       )}
//     </div>
//   );
// };

// export default Cart;














// //component/Cart.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const Cart = ({ cartItems, onRemoveFromCart, onClearCart, onBuyNow }) => {
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false); // Show order form popup
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });

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
//       products: cartItems, // Send all cart items
//       totalAmount: cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0),
//     };

//     try {
//       const response = await axios.post('http://localhost:5000/api/order', orderDetails);
//       alert('Order submitted successfully!');
//       onClearCart(); // Clear cart after successful order
//       setShowOrderFormPopup(false); // Close the order form popup
//     } catch (error) {
//       console.error('Error submitting order:', error);
//     }
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>

//       {cartItems.length > 0 ? (
//         <div>
//           {/* Display each cart item */}
//           {cartItems.map((item) => (
//             <div key={item.id} className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-4">
//                 <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                   <p className="text-gray-600">{item.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => onRemoveFromCart(item.id)} // This will now correctly remove the specific item
//                 className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           {/* Cart Actions */}
//           <div className="flex justify-between mt-6">
//             <button
//               onClick={onClearCart} // Just hides the cart, doesn't remove items
//               className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
//             >
//               Close
//             </button>
//             <button
//               onClick={() => setShowOrderFormPopup(true)} // Show the order form
//               className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500 text-lg">Your cart is empty.</p>
//       )}

//       {/* Order Form Popup */}
//       {showOrderFormPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid grid-cols-1 gap-8">
//             <div className="grid grid-cols-1 gap-4">
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
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;















// //component/Cart.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const Cart = ({ cartItems, onRemoveFromCart, onClearCart, onPayNow }) => {
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });

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
//       products: cartItems,
//       totalAmount: cartItems.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0),
//     };

//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       alert('Order submitted successfully!');
//       onClearCart();
//       setShowOrderFormPopup(false);
//     } catch (error) {
//       console.error('Error submitting order:', error);
//     }
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>

//       {cartItems.length > 0 ? (
//         <div>
//           {cartItems.map((item) => (
//             <div key={item._id} className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-4">
//                 <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                   <p className="text-gray-600">{item.price}</p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => onRemoveFromCart(item._id)}
//                 className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <div className="flex justify-between mt-6">
//             <button
//               onClick={onClearCart}
//               className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
//             >
//               Close
//             </button>
//             <button
//               onClick={() => setShowOrderFormPopup(true)}
//               className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500 text-lg">Your cart is empty.</p>
//       )}

//       {showOrderFormPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid grid-cols-1 gap-8">
//             <div className="grid grid-cols-1 gap-4">
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
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;












// //components/Cart.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const Cart = ({ cartItems, onRemoveFromCart, onClearCart }) => {
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmitOrder = async () => {
//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: cartItems,
//       totalAmount: cartItems.reduce(
//         (total, item) => total + Number(item.price) * (item.quantity || 1),
//         0
//       ),
//     };

//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       alert('Order submitted successfully!');
//       onClearCart();
//       setShowOrderFormPopup(false);
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       alert('Order submission failed');
//     }
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>

//       {cartItems.length > 0 ? (
//         <div>
//           {cartItems.map((item) => (
//             <div key={item._id} className="flex items-center justify-between mb-4">
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                   <p className="text-gray-600">
//                     {item.price} x {item.quantity || 1} ={' '}
//                     {Number(item.price) * (item.quantity || 1)}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => onRemoveFromCart(item._id)}
//                 className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <p className="text-right font-bold text-lg mt-4">
//             Total:{' '}
//             {cartItems.reduce(
//               (total, item) => total + Number(item.price) * (item.quantity || 1),
//               0
//             )}
//           </p>

//           <div className="flex justify-between mt-6">
//             <button
//               onClick={onClearCart}
//               className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
//             >
//               Clear Cart
//             </button>
//             <button
//               onClick={() => setShowOrderFormPopup(true)}
//               className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500 text-lg">Your cart is empty.</p>
//       )}

//       {showOrderFormPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid grid-cols-1 gap-6">
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
//     </div>
//   );
// };

// export default Cart;



















// // components/Cart.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const Cart = ({ cartItems, onRemoveFromCart, onClearCart }) => {
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const formatINR = (n) =>
//     typeof n === 'number'
//       ? n.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
//       : n;

//   const handleSubmitOrder = async () => {
//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: cartItems.map((item) => ({
//         _id: item._id,
//         name: item.name,
//         price: item.price,
//         itemsCount: item.itemsCount || 1,
//         quantity: item.quantity, // per item quantity
//         unit: item.unit,
//       })),
//       totalAmount: cartItems.reduce(
//         (total, item) => total + Number(item.price) * (item.itemsCount || 1),
//         0
//       ),
//     };

//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       alert('Order submitted successfully!');
//       onClearCart();
//       setShowOrderFormPopup(false);
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       alert('Order submission failed');
//     }
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>

//       {cartItems.length > 0 ? (
//         <div>
//           {cartItems.map((item) => (
//             <div
//               key={item._id}
//               className="flex items-center justify-between mb-4 border-b pb-4"
//             >
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {item.name}
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     Each item: {item.quantity} {item.unit}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     {formatINR(Number(item.price))} × {item.itemsCount || 1} ={' '}
//                     <span className="font-semibold">
//                       {formatINR(Number(item.price) * (item.itemsCount || 1))}
//                     </span>
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     Total content: {(item.itemsCount || 1) * item.quantity}{' '}
//                     {item.unit}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => onRemoveFromCart(item._id)}
//                 className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <p className="text-right font-bold text-lg mt-4">
//             Total:{' '}
//             {formatINR(
//               cartItems.reduce(
//                 (total, item) =>
//                   total + Number(item.price) * (item.itemsCount || 1),
//                 0
//               )
//             )}
//           </p>

//           <div className="flex justify-between mt-6">
//             <button
//               onClick={onClearCart}
//               className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
//             >
//               Clear Cart
//             </button>
//             <button
//               onClick={() => setShowOrderFormPopup(true)}
//               className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500 text-lg">Your cart is empty.</p>
//       )}

//       {showOrderFormPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid gap-6">
//             <h3 className="text-2xl font-semibold mb-4 text-center">
//               Complete Your Order
//             </h3>
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
//     </div>
//   );
// };

// export default Cart;












// // components/Cart.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const Cart = ({ cartItems, onRemoveFromCart, onClearCart }) => {
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const formatINR = (n) =>
//     typeof n === 'number'
//       ? n.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
//       : n;

//   const handleSubmitOrder = async () => {
//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: cartItems.map((item) => ({
//         _id: item._id,
//         name: item.name,
//         price: item.price,
//         itemsCount: item.itemsCount || 1,
//         quantity: item.quantity, // per item quantity
//         unit: item.unit,
//       })),
//       totalAmount: cartItems.reduce(
//         (total, item) => total + Number(item.price) * (item.itemsCount || 1),
//         0
//       ),
//     };

//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       alert('Order submitted successfully!');
//       onClearCart();
//       setShowOrderFormPopup(false);
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       alert('Order submission failed');
//     }
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>

//       {cartItems.length > 0 ? (
//         <div>
//           {cartItems.map((item) => (
//             <div
//               key={item._id}
//               className="flex items-center justify-between mb-4 border-b pb-4"
//             >
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {item.name}
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     Each item: {item.quantity} {item.unit}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     {formatINR(Number(item.price))} × {item.itemsCount || 1} ={' '}
//                     <span className="font-semibold">
//                       {formatINR(Number(item.price) * (item.itemsCount || 1))}
//                     </span>
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     Total content: {(item.itemsCount || 1) * item.quantity}{' '}
//                     {item.unit}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => onRemoveFromCart(item._id)}
//                 className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <p className="text-right font-bold text-lg mt-4">
//             Total:{' '}
//             {formatINR(
//               cartItems.reduce(
//                 (total, item) =>
//                   total + Number(item.price) * (item.itemsCount || 1),
//                 0
//               )
//             )}
//           </p>

//           <div className="flex justify-between mt-6">
//             <button
//               onClick={onClearCart}
//               className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
//             >
//               Clear Cart
//             </button>
//             <button
//               onClick={() => setShowOrderFormPopup(true)}
//               className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500 text-lg">Your cart is empty.</p>
//       )}

//       {showOrderFormPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid gap-6">
//             <h3 className="text-2xl font-semibold mb-4 text-center">
//               Complete Your Order
//             </h3>
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
//     </div>
//   );
// };

// export default Cart;






















// // components/Cart.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const Cart = ({ cartItems, onRemoveFromCart, onClearCart }) => {
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const formatINR = (n) =>
//     typeof n === 'number'
//       ? n.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
//       : n;

//   const handleSubmitOrder = async () => {
//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: cartItems.map((item) => ({
//         _id: item._id,
//         name: item.name,
//         price: item.price,
//         itemsCount: item.itemsCount || 1,
//         quantity: item.quantity,
//         unit: item.unit,
//       })),
//       totalAmount: cartItems.reduce(
//         (total, item) => total + Number(item.price) * (item.itemsCount || 1),
//         0
//       ),
//     };

//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       alert('Order submitted successfully!');
//       onClearCart();
//       setShowOrderFormPopup(false);
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       alert('Order submission failed');
//     }
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>

//       {cartItems.length > 0 ? (
//         <div>
//           {cartItems.map((item) => (
//             <div
//               key={item._id}
//               className="flex items-center justify-between mb-4 border-b pb-4"
//             >
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">
//                     {item.name}
//                   </h3>
//                   <p className="text-sm text-gray-600">
//                     Per unit: {item.quantity} {item.unit}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     {formatINR(Number(item.price))} × {item.itemsCount || 1} ={' '}
//                     <span className="font-semibold">
//                       {formatINR(Number(item.price) * (item.itemsCount || 1))}
//                     </span>
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     Total content: {(item.itemsCount || 1) * item.quantity}{' '}
//                     {item.unit}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => onRemoveFromCart(item._id)}
//                 className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <p className="text-right font-bold text-lg mt-4">
//             Total:{' '}
//             {formatINR(
//               cartItems.reduce(
//                 (total, item) =>
//                   total + Number(item.price) * (item.itemsCount || 1),
//                 0
//               )
//             )}
//           </p>

//           <div className="flex justify-between mt-6">
//             <button
//               onClick={onClearCart}
//               className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
//             >
//               Clear Cart
//             </button>
//             <button
//               onClick={() => setShowOrderFormPopup(true)}
//               className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500 text-lg">Your cart is empty.</p>
//       )}

//       {showOrderFormPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid gap-6">
//             <h3 className="text-2xl font-semibold mb-4 text-center">
//               Complete Your Order
//             </h3>
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
//     </div>
//   );
// };

// export default Cart;




















// //components/Cart.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const Cart = ({ cartItems, onRemoveFromCart, onClearCart, onUpdateCartItem }) => {
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const formatINR = (n) =>
//     typeof n === 'number'
//       ? n.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
//       : n;

//   const handleSubmitOrder = async () => {
//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: cartItems.map((item) => ({
//         _id: item._id,
//         name: item.name,
//         price: item.price,
//         itemsCount: item.itemsCount || 1,
//         quantity: item.quantity,
//         unit: item.unit,
//       })),
//       totalAmount: cartItems.reduce(
//         (total, item) => total + Number(item.price) * (item.itemsCount || 1),
//         0
//       ),
//     };

//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       alert('Order submitted successfully!');
//       onClearCart();
//       setShowOrderFormPopup(false);
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       alert('Order submission failed');
//     }
//   };

//   const handleChangeItemCount = (id, newCount) => {
//     if (newCount < 1) return;
//     onUpdateCartItem(id, newCount);
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>

//       {cartItems.length > 0 ? (
//         <div>
//           {cartItems.map((item) => (
//             <div
//               key={item._id}
//               className="flex items-center justify-between mb-4 border-b pb-4"
//             >
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                   <p className="text-sm text-gray-600">
//                     Per unit: {item.quantity} {item.unit}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     {formatINR(Number(item.price))} ×{' '}
//                     <input
//                       type="number"
//                       min="1"
//                       value={item.itemsCount || 1}
//                       onChange={(e) =>
//                         handleChangeItemCount(item._id, Number(e.target.value))
//                       }
//                       className="border px-2 py-1 w-16"
//                     />{' '}
//                     ={' '}
//                     <span className="font-semibold">
//                       {formatINR(Number(item.price) * (item.itemsCount || 1))}
//                     </span>
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     Total content: {(item.itemsCount || 1) * item.quantity} {item.unit}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => onRemoveFromCart(item._id)}
//                 className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <p className="text-right font-bold text-lg mt-4">
//             Total:{' '}
//             {formatINR(
//               cartItems.reduce(
//                 (total, item) => total + Number(item.price) * (item.itemsCount || 1),
//                 0
//               )
//             )}
//           </p>

//           <div className="flex justify-between mt-6">
//             <button
//               onClick={onClearCart}
//               className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
//             >
//               Clear Cart
//             </button>
//             <button
//               onClick={() => setShowOrderFormPopup(true)}
//               className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500 text-lg">Your cart is empty.</p>
//       )}

//       {showOrderFormPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid gap-6">
//             <h3 className="text-2xl font-semibold mb-4 text-center">
//               Complete Your Order
//             </h3>
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
//     </div>
//   );
// };

// export default Cart;















// // components/Cart.jsx
// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import { CartContext } from '../context/CartContext';

// const Cart = () => {
//   const { cartItems, removeFromCart, clearCart, updateCartItem } = useContext(CartContext);
//   const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//     address: '',
//     contact: '',
//   });

//   const handleUserDetailsChange = (e) => {
//     const { name, value } = e.target;
//     setUserDetails((prev) => ({ ...prev, [name]: value }));
//   };

//   const formatINR = (n) =>
//     typeof n === 'number'
//       ? n.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
//       : n;

//   const handleSubmitOrder = async () => {
//     if (cartItems.length === 0) {
//       alert('Cart is empty!');
//       return;
//     }

//     const orderDetails = {
//       name: userDetails.name,
//       email: userDetails.email,
//       address: userDetails.address,
//       contact: userDetails.contact,
//       products: cartItems.map((item) => ({
//         _id: item._id,
//         name: item.name,
//         price: item.price,
//         itemsCount: item.itemsCount || 1,
//         quantity: item.quantity,
//         unit: item.unit,
//       })),
//       totalAmount: cartItems.reduce(
//         (total, item) => total + Number(item.price) * (item.itemsCount || 1),
//         0
//       ),
//     };

//     try {
//       await axios.post('http://localhost:5000/api/order', orderDetails);
//       alert('Order submitted successfully!');
//       clearCart();
//       setShowOrderFormPopup(false);
//     } catch (error) {
//       console.error('Error submitting order:', error);
//       alert('Order submission failed');
//     }
//   };

//   const handleChangeItemCount = (id, newCount) => {
//     if (newCount < 1) return;
//     updateCartItem(id, newCount);
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl mx-auto">
//       <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>

//       {cartItems.length > 0 ? (
//         <div>
//           {cartItems.map((item) => (
//             <div
//               key={item._id}
//               className="flex items-center justify-between mb-4 border-b pb-4"
//             >
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="w-20 h-20 object-cover rounded-md"
//                 />
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//                   <p className="text-sm text-gray-600">
//                     Per unit: {item.quantity} {item.unit}
//                   </p>
//                   <p className="text-sm text-gray-600">
//                     {formatINR(Number(item.price))} ×{' '}
//                     <input
//                       type="number"
//                       min="1"
//                       value={item.itemsCount || 1}
//                       onChange={(e) =>
//                         handleChangeItemCount(item._id, Number(e.target.value))
//                       }
//                       className="border px-2 py-1 w-16"
//                     />{' '}
//                     ={' '}
//                     <span className="font-semibold">
//                       {formatINR(Number(item.price) * (item.itemsCount || 1))}
//                     </span>
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     Total content: {(item.itemsCount || 1) * item.quantity} {item.unit}
//                   </p>
//                 </div>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item._id)}
//                 className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
//               >
//                 Remove
//               </button>
//             </div>
//           ))}

//           <p className="text-right font-bold text-lg mt-4">
//             Total:{' '}
//             {formatINR(
//               cartItems.reduce(
//                 (total, item) => total + Number(item.price) * (item.itemsCount || 1),
//                 0
//               )
//             )}
//           </p>

//           <div className="flex justify-between mt-6">
//             <button
//               onClick={clearCart}
//               className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
//             >
//               Clear Cart
//             </button>
//             <button
//               onClick={() => setShowOrderFormPopup(true)}
//               className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg"
//             >
//               Buy Now
//             </button>
//           </div>
//         </div>
//       ) : (
//         <p className="text-gray-500 text-lg">Your cart is empty.</p>
//       )}

//       {showOrderFormPopup && (
//         <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
//           <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid gap-6">
//             <h3 className="text-2xl font-semibold mb-4 text-center">
//               Complete Your Order
//             </h3>
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
//     </div>
//   );
// };

// export default Cart;






// components/Cart.jsx
import React, { useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, updateCartItem } = useContext(CartContext);
  const [showOrderFormPopup, setShowOrderFormPopup] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
  });

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const formatINR = (n) =>
    typeof n === 'number'
      ? n.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })
      : n;

  const handleSubmitOrder = async () => {
    if (cartItems.length === 0) {
      alert('Cart is empty!');
      return;
    }

    const orderDetails = {
      ...userDetails,
      products: cartItems.map((item) => ({
        _id: item._id,
        name: item.name,
        price: item.price,
        itemsCount: item.itemsCount || 1,
        quantity: item.quantity,
        unit: item.unit,
      })),
      totalAmount: cartItems.reduce(
        (total, item) => total + Number(item.price) * (item.itemsCount || 1),
        0
      ),
    };

    try {
      await axios.post('http://localhost:5000/api/order', orderDetails);
      alert('Order submitted successfully!');
      clearCart();
      setShowOrderFormPopup(false);
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Order submission failed');
    }
  };

  const handleChangeItemCount = (id, newCount, stock) => {
    if (newCount < 1) return;
    updateCartItem(id, newCount, stock);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Cart</h2>

      {cartItems.length > 0 ? (
        <div>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between mb-4 border-b pb-4"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    Per unit: {item.quantity} {item.unit}
                  </p>
                  <p className="text-sm text-gray-600">
                    {formatINR(Number(item.price))} ×{' '}
                    <input
                      type="number"
                      min="1"
                      max={item.stock}
                      value={item.itemsCount || 1}
                      onChange={(e) =>
                        handleChangeItemCount(item._id, Number(e.target.value), item.stock)
                      }
                      className="border px-2 py-1 w-16"
                    />{' '}
                    ={' '}
                    <span className="font-semibold">
                      {formatINR(Number(item.price) * (item.itemsCount || 1))}
                    </span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Total content: {(item.itemsCount || 1) * item.quantity} {item.unit}
                  </p>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item._id)}
                className="bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          ))}

          <p className="text-right font-bold text-lg mt-4">
            Total:{' '}
            {formatINR(
              cartItems.reduce(
                (total, item) => total + Number(item.price) * (item.itemsCount || 1),
                0
              )
            )}
          </p>

          <div className="flex justify-between mt-6">
            <button
              onClick={clearCart}
              className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-3 rounded-lg"
            >
              Clear Cart
            </button>
            <button
              onClick={() => setShowOrderFormPopup(true)}
              className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-lg"
            >
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      )}

      {showOrderFormPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid gap-6">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Complete Your Order
            </h3>
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
            <button
              onClick={handleSubmitOrder}
              className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md w-full"
            >
              Submit Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
