import React from 'react';

const MenuNavBar = ({ categories }) => {
  return (
    <div className="bg-black shadow-md sticky top-16 z-10 overflow-x-auto no-scrollbar">
      <div className="flex items-center py-2 px-4 space-x-4 w-max overflow-x-auto">
        {categories.map((category, index) => (
          <a
            key={index}
            href="#"
            className="text-gray-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 whitespace-nowrap"
          >
            {category}
          </a>
        ))}
      </div>
    </div>
  );
};


export default MenuNavBar;