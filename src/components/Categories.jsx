import React from 'react';


const categories = [
  "Women's Fashion",
  "Men's Fashion",
  "Electronics",
  "Home & Lifestyle",
  "Medicine",
  "Sports & Outdoor",
  "Baby's & Toys",
  "Groceries & Pets",
  "Health & Beauty"
];

const Categories = () => {
  return (
    <div className='flex flex-col gap-4 pt-4'>
      {categories.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default Categories;
