const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Seed sample products if empty (Helper for quick setup)
router.post('/seed', async (req, res) => {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      const sampleProducts = [
        { name: 'Wireless Headphones', description: 'Premium noise-cancelling headphones.', price: 199.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=60', category: 'Electronics' },
        { name: 'Smart Watch', description: 'Track your fitness and receive notifications.', price: 149.50, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=60', category: 'Electronics' },
        { name: 'Running Shoes', description: 'Lightweight and comfortable running shoes.', price: 89.99, image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=60', category: 'Footwear' },
        { name: 'Minimalist Backpack', description: 'Perfect for daily commute and travel.', price: 59.99, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=60', category: 'Accessories' }
      ];
      await Product.insertMany(sampleProducts);
      return res.status(201).json({ message: 'Products seeded successfully' });
    }
    res.json({ message: 'Products already exist' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
