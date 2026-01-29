const express = require('express');
const router = express.Router();
const { newProduct } = require('../controllers/product.controller.js');


router.post("/products", newProduct);

module.exports = router;