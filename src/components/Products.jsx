import React from 'react';

const Products = () => {
  // Define the array of products
  const products = [
    { id: 1, title: "iPhone", category: "mobiles", price: 89000 },
    { id: 2, title: "Samsung", category: "mobiles", price: 75000 },
    { id: 3, title: "OnePlus", category: "mobiles", price: 60000 },
    { id: 4, title: "iPad", category: "tablets", price: 45000 },
  ];

  // Filter data by category
  const filteredData = products.filter((data) => data.category === "mobiles");

  // Console log for debugging (optional)
  console.log("Filtered Data:", filteredData);

  return (
    <div>
      {filteredData.map((data) => (
        <div key={data.id}>
          <h1>{data.title}</h1>
          <h2>{data.price}</h2>
        </div>
      ))}
    </div>
  );
};

export default Products;
