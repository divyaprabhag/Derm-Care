// // src/context/CartContext.jsx
// import React, { createContext, useState, useEffect } from "react";

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState(() => {
//     const saved = localStorage.getItem("cart");
//     return saved ? JSON.parse(saved) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//   }, [cartItems]);

//   const addToCart = (product, itemsCount = 1) => {
//     setCartItems((prev) => {
//       const existing = prev.find((i) => i._id === product._id);
//       if (existing) {
//         return prev.map((i) =>
//           i._id === product._id
//             ? { ...i, itemsCount: i.itemsCount + itemsCount }
//             : i
//         );
//       }
//       return [...prev, { ...product, itemsCount }];
//     });
//   };

//   const removeFromCart = (id) => {
//     setCartItems((prev) => prev.filter((item) => item._id !== id));
//   };

//   const updateCartItem = (id, newCount) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item._id === id ? { ...item, itemsCount: newCount } : item
//       )
//     );
//   };

//   const clearCart = () => setCartItems([]);

//   return (
//     <CartContext.Provider
//       value={{ cartItems, addToCart, removeFromCart, updateCartItem, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };







// src/context/CartContext.jsx
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Persist cart in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add product to cart with stock limit
  const addToCart = (product, itemsCount = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i._id === product._id);
      if (existing) {
        // Prevent exceeding stock
        const newCount = Math.min(existing.itemsCount + itemsCount, product.stock);
        return prev.map((i) =>
          i._id === product._id ? { ...i, itemsCount: newCount } : i
        );
      }
      return [...prev, { ...product, itemsCount: Math.min(itemsCount, product.stock) }];
    });
  };

  // Remove product from cart
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item._id !== id));
  };

  // Update quantity of cart item with stock limit
  const updateCartItem = (id, newCount, stock) => {
    if (newCount < 1) return; // prevent zero or negative
    const count = Math.min(newCount, stock); // enforce stock
    setCartItems((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, itemsCount: count } : item
      )
    );
  };

  // Clear entire cart
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateCartItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
