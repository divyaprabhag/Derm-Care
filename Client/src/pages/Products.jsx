import React, { useState } from 'react';
import axios from 'axios';
import PureGlowImage from '../assets/img/regenerating cream.jpg';
import RevitaLuxeImage from '../assets/img/cerave.jpg';
import LumiCrestImage from '../assets/img/sunscreen.jpg';
import SkinSuxImage from '../assets/img/serum.jpg';
import Lipbalm from '../assets/img/Lip balm.png';
import Vitamin from '../assets/img/vitamin c3.jpg';
import Vitaminn from '../assets/img/vitamin c1.webp';
import Vitaminnn from '../assets/img/vitamin c2.webp';
import Vitaminm from'../assets/img/vitamin c4.webp';
import Vitaminmm from'../assets/img/vitamin c5.avif';
import Vitaming from'../assets/img/vitamin c6.jpg';
import acid from'../assets/img/hylauronic1.jpg';
import acidd from'../assets/img/hylauronic2.avif';
import aciddd from'../assets/img/hylauronic3.webp';
import nia from'../assets/img/niacinamide1.jpg';
import niaa from'../assets/img/Niacinamide2.png';
import niaaa from'../assets/img/niacinamide3.jpg';
import sal from'../assets/img/salicylic1.jpg';
import sall from'../assets/img/salicylic2.jpg';
import acidf from'../assets/img/hyaluronic.jpg';
import mois from'../assets/img/moisturizer1.jpg';
import moiss from'../assets/img/moisturizer2.jpg';
import moisss from'../assets/img/moisturizer3.jpg';

