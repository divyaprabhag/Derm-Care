// components/Navbar.jsx
import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';

const Navbar = ({ onSearch, onCartClick }) => {
  const { isAuthenticated, logout, user } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext); // <-- get cartItems from context
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  return (
    <nav className="bg-gray-900 p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl text-white font-semibold">
          <span className="text-pink-400">Derm</span>care
        </div>

        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-pink-400' : 'text-gray-400 hover:text-pink-400'
            }
            end
          >
            Home
          </NavLink>

          {isAuthenticated && user?.role === 'admin' && (
            <NavLink
              to="/admin/products"
              className={({ isActive }) =>
                isActive ? 'text-pink-400' : 'text-gray-400 hover:text-pink-400'
              }
            >
              Admin Shop
            </NavLink>
          )}

          {isAuthenticated && user?.role !== 'admin' && (
            <>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? 'text-pink-400' : 'text-gray-400 hover:text-pink-400'
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive ? 'text-pink-400' : 'text-gray-400 hover:text-pink-400'
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/chatbot"
                className={({ isActive }) =>
                  isActive ? 'text-pink-400' : 'text-gray-400 hover:text-pink-400'
                }
              >
                Chatbot
              </NavLink>
            </>
          )}

          {!isAuthenticated && (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? 'text-pink-400' : 'text-gray-400 hover:text-pink-400'
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? 'text-pink-400' : 'text-gray-400 hover:text-pink-400'
                }
              >
                Signup
              </NavLink>
            </>
          )}
        </div>

        <div className="flex items-center space-x-4">
          {isAuthenticated && user?.role !== 'admin' && (
            <>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="hidden md:block bg-gray-800 text-gray-300 px-3 py-2 rounded-full focus:outline-none"
              />

              <div onClick={onCartClick} className="relative cursor-pointer">
                <svg
                  className="w-6 h-6 text-gray-400 hover:text-pink-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L6 6m1 7l1.2 5.6c.1.7.7 1.4 1.4 1.4h7.8c.7 0 1.3-.5 1.4-1.2L17 13M5 6h16"
                  />
                </svg>
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 bg-pink-400 text-white rounded-full text-xs px-1">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </>
          )}

          {isAuthenticated && (
            <div className="flex items-center gap-3">
              <span className="text-gray-300 hidden md:block">Hi, {user?.name}</span>
              <button
                onClick={handleLogout}
                className="bg-pink-400 px-3 py-1 rounded text-white"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
