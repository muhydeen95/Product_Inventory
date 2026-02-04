const express = require('express');
const router = express.Router();
const { 
    getAllPaginatedProducts,
    getAllProducts, 
    getOneProducts, 
    createProduct,
    updateProduct,
    deleteProduct
} = require('../controllers/product.controller');


router.get("/products", getAllPaginatedProducts);
router.get("/products/all", getAllProducts);
router.get("/product/:id", getOneProducts);
router.post("/product/create", createProduct);
router.patch("/product/:id", updateProduct);
router.delete("/product/:id", deleteProduct);

module.exports = router;