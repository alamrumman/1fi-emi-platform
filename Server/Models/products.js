// models/Product.js
const mongoose = require("mongoose");

const variantSchema = new mongoose.Schema({
  color: {
    type: String,
    required: true,
  },
  colorCode: {
    type: String,
    required: true, // Hex color for display
  },
  storage: {
    type: String,
    required: true, // "128 GB", "256 GB", "512 GB"
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
  },
  sku: {
    type: String,
    unique: true,
    required: true, // "IPHONE15-256-ORANGE"
  },
});

const emiPlanSchema = new mongoose.Schema({
  tenure: {
    type: Number,
    required: true, // 3, 6, 9, 12 months
  },
  interestRate: {
    type: Number,
    required: true, // 1.0, 1.73, 1.88, 1.89
  },
  label: {
    type: String,
    default: "", // "10% EMI" or empty
  },
});

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    brand: {
      type: String,
      required: true, // "Apple", "Samsung", "OnePlus"
    },
    category: {
      type: String,
      default: "Smartphone",
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        url: String,
        alt: String,
      },
    ],
    basePrice: {
      type: Number,
      required: true, // Starting price for comparison
    },
    variants: [variantSchema],

    // EMI Configuration
    emiPlans: [emiPlanSchema],
    minDownpaymentPercentage: {
      type: Number,
      default: 15, // 15%
    },
    downpaymentOptions: [
      {
        percentage: Number, // 15, 30
        amount: Number, // Calculated based on price
      },
    ],

    // Features
    features: [
      {
        type: String,
      },
    ],

    // Metadata
    isActive: {
      type: Boolean,
      default: true,
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },

    // SEO
    slug: {
      type: String,

      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
productSchema.index({ brand: 1, isActive: 1 });
productSchema.index({ slug: 1 });

// Virtual for calculating EMI amount
productSchema.methods.calculateEMI = function (price, downpayment, tenure) {
  const principal = price - downpayment;
  const monthlyInterest = 0.08 / 12; // 8% annual = 0.67% monthly
  const emiAmount = Math.ceil(
    (principal * monthlyInterest * Math.pow(1 + monthlyInterest, tenure)) /
      (Math.pow(1 + monthlyInterest, tenure) - 1)
  );
  return emiAmount;
};

module.exports = mongoose.model("Product", productSchema);
