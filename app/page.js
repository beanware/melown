'use client'; // Ensure this component is rendered on the client side

import { useState } from 'react';
import Header from './components/Header';
import ProductDisplay from './components/ProductDisplay';
import CartModal from './components/CartModal';
import ProductsList from './components/ProductsList';

function Home() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div>
      <Header setCartOpen={setCartOpen} />
      <ProductDisplay />
      <ProductsList/>
      <CartModal cartOpen={cartOpen} setCartOpen={setCartOpen} />
    </div>
  );
}

export default Home;
