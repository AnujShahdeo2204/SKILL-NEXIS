import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import TodoPage from './pages/TodoPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/todo">Todo</NavLink>
        </nav>
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/todo" element={<TodoPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
