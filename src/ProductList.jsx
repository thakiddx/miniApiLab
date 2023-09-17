import React, { useState, useEffect } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const apiUrl = "https://dummyjson.com/products";

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="product-list">
      <h1>List of Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <strong>Name:</strong> {product.name}, <strong>Price:</strong> ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;