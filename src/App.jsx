import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Landing from "./pages/landing";
import Products from "./pages/Products";
import Cart from "./pages/cart";
import Header from "./Components/Header";
import productsData from "./data/products";

export default function App() {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // Update quantity
  const updateQuantity = (id, amount) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove item
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <Router>
      <Header totalItems={totalItems} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products addToCart={addToCart} products={productsData} />} />
        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          }
        />
      </Routes>
    </Router>
  );
}


