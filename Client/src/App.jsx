// App.jsx
import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./assets/css/core.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import ProductPage from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import AdminProducts from "./pages/AdminProducts";
import Cart from "./components/Cart";
import Chatbot from "./pages/chatbot";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider, CartContext } from "./context/CartContext";
import { ProtectedRoute, AdminRoute } from "./components/ProtectedRoute";

const AppContent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isCartVisible, setCartVisible] = useState(false);

  const { cartItems, addToCart, removeFromCart, clearCart, updateCartItem } = useContext(CartContext);

  const handleSearch = (term) => setSearchTerm(term);
  const toggleCart = () => setCartVisible(!isCartVisible);

  return (
    <>
      <Navbar onSearch={handleSearch} onCartClick={toggleCart} cartItems={cartItems} />

      {/* Cart Popup */}
      {isCartVisible && (
        <Cart
          cartItems={cartItems}
          onRemoveFromCart={removeFromCart}
          onClearCart={clearCart}
          onUpdateCartItem={updateCartItem}
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/shop"
          element={
            <ProtectedRoute>
              <ProductPage searchTerm={searchTerm} onAddToCart={addToCart} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetails onAddToCart={addToCart} />
            </ProtectedRoute>
          }
        />

        <Route
          path="/blog"
          element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart
                cartItems={cartItems}
                onRemoveFromCart={removeFromCart}
                onClearCart={clearCart}
                onUpdateCartItem={updateCartItem}
              />
            </ProtectedRoute>
          }
        />

        <Route
          path="/chatbot"
          element={
            <ProtectedRoute>
              <Chatbot />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <AdminProducts />
            </AdminRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};

const App = () => (
  <AuthProvider>
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  </AuthProvider>
);

export default App;
