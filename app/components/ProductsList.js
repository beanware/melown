// app/products/components/ProductsList.js
'use client'; // Marking as client-side

import { useEffect, useState } from 'react';
import ProductCard from './ProductCard'; // Import the card component

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from the API route
    const fetchProducts = async () => {
      const response = await fetch('/api/products'); // Use the correct path to your API
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    };

    fetchProducts().catch((error) => {
      console.error('Error fetching products:', error);
      setLoading(false);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
