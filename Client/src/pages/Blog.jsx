import React, { useState } from 'react';
import art1 from '../assets/img/article image1.jpg';
import art2 from '../assets/img/article image 2.jpg';
import art3 from '../assets/img/article image 3.webp';

function BlogPage() {
  const [expandedArticle, setExpandedArticle] = useState(null); 
  const toggleReadMore = (articleId) => {
    setExpandedArticle(expandedArticle === articleId ? null : articleId);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="bg-gray-100 rounded-lg mb-8 md:mb-12 lg:mb-16">
        <h1 className="text-3xl font-bold text-gray-800 pt-4 pb-2 md:text-4xl lg:text-5xl">Skin Health</h1>
        <p className="text-lg text-gray-600 pb-4 md:text-xl lg:text-2xl">Articles and Blogs</p>
      </div>
      
      
      <div className="flex flex-row justify-center -mx-4 md:-mx-6 lg:-mx-8">
        
        
        <div className="w-full md:w-1/3 xl:w-1/3 px-4 md:px-6 lg:px-8 mb-8 md:mb-12 lg:mb-16">
          <article className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
            <img src={art1} alt="Article Image 1" className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-t-lg" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2 md:text-3xl lg:text-4xl pt-4">Article 1: Skin Care Tips</h2>
            <p className="text-lg text-gray-600 mb-4 md:text-xl lg:text-2xl">
              {expandedArticle === 1
                ? "Discover the secrets to glowing skin with our expert tips and tricks. Learn how to nourish, protect, and rejuvenate your skin for a radiant complexion. Follow detailed step-by-step guides for various skin types, from dry to oily skin. Learn the importance of using sunscreen, hydrating frequently, and using gentle products suited to your skin needs."
                : "Discover the secrets to glowing skin with our expert tips and tricks. Learn how to nourish, protect, and rejuvenate your skin for a radiant complexion."}
            </p>
            <button
              className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 lg:py-4 lg:px-8"
              onClick={() => toggleReadMore(1)}
            >
              {expandedArticle === 1 ? 'Read Less' : 'Read More'}
            </button>
          </article>
        </div>
        
       
        <div className="w-full md:w-1/3 xl:w-1/3 px-4 md:px-6 lg:px-8 mb-8 md:mb-12 lg:mb-16">
          <article className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
            <img src={art2} alt="Article Image 2" className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-t-lg" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2 md:text-3xl lg:text-4xl pt-4">Article 2: Natural Remedies</h2>
            <p className="text-lg text-gray-600 mb-4 md:text-xl lg:text-2xl">
              {expandedArticle === 2
                ? "Find relief from nature's pharmacy. Explore our expert-approved natural remedies for a healthier, happier you. We dive deep into remedies for skin conditions like acne, eczema, and dry skin using ingredients readily available at home, such as honey, aloe vera, and tea tree oil."
                : "Find relief from nature's pharmacy. Explore our expert-approved natural remedies for a healthier, happier you."}
            </p>
            <button
              className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 lg:py-4 lg:px-8"
              onClick={() => toggleReadMore(2)}
            >
              {expandedArticle === 2 ? 'Read Less' : 'Read More'}
            </button>
          </article>
        </div>
       
        <div className="w-full md:w-1/3 xl:w-1/3 px-4 md:px-6 lg:px-8 mb-8 md:mb-12 lg:mb-16">
          <article className="bg-white rounded-lg shadow-md p-4 md:p-6 lg:p-8">
            <img src={art3} alt="Article Image 3" className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-t-lg" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2 md:text-3xl lg:text-4xl pt-4">Article 3: Skincare Routine</h2>
            <p className="text-lg text-gray-600 mb-4 md:text-xl lg:text-2xl">
              {expandedArticle === 3
                ? "Transform your skin in just a few simple steps. Create a personalized skincare routine for a brighter, smoother complexion. This article discusses daily routines for morning and night, and the best types of products to incorporate for various skin types."
                : "Transform your skin in just a few simple steps. Create a personalized skincare routine for a brighter, smoother complexion."}
            </p>
            <button
              className="bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-4 rounded md:py-3 md:px-6 lg:py-4 lg:px-8"
              onClick={() => toggleReadMore(3)}
            >
              {expandedArticle === 3 ? 'Read Less' : 'Read More'}
            </button>
          </article>
        </div>

      </div>
      
     
      <div className="flex justify-center mb-8 md:mb-12 lg:mb-16">
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded md:py-3 md:px-6 lg:py-4 lg:px-8 mx-2">Previous</button>
        <button className="bg-gray-200 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded md:py-3 md:px-6 lg:py-4 lg:px-8 mx-2">Next</button>
      </div>

    </div>
  );
}

export default BlogPage;