// src/components/Categories.js
import React from 'react';

const Categories = ({setCategory} ) => {
  const categories = ['health', 'sport', 'technology'];

  return (
    <div className="categories flex justify-center space-x-4 my-4">
      {categories.map((category) => (
        <button key={category} 
        onClick={()=>setCategory(category)}
        // onClick={() => onSelectCategory(category)}
        className="bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
          
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
