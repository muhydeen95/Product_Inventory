const express = require('express');
const products = require("../data/products.json");


const app = express();
app.use(express.json());


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
  