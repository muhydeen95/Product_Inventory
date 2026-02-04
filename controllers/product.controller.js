const express = require('express');
const products = require("../data/products.json");


const app = express();
app.use(express.json());

// Get all with paginated and search response 
exports.getAllPaginatedProducts = (req, res) => {
  let { page = 1, limit = 10, search = '' } = req.query;

  page = parseInt(page, 10);
  limit = parseInt(limit, 10);
  search = search.toLowerCase();

  // Filter by search query if provided
  let filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search) ||
      (p.category && p.category.toLowerCase().includes(search))
  );

  // Sort by createdAt descending
  filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const total = filtered.length;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = filtered.slice(startIndex, endIndex);

  res.status(200).json({
    total,          // total items matching search
    page,           // current page
    limit,          // items per page
    totalPages: Math.ceil(total / limit),
    data: paginatedData
  });
};

// Get All  Entire Products
exports.getAllProducts = (req, res) => {
  const newProducts = products
    .slice() // optional: prevents mutating the original array
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  res.status(200).json(newProducts);
};

// Get One Product – Read
exports.getOneProducts = (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find((t) => t.id === id);
    if(!product) return res.status(404).json({ message: 'Product not found' });
    res.status(200).json(product); // Send array as JSON
};

//Create new Product
exports.createProduct = (req, res) => {
    const { name, price, quantity, description, category } = req.body;
  
    if (!name || price === undefined) {
      return res.status(400).json({
        message: "Name and price are required"
      });
    }
  
    const exists = products.find(
      p => p.name.toLowerCase() === name.toLowerCase()
    );
  
    if (exists) {
      return res.status(400).json({
        message: "Product already exists"
      });
    }
  
    const newProduct = {
      id: products.length + 1,
      name,
      price,
      quantity: Number(quantity) || 0,
      description: description || "",
      category: category || "General",
      createdAt: new Date(),
      updatedAt: null
    };
  
    products.push(newProduct);
  
    res.status(201).json({
      message: "Product created successfully",
      data: newProduct
    });
};

// Patch Update – Partial
exports.updateProduct = (req, res) => {
  const product = products.find(
    (t) => t.id === parseInt(req.params.id, 10)
  );

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const newProduct = {
    ...req.body,
    updatedAt: new Date().toISOString() // keep same format as createdAt
  };

  Object.assign(product, newProduct);

  res.status(200).json(product);
};

// Delete – Remove
exports.deleteProduct = (req, res) => {
  const id = parseInt(req.params.id, 10);

  const index = products.findIndex((t) => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Not found' });
  }

  products.splice(index, 1); // mutate array safely

  res.status(204).send();
};


  