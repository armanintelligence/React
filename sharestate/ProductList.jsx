function ProductList({ products, onAdd }) {
  return (
    <div>
      {products.map((p) => (
        <div key={p.id} className="product">
          <span>{p.name}</span>
          <span>₹{p.price}</span>
          <button onClick={() => onAdd(p)}>Add</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
