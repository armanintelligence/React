import { useState } from "react";
import ProductList from "./ProductList.jsx";
import Cart from "./Cart.jsx";
import { products } from "./products.js";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  return (
    <div className="app">
      <h1>Shop</h1>
      <Cart items={cart} onClear={() => setCart([])} />
      <ProductList products={products} onAdd={addToCart} />
    </div>
  );
}

export default App;
