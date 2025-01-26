import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import ai from '../assets/img/derm care1.jpg';
import bi from '../assets/img/doctor consultation.jpg';
import ci from '../assets/img/image3.jpg';
import di from '../assets/img/bg image.jpg';
import gi from '../assets/img/footer image.jpg';

const Home = () => {
  const navigate = useNavigate(); 

  const handleShopNow = () => {
    navigate('/shop'); 
  };

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-center justify-center relative">
      <header className="flex justify-between items-center p-6 w-full">
      </header>

      <section className="flex flex-col items-center text-center mt-6 relative w-full">
        <h1 className="text-5xl font-extrabold mt-4">Discover Your Glow</h1>
        <p className="text-xl mt-3 max-w-xl">
          Explore our range of premium skincare products that nurture and rejuvenate your skin.
          Find the perfect solutions for your skincare needs.
        </p>

        <button 
          onClick={handleShopNow} 
          className="mt-5 px-6 py-3 bg-pink-400 hover:bg-pink-500 text-lg font-semibold rounded-lg">
          Shop Now
        </button>

        <div className="grid grid-cols-3 gap-6 mt-8 w-10/12">
          <img src={ai} alt="Skincare Model" className="w-100 h-60 rounded-md object-cover" />
          <img src={bi} alt="Serum Dropper" className="w-100 h-60 rounded-md object-cover" />
          <img src={ci} alt="Moisturizer" className="w-100 h-60 rounded-md object-cover" />
          <img src={di} alt="Skincare Product" className="col-span-3 w-screen rounded-md object-cover" />
        </div>
      </section>

      <section className="min-h-screen flex flex-col items-center justify-center bg-white text-black p-6">
        <h1 className="text-4xl font-bold mb-2 text-center">ABOUT US</h1>
        <p className="text-lg text-gray-400 mb-4 text-center">Finding Inspiration in Every Turn</p>
        <p className="text-xl max-w-2xl text-center mb-6">
          Welcome to Dermcare, your ultimate destination for premium skincare products. 
          We believe that everyone deserves to feel confident in their skin, and our mission 
          is to provide you with high-quality products that nourish, rejuvenate, and enhance your natural beauty. 
          Our carefully curated selection is designed for all skin types and concerns, ensuring that 
          you find the perfect solutions tailored just for you.
        </p>
        <img
          src={gi}
          alt="About Us"
          className="w-full h-64 object-cover rounded-md"
        />
      </section>
    </div>
  );
};

export default Home;