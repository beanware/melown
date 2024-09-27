// components/CartModal.js
'use client'; // Marks this component as a Client Component

export default function CartModal({ cartOpen, setCartOpen }) {
  // Sample cart items; in a real application, this would come from state or props
  const cartItems = [
    {
      id: 1,
      name: 'Mac Book Pro',
      quantity: 2,
      price: 20,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
    },
    {
      id: 2,
      name: 'Mac Book Pro',
      quantity: 2,
      price: 20,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
    },
    {
      id: 3,
      name: 'Mac Book Pro',
      quantity: 2,
      price: 20,
      image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80',
    },
  ];

  return (
    <div
      className={`fixed right-0 top-0 max-w-xs w-full h-full px-6 py-4 transition duration-300 transform overflow-y-auto bg-white border-l-2 border-gray-300 ${
        cartOpen ? 'translate-x-0 ease-out' : 'translate-x-full ease-in'
      }`}
    >
      {/* Cart Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-medium text-gray-700">Your Cart</h3>
        <button
          onClick={() => setCartOpen(false)}
          className="text-gray-600 focus:outline-none"
        >
          {/* Close SVG Icon */}
          <svg
            className="h-5 w-5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <hr className="my-3" />

      {/* Cart Items */}
      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between mt-6">
          <div className="flex">
            <img
              className="h-20 w-20 object-cover rounded"
              src={item.image}
              alt={item.name}
            />
            <div className="mx-3">
              <h3 className="text-sm text-gray-600">{item.name}</h3>
              <div className="flex items-center mt-2">
                {/* Increment Quantity */}
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
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
                <span className="text-gray-700 mx-2">{item.quantity}</span>
                {/* Decrement Quantity */}
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
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
          </div>
          <span className="text-gray-600">${item.price}</span>
        </div>
      ))}

      {/* Promo Code */}
      <div className="mt-8">
        <form className="flex items-center justify-center">
          <input
            className="form-input w-48 border rounded-md px-3 py-2"
            type="text"
            placeholder="Add promocode"
          />
          <button className="ml-3 flex items-center px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
            <span>Apply</span>
          </button>
        </form>
      </div>

      {/* Checkout Button */}
      <a
        href="#"
        className="flex items-center justify-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500"
      >
        <span>Checkout</span>
        {/* Checkout SVG Icon */}
        <svg
          className="h-5 w-5 mx-2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
        </svg>
      </a>
    </div>
  );
}
