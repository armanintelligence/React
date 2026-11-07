function Cart({ items, onClear }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Cart</h2>
      <p>{items.length} items · ₹{total}</p>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

export default Cart;
