import Counter from '../components/Counter';

function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Welcome to React Fundamentals</h1>
      <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.1rem', color: '#555' }}>
        This project demonstrates the core concepts of React, including components, props, state management with useState, component-specific styling using CSS modules, and routing with React Router.
      </p>
      
      <div style={{ marginBottom: '3rem' }}>
        <Counter />
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <a href="/products" style={{ background: '#34495e', color: '#fff', textDecoration: 'none', padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: 'bold' }}>
          View Products
        </a>
        <a href="/todo" style={{ background: '#8e44ad', color: '#fff', textDecoration: 'none', padding: '0.75rem 1.5rem', borderRadius: '4px', fontWeight: 'bold' }}>
          Try Todo App
        </a>
      </div>
    </div>
  );
}

export default Home;
