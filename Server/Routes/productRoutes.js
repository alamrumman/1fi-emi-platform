const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../Controllers/ProductController");

// GET /api/products - Get all products
router.get("/", getAllProducts);

// GET /api/products/:id - Get single product
router.get("/:id", getProductById);

// POST /api/products - Create new product (admin)
router.post("/", createProduct);

// PUT /api/products/:id - Update product (admin)
router.put("/:id", updateProduct);

// DELETE /api/products/:id - Delete product (admin)
router.delete("/:id", deleteProduct);

module.exports = router;

