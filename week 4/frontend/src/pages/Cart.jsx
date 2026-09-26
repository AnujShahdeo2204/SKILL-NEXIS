function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li key={`${item._id}-${index}`} className="cart-item">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                  <div>
                    <h4>{item.name}</h4>
                    <span>${item.price}</span>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item._id)} className="btn btn-outline" style={{ color: '#e74c3c', borderColor: '#e74c3c' }}>Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart-summary">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="btn" style={{ marginTop: '1rem', width: '100%' }}>Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