const ProductPage = ({ searchTerm, onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);
  const [isOrderConfirmed, setOrderConfirmed] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    contact: '',
  });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false); 
  const [showOrderFormPopup, setShowOrderFormPopup] = useState(false); 

  const products = [
    { id: 1, name: 'Regenerating Cream', description: 'Revitalize your skin.', image: PureGlowImage, price: '$49.99', category: 'Creams' },
    { id: 2, name: 'Moisturizing Cream', description: 'Nourish your skin.', image: RevitaLuxeImage, price: '$59.99', category: 'Moisturizer' },
    { id: 3, name: 'Suncreen', description: 'Brighten and protect.', image: LumiCrestImage, price: '$39.99', category: 'Sunscreen' },
    { id: 4, name: 'Serum', description: 'Luxury for your skin.', image: SkinSuxImage, price: '$69.99', category: 'Serum' },
    { id: 5, name: 'Lip balm', description: 'Hydrate your Lips.', image: Lipbalm, price: '$6.99', category: 'Lip Care' },
    { id: 6, name: 'Vitamin c Minimalist Serum', description: 'to Brighten your Skin.', image: Vitamin, price: '$20.1', category: 'Serum' },
    { id: 7, name: 'Vitamin C cosrx Serum', description: 'to Brighten your Skin.', image: Vitaminn, price: '$50.1', category: 'Serum' },
    { id: 8, name: 'Vitamin c lakme Serum', description: 'to Brighten your Skin.', image: Vitaminnn, price: '$59.1', category: 'Serum' },
    { id: 9, name: 'Vitamin c plum Serum', description: 'to Brighten your Skin.', image: Vitaminm, price: '$60.1', category: 'Serum' },
    { id: 10, name: 'Vitamin c garnier Serum', description: 'to Brighten your Skin.', image: Vitaminmm, price: '$30.1', category: 'Serum' },
    { id: 11, name: 'Vitamin c organic Serum', description: 'to Brighten your Skin.', image: Vitaming, price: '$35.1', category: 'Serum' },
    { id: 12, name: 'Plum Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: acid, price: '$40.1', category: 'Serum' },
    { id: 13, name: 'Loreal Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: acidd, price: '$41.1', category: 'Serum' },
    { id: 14, name: 'Minimalist Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: aciddd, price: '$48.1', category: 'Serum' },
    { id: 15, name: 'Minimalist Niaciamide 5% Serum', description: 'to minimize pores.', image: nia, price: '$56.1', category: 'Serum' },
    { id: 16, name: 'Ordinary Niacimaide 10% Serum', description: 'to minimize pores.', image: niaa, price: '$42.1', category: 'Serum' },
    { id: 17, name: 'Plum Niacimaide 10% Serum', description: 'to minimize pores.', image: niaaa, price: '$27.1', category: 'Serum' },
    { id: 18, name: 'Ordinary Salicylic acid Serum', description: 'for acne prone skin.', image: sal, price: '$57.1', category: 'Serum' },
    { id: 19, name: 'Skintific Salicylic acid Serum with ceramide', description: 'for acne prone skin.', image: sall, price: '$67.1', category: 'Serum' },
    { id: 20, name: 'Ordinary Hylauronic acid Serum', description: 'to plump your Skin with hydration.', image: acidf, price: '$56.1', category: 'Serum' },
    { id: 21, name: 'Plum moisturizer', description: 'to hydrate and to repair your skin.', image: mois, price: '$46.1', category: 'Moisturizer' },
    { id: 22, name: 'Loreal moisturizer', description: 'to hydrate and to repair your skin.', image: moiss, price: '$78.1', category: 'Moisturizer' },
    { id: 23, name: 'Night Cream', description: 'to hydrate and to repair your dry skin.', image: moisss, price: '$70.1', category: 'Creams' }
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleBuyNow = (product) => {
    setSelectedProduct(product); 
    setShowOrderFormPopup(true); 
  };

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
      products: [selectedProduct], 
      totalAmount: parseFloat(selectedProduct.price.replace('$', '')),
    };

    try {
      const response = await axios.post('http://localhost:5000/api/order', orderDetails);
      setOrderConfirmed(true);
      setCartItems([]); 
      setShowOrderFormPopup(false); 
      setShowConfirmationPopup(true); 
    } catch (error) {
      console.error('Error submitting order:', error);
    }
  };

  const handleAddToCart = (product) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems([...cartItems, product]);
      onAddToCart(product);
    } else {
      alert('Product already exists in the cart!');
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Discover Radiant Skin</h1>
        <p className="text-lg text-center text-gray-600 mb-12">Explore premium skincare products for a glowing complexion.</p>

        <div className="text-center mb-8">
          <button onClick={() => handleCategoryChange('All')} className={`px-4 py-2 ${selectedCategory === 'All' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>All</button>
          <button onClick={() => handleCategoryChange('Serum')} className={`px-4 py-2 ml-4 ${selectedCategory === 'Serum' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Serum</button>
          <button onClick={() => handleCategoryChange('Moisturizer')} className={`px-4 py-2 ml-4 ${selectedCategory === 'Moisturizer' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Moisturizer</button>
          <button onClick={() => handleCategoryChange('Sunscreen')} className={`px-4 py-2 ml-4 ${selectedCategory === 'Sunscreen' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Sunscreen</button>
          <button onClick={() => handleCategoryChange('Creams')} className={`px-4 py-2 ml-4 ${selectedCategory === 'Creams' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>Creams</button>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-gray-100 rounded-lg shadow-lg p-6">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md mb-4" />
                <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <p className="text-lg font-bold text-gray-800 mt-4">{product.price}</p>

                <div className="mt-6 flex space-x-4">
                  <button 
                    onClick={() => handleAddToCart(product)}
                    className={`px-4 py-2 rounded-md ${cartItems.includes(product) ? 'bg-gray-500 text-white' : 'bg-blue-400 hover:bg-blue-500 text-white'}`}
                    disabled={cartItems.includes(product)}
                  >
                    {cartItems.includes(product) ? 'Already in Cart' : 'Add to Cart'}
                  </button>
                  <button 
                    onClick={() => handleBuyNow(product)}
                    className="px-4 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-md"
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
      </div>
    </div>
  );
};

export default ProductPage;
