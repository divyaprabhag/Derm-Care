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
