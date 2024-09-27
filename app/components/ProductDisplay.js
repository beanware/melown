// components/ProductDisplay.js
'use client'; // Marks this component as a Client Component

import { useState } from 'react';

export default function ProductDisplay() {
  const [quantity, setQuantity] = useState(20);
  const [selectedColor, setSelectedColor] = useState('blue');

  const colors = ['blue', 'teal', 'pink'];

  return (
    <div className="md:flex md:items-center">
      {/* Product Image */}
      <div className="w-full h-64 md:w-1/2 lg:h-96">
        <img
          className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
          src="https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
          alt="Nike Air"
        />
      </div>

      {/* Product Details */}
      <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-1/2">
        <h3 className="text-gray-700 uppercase text-lg">Nike Air</h3>
        <span className="text-gray-500 mt-3">$125</span>
        <hr className="my-3" />

        {/* Quantity Controls */}
        <div className="mt-2">
          <label className="text-gray-700 text-sm" htmlFor="count">
            Count:
          </label>
          <div className="flex items-center mt-1">
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="text-gray-500 focus:outline-none focus:text-gray-600"
            >
              {/* Increment SVG Icon */}
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
            <span className="text-gray-700 text-lg mx-2">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              className="text-gray-500 focus:outline-none focus:text-gray-600"
            >
              {/* Decrement SVG Icon */}
              <svg
                className="h-5 w-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Color Selection */}
        <div className="mt-3">
          <label className="text-gray-700 text-sm" htmlFor="color">
            Color:
          </label>
          <div className="flex items-center mt-1">
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`h-5 w-5 rounded-full border-2 mr-2 focus:outline-none ${
                  selectedColor === color
                    ? `border-${color}-200`
                    : 'border-transparent'
                }`}
                style={{
                  backgroundColor: color,
                }}
              ></button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center mt-6">
          <button className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
            Order Now
          </button>
          <button className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
            {/* Add to Cart SVG Icon */}
            <svg
              className="h-5 w-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
