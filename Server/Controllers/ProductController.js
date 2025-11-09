const Product = require("../Models/products");

// @desc    Get all active products
// @route   GET /api/products
// @access  Public
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({ isActive: true })
      .select("-__v")
      .sort("-createdAt");

    // Format response for frontend
    const formattedProducts = products.map((product) => ({
      id: product._id,
      name: product.name,
      brand: product.brand,
      image: product.images[0]?.url || "",
      price: product.basePrice,
      variants: product.variants.map((v) => ({
        id: v._id,
        color: v.color,
        storage: v.storage,
        price: v.price,
      })),
      minDownpayment: Math.ceil(
        product.basePrice * (product.minDownpaymentPercentage / 100)
      ),
      emiPlans: product.emiPlans,
    }));

    res.json({
      success: true,
      count: formattedProducts.length,
      data: formattedProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// @desc    Get single product by ID
// @route   GET /api/products/:id
// @access  Public
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Format response
    const formattedProduct = {
      id: product._id,
      name: product.name,
      brand: product.brand,
      description: product.description,
      images: product.images,
      variants: product.variants,
      emiPlans: product.emiPlans,
      downpaymentOptions: product.downpaymentOptions,
      features: product.features,
      emiStartDate: "3rd Dec", // You can calculate this dynamically
    };

    res.status(200).json({
      success: true,
      data: formattedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};

// @desc    Create new product
// @route   POST /api/products
// @access  Private/Admin
exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create product",
      error: error.message,
    });
  }
};

// @desc    Update product
// @route   PUT /api/products/:id
// @access  Private/Admin
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to update product",
      error: error.message,
    });
  }
};

// @desc    Delete product
// @route   DELETE /api/products/:id
// @access  Private/Admin
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
      error: error.message,
    });
  }
};
