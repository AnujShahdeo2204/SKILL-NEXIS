import ProductCard from '../components/ProductCard';

function Products() {
  const products = [
    {
      id: 1,
      name: 'Wireless Noise-Cancelling Headphones',
      price: 299.99,
      description: 'Experience premium sound with our top-tier noise-cancelling technology.',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 2,
      name: 'Minimalist Ceramic Coffee Mug',
      price: 18.50,
      description: 'Start your morning right with this sleek, handcrafted ceramic mug.',
      category: 'Home Goods',
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 3,
      name: 'Ergonomic Office Chair',
      price: 159.00,
      description: 'Stay comfortable during long work sessions with optimal lumbar support.',
      category: 'Furniture',
      image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 4,
      name: 'Smart Fitness Watch',
      price: 199.99,
      description: 'Track your health, workouts, and receive notifications on the go.',
      category: 'Electronics',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 5,
      name: 'Organic Cotton T-Shirt',
      price: 25.00,
      description: 'A simple, comfortable, and eco-friendly everyday t-shirt.',
      category: 'Apparel',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=60'
    },
    {
      id: 6,
      name: 'Stainless Steel Water Bottle',
      price: 35.00,
      description: 'Keep your drinks cold for 24 hours or hot for 12 hours.',
      category: 'Accessories',
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=500&q=60'
    }
  ];

  return (
    <div>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Our Products</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
