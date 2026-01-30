const express = require('express');
// const products = require("../data/products.json");
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../data/products.json'); // Import product DataBase

let products = JSON.parse(fs.readFileSync(filePath, 'utf8')); // Saves Newly logged product into the database

console.log("Products type:", typeof products);
console.log("Is array?", Array.isArray(products));

const app = express();
app.use(express.json());

exports.newProduct = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            message: "Request body is missing"
        });
    };

    const { name, price, quantity, description, category } = req.body;
    if ( !name || !price ) {
        return res.status(400).json({ message: "No Available Product" })
    };

    // console.log(products);
    const existingProduct = products.find(p => p.name === name); // Checks if the newly logged product already exist
        if (existingProduct) {
            return res.status(400).json({ message: "Product already exists" });
        }

    const newProduct = {
        id: products.length + 1,
        name,
        price,
        quantity: quantity || 0, // Default to 0 if not provided
        description: description || "",
        category: category || "General",
        createdAt: new Date(), // Format: YYYY-MM-DD
        updatedAt: null
    };

    products.push(newProduct);  // update array in-memory
    /// fs.writeFileSync(filePath, JSON.stringify(products, null, 2)); /* Save newly logged product directly into the .json DataBase. */

    console.log(newProduct)
    // save product
    res.status(201).json({
        message: "Product created successfully",
        data: newProduct
    });
};