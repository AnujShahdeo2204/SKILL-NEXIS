import { useState, useEffect } from 'react';
import axios from 'axios';

function Home({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  const handleSeed = () => {
    axios.post('/api/products/seed')
      .then(() => window.location.reload());
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h2>Our Products</h2>
        {products.length === 0 && <button onClick={handleSeed} className="btn">Seed Products</button>}
      </div>
      
      <div className="product-grid">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} className="product-img" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="product-footer">
                <span className="price">${product.price}</span>
                <button onClick={() => addToCart(product)} className="btn">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
