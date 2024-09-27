// app/products/components/ProductCard.js
'use client'; // Marking as client-side

const ProductCard = ({ product }) => {
  return (
    <div className="product-card border p-4 rounded shadow-lg">
      <h2 className="text-lg font-bold">{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-xl">{product.price}</p>
    </div>
  );
};

export default ProductCard;
