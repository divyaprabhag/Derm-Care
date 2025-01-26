import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ onSearch, cartItems, onCartClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="bg-gray-900 p-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl text-white font-semibold">
          <span className="text-pink-400">Derm</span>care
        </div>

        <div className="hidden md:flex space-x-6">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-pink-400' : 'text-gray-400 hover:text-pink-400')} end>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => (isActive ? 'text-pink-400' : 'text-gray-400 hover:text-pink-400')}>
            Shop
          </NavLink>
          <NavLink to="/blog" className={({ isActive }) => (isActive ? 'text-pink-400' : 'text-gray-400 hover:text-pink-400')}>
            Blog
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'text-pink-400' : 'text-gray-400 hover:text-pink-400')}>
            Login
          </NavLink>
          <NavLink to="/chatbot" className={({ isActive }) => (isActive ? 'text-pink-400' : 'text-gray-400 hover:text-pink-400')}>
            Chatbot
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="hidden md:block bg-gray-800 text-gray-300 px-3 py-2 rounded-full focus:outline-none"
          />
          <svg className="w-6 h-6 text-gray-400 hover:text-pink-400 cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35m2.75-4.85a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"></path>
          </svg>
          <div onClick={onCartClick} className="relative cursor-pointer">
            <svg className="w-6 h-6 text-gray-400 hover:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L6 6m1 7l1.2 5.6c.1.7.7 1.4 1.4 1.4h7.8c.7 0 1.3-.5 1.4-1.2L17 13M5 6h16"></path>
            </svg>
            {cartItems.length > 0 && (
              <span className="absolute top-0 right-0 bg-pink-400 text-white rounded-full text-xs px-1">{cartItems.length}</span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;