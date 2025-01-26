import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './assets/css/core.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Blog from './pages/Blog';
import ProductPage from './pages/Products';
import Cart from './components/Cart';
import Chatbot from './pages/chatbot';
import axios from 'axios';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setCartVisible] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showOrderFormPopup, setShowOrderFormPopup] = useState(false); 
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false); 

  const handleSearch = (term) => setSearchTerm(term);

  const handleAddToCart = (product) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
    } else {
      alert('Product already exists in the cart!');
    }
  };

  const handleRemoveFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId)); 
  };

  const handleClearCart = () => {
    setCartVisible(false); 
  };

  const toggleCart = () => setCartVisible(!isCartVisible);

  const handleUserDetailsChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmitOrder = async () => {
    const orderDetails = {
      name: userDetails.name,
      email: userDetails.email,
      address: userDetails.address,
      contact: userDetails.contact,
      products: cartItems, 
      totalAmount: cartItems.reduce((total, product) => total + parseFloat(product.price.replace('$', '')), 0), 
    };

    try {
      const response = await axios.post('http://localhost:5000/api/order', orderDetails);
      setShowOrderFormPopup(false); 
      setShowConfirmationPopup(true); 
      setCartItems([]); 
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  const handlePayNow = () => {
    if (cartItems.length > 0) {
      setShowOrderFormPopup(true);
    } else {
      alert('Your cart is empty!');
    }
  };

  return (
    <Router>
      <Navbar onSearch={handleSearch} cartItems={cartItems} onCartClick={toggleCart} />

      {isCartVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Cart Items</h2>
            {cartItems.length > 0 ? (
              <ul className="divide-y divide-gray-300">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between items-center py-2">
                    <div>
                      <span className="font-medium">{item.name}</span>
                      <span className="ml-4 text-gray-600">{item.price}</span>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="bg-red-400 hover:bg-red-500 text-white px-2 py-1 rounded-lg text-xs"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">Your cart is empty.</p>
            )}

            <div className="mt-6 flex justify-between">
              <button onClick={handleClearCart} className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-lg">
                Close
              </button>
              <button onClick={handlePayNow} className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-lg">
              Buy Now
              </button>
            </div>
          </div>
        </div>
      )}

      {showOrderFormPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg max-w-md w-full grid grid-cols-1 gap-8">
            <div className="grid grid-cols-1 gap-4">
              <h3 className="text-2xl font-semibold mb-4 text-center">Complete Your Order</h3>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={userDetails.name}
                onChange={handleUserDetailsChange}
                className="border p-2 mb-4 w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userDetails.email}
                onChange={handleUserDetailsChange}
                className="border p-2 mb-4 w-full"
              />
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={userDetails.address}
                onChange={handleUserDetailsChange}
                className="border p-2 mb-4 w-full"
              />
              <input
                type="text"
                name="contact"
                placeholder="Contact"
                value={userDetails.contact}
                onChange={handleUserDetailsChange}
                className="border p-2 mb-4 w-full"
              />

              <button
                onClick={handleSubmitOrder}
                className="bg-pink-400 hover:bg-pink-500 text-white px-6 py-2 rounded-md mt-4 w-full"
              >
                Submit Order
              </button>
            </div>
          </div>
        </div>
      )}

      {showConfirmationPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold text-green-600 mb-4">Your order has been confirmed!</h2>
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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/shop" element={<ProductPage searchTerm={searchTerm} onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} onClearCart={handleClearCart} onPayNow={handlePayNow} />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
};

export default App;
