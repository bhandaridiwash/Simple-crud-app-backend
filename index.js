const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory data storage
let items = [
  { id: 1, name: 'Item 1', description: 'Description for item 1' },
  { id: 2, name: 'Item 2', description: 'Description for item 2' },
  { id: 3, name: 'Item 3', description: 'Description for item 3' }
];

let nextId = 4;

// Routes

// GET - Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Welcome to Simple CRUD API',
    endpoints: {
      'GET /api/items': 'Get all items',
      'GET /api/items/:id': 'Get item by ID',
      'POST /api/items': 'Create a new item',
      'PUT /api/items/:id': 'Update an item',
      'DELETE /api/items/:id': 'Delete an item'
    }
  });
});

// CREATE - Add a new item
app.post('/api/items', (req, res) => {
  const { name, description } = req.body;
  
  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  
  const newItem = {
    id: nextId++,
    name,
    description: description || ''
  };
  
  items.push(newItem);
  res.status(201).json({ message: 'Item created successfully', item: newItem });
});

// READ - Get all items
app.get('/api/items', (req, res) => {
  res.json({ 
    count: items.length,
    items: items 
  });
});

// READ - Get a single item by ID
app.get('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(item => item.id === id);
  
  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }
  
  res.json({ item });
});

// UPDATE - Update an item by ID
app.put('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  
  const itemIndex = items.findIndex(item => item.id === id);
  
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  
  if (name !== undefined) {
    if (!name || name.trim() === '') {
      return res.status(400).json({ error: 'Name cannot be empty' });
    }
    items[itemIndex].name = name;
  }
  if (description !== undefined) {
    items[itemIndex].description = description;
  }
  
  res.json({ message: 'Item updated successfully', item: items[itemIndex] });
});

// DELETE - Delete an item by ID
app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(item => item.id === id);
  
  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }
  
  const deletedItem = items.splice(itemIndex, 1)[0];
  res.json({ message: 'Item deleted successfully', item: deletedItem });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} for API documentation`);
});

module.exports = app;
