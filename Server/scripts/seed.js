const mongoose = require("mongoose");
const Product = require("../Models/products");

// OR if using MongoDB Atlas:
const MONGO_URI = provess.env.MONGO_URI;

const sampleProducts = [
  {
    name: "Google Pixel 9 Pro",
    brand: "Google",
    category: "Smartphone",
    description:
      "Google's flagship with advanced AI features, Tensor G4 chip, and exceptional camera capabilities",
    images: [
      {
        url: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=800",
        alt: "Google Pixel 9 Pro",
      },
      {
        url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
        alt: "Pixel 9 Pro side",
      },
    ],
    basePrice: 99999,
    variants: [
      {
        color: "Porcelain",
        colorCode: "#f5f5f0",
        storage: "256 GB",
        price: 99999,
        stock: 45,
        sku: "PIXEL9PRO-256-PORCELAIN",
      },
      {
        color: "Obsidian",
        colorCode: "#1a1a1a",
        storage: "256 GB",
        price: 99999,
        stock: 40,
        sku: "PIXEL9PRO-256-OBSIDIAN",
      },
      {
        color: "Porcelain",
        colorCode: "#f5f5f0",
        storage: "512 GB",
        price: 109999,
        stock: 35,
        sku: "PIXEL9PRO-512-PORCELAIN",
      },
      {
        color: "Hazel",
        colorCode: "#6b8e7f",
        storage: "512 GB",
        price: 109999,
        stock: 30,
        sku: "PIXEL9PRO-512-HAZEL",
      },
    ],
    emiPlans: [
      { tenure: 3, interestRate: 1.0, label: "10% EMI" },
      { tenure: 6, interestRate: 1.73, label: "" },
      { tenure: 9, interestRate: 1.88, label: "" },
      { tenure: 12, interestRate: 1.89, label: "" },
    ],
    minDownpaymentPercentage: 15,
    downpaymentOptions: [
      { percentage: 15, amount: 15000 },
      { percentage: 30, amount: 30000 },
    ],
    features: [
      "Don't need to liquidate your investments",
      "Save on capital gain tax",
      "Professionally managed portfolio",
      "Flexible withdrawals and repayments",
    ],
    isActive: true,
    isFeatured: true,
    slug: "google-pixel-9-pro",
  },

  // Google Pixel 8a
  {
    name: "Google Pixel 8a",
    brand: "Google",
    category: "Smartphone",
    description:
      "Affordable Google flagship experience with Tensor G3 and stunning camera",
    images: [
      {
        url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800",
        alt: "Google Pixel 8a",
      },
    ],
    basePrice: 52999,
    variants: [
      {
        color: "Bay Blue",
        colorCode: "#4a90e2",
        storage: "128 GB",
        price: 52999,
        stock: 55,
        sku: "PIXEL8A-128-BLUE",
      },
      {
        color: "Obsidian",
        colorCode: "#1a1a1a",
        storage: "128 GB",
        price: 52999,
        stock: 50,
        sku: "PIXEL8A-128-OBSIDIAN",
      },
      {
        color: "Bay Blue",
        colorCode: "#4a90e2",
        storage: "256 GB",
        price: 59999,
        stock: 40,
        sku: "PIXEL8A-256-BLUE",
      },
    ],
    emiPlans: [
      { tenure: 3, interestRate: 1.0, label: "10% EMI" },
      { tenure: 6, interestRate: 1.73, label: "" },
      { tenure: 9, interestRate: 1.88, label: "" },
      { tenure: 12, interestRate: 1.89, label: "" },
    ],
    minDownpaymentPercentage: 15,
    downpaymentOptions: [
      { percentage: 15, amount: 7950 },
      { percentage: 30, amount: 15900 },
    ],
    features: [
      "Don't need to liquidate your investments",
      "Save on capital gain tax",
      "Professionally managed portfolio",
      "Flexible withdrawals and repayments",
    ],
    isActive: true,
    isFeatured: false,
    slug: "google-pixel-8a",
  },

  // MacBook Air M3
  {
    name: 'MacBook Air 13" M3',
    brand: "Apple",
    category: "Laptop",
    description:
      "Incredibly thin and light laptop powered by Apple M3 chip with up to 18 hours battery life",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
        alt: "MacBook Air M3",
      },
      {
        url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800",
        alt: "MacBook Air side view",
      },
    ],
    basePrice: 114900,
    variants: [
      {
        color: "Midnight",
        colorCode: "#1a1f3a",
        storage: "256 GB",
        price: 114900,
        stock: 30,
        sku: "MBA13M3-256-MIDNIGHT",
      },
      {
        color: "Starlight",
        colorCode: "#f5f5dc",
        storage: "256 GB",
        price: 114900,
        stock: 35,
        sku: "MBA13M3-256-STARLIGHT",
      },
      {
        color: "Space Gray",
        colorCode: "#4a5568",
        storage: "256 GB",
        price: 114900,
        stock: 28,
        sku: "MBA13M3-256-GRAY",
      },
      {
        color: "Midnight",
        colorCode: "#1a1f3a",
        storage: "512 GB",
        price: 134900,
        stock: 25,
        sku: "MBA13M3-512-MIDNIGHT",
      },
      {
        color: "Starlight",
        colorCode: "#f5f5dc",
        storage: "512 GB",
        price: 134900,
        stock: 22,
        sku: "MBA13M3-512-STARLIGHT",
      },
    ],
    emiPlans: [
      { tenure: 3, interestRate: 1.0, label: "10% EMI" },
      { tenure: 6, interestRate: 1.73, label: "" },
      { tenure: 9, interestRate: 1.88, label: "" },
      { tenure: 12, interestRate: 1.89, label: "" },
    ],
    minDownpaymentPercentage: 15,
    downpaymentOptions: [
      { percentage: 15, amount: 17235 },
      { percentage: 30, amount: 34470 },
    ],
    features: [
      "Don't need to liquidate your investments",
      "Save on capital gain tax",
      "Professionally managed portfolio",
      "Flexible withdrawals and repayments",
    ],
    isActive: true,
    isFeatured: true,
    slug: "macbook-air-13-m3",
  },

  // MacBook Pro 14" M3 Pro
  {
    name: 'MacBook Pro 14" M3 Pro',
    brand: "Apple",
    category: "Laptop",
    description:
      "Supercharged for pros with M3 Pro chip, stunning Liquid Retina XDR display, and up to 18 hours battery",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800",
        alt: "MacBook Pro 14",
      },
      {
        url: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=800",
        alt: "MacBook Pro display",
      },
    ],
    basePrice: 199900,
    variants: [
      {
        color: "Space Black",
        colorCode: "#1a1a1a",
        storage: "512 GB",
        price: 199900,
        stock: 20,
        sku: "MBP14M3PRO-512-BLACK",
      },
      {
        color: "Silver",
        colorCode: "#c0c0c0",
        storage: "512 GB",
        price: 199900,
        stock: 18,
        sku: "MBP14M3PRO-512-SILVER",
      },
      {
        color: "Space Black",
        colorCode: "#1a1a1a",
        storage: "1 TB",
        price: 229900,
        stock: 15,
        sku: "MBP14M3PRO-1TB-BLACK",
      },
    ],
    emiPlans: [
      { tenure: 3, interestRate: 1.0, label: "10% EMI" },
      { tenure: 6, interestRate: 1.73, label: "" },
      { tenure: 9, interestRate: 1.88, label: "" },
      { tenure: 12, interestRate: 1.89, label: "" },
    ],
    minDownpaymentPercentage: 15,
    downpaymentOptions: [
      { percentage: 15, amount: 29985 },
      { percentage: 30, amount: 59970 },
    ],
    features: [
      "Don't need to liquidate your investments",
      "Save on capital gain tax",
      "Professionally managed portfolio",
      "Flexible withdrawals and repayments",
    ],
    isActive: true,
    isFeatured: true,
    slug: "macbook-pro-14-m3-pro",
  },

  // ASUS ROG Zephyrus G14
  {
    name: "ASUS ROG Zephyrus G14",
    brand: "ASUS",
    category: "Laptop",
    description:
      "Compact gaming powerhouse with AMD Ryzen 9, NVIDIA RTX 4060, and AniMe Matrix display",
    images: [
      {
        url: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800",
        alt: "ASUS ROG Zephyrus G14",
      },
      {
        url: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=800",
        alt: "Gaming laptop",
      },
    ],
    basePrice: 164990,
    variants: [
      {
        color: "Eclipse Gray",
        colorCode: "#2d3748",
        storage: "512 GB SSD",
        price: 164990,
        stock: 25,
        sku: "ROG-G14-512-GRAY",
      },
      {
        color: "Moonlight White",
        colorCode: "#f7fafc",
        storage: "512 GB SSD",
        price: 164990,
        stock: 20,
        sku: "ROG-G14-512-WHITE",
      },
      {
        color: "Eclipse Gray",
        colorCode: "#2d3748",
        storage: "1 TB SSD",
        price: 184990,
        stock: 18,
        sku: "ROG-G14-1TB-GRAY",
      },
    ],
    emiPlans: [
      { tenure: 3, interestRate: 1.0, label: "10% EMI" },
      { tenure: 6, interestRate: 1.73, label: "" },
      { tenure: 9, interestRate: 1.88, label: "" },
      { tenure: 12, interestRate: 1.89, label: "" },
    ],
    minDownpaymentPercentage: 15,
    downpaymentOptions: [
      { percentage: 15, amount: 24749 },
      { percentage: 30, amount: 49497 },
    ],
    features: [
      "Don't need to liquidate your investments",
      "Save on capital gain tax",
      "Professionally managed portfolio",
      "Flexible withdrawals and repayments",
    ],
    isActive: true,
    isFeatured: true,
    slug: "asus-rog-zephyrus-g14",
  },

  // ASUS Zenbook 14 OLED
  {
    name: "ASUS Zenbook 14 OLED",
    brand: "ASUS",
    category: "Laptop",
    description:
      'Ultra-portable laptop with stunning 14" OLED display, Intel Core i7, and all-day battery life',
    images: [
      {
        url: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800",
        alt: "ASUS Zenbook 14",
      },
    ],
    basePrice: 94990,
    variants: [
      {
        color: "Ponder Blue",
        colorCode: "#4a6fa5",
        storage: "512 GB SSD",
        price: 94990,
        stock: 30,
        sku: "ZENBOOK14-512-BLUE",
      },
      {
        color: "Jasper Gray",
        colorCode: "#71717a",
        storage: "512 GB SSD",
        price: 94990,
        stock: 28,
        sku: "ZENBOOK14-512-GRAY",
      },
      {
        color: "Ponder Blue",
        colorCode: "#4a6fa5",
        storage: "1 TB SSD",
        price: 109990,
        stock: 22,
        sku: "ZENBOOK14-1TB-BLUE",
      },
    ],
    emiPlans: [
      { tenure: 3, interestRate: 1.0, label: "10% EMI" },
      { tenure: 6, interestRate: 1.73, label: "" },
      { tenure: 9, interestRate: 1.88, label: "" },
      { tenure: 12, interestRate: 1.89, label: "" },
    ],
    minDownpaymentPercentage: 15,
    downpaymentOptions: [
      { percentage: 15, amount: 14249 },
      { percentage: 30, amount: 28497 },
    ],
    features: [
      "Don't need to liquidate your investments",
      "Save on capital gain tax",
      "Professionally managed portfolio",
      "Flexible withdrawals and repayments",
    ],
    isActive: true,
    isFeatured: false,
    slug: "asus-zenbook-14-oled",
  },
];

// ... all your sampleProducts array stays the same ...

// Seed function
const seedMoreProducts = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB Connected...");

    // Insert new products (changed from newProducts to sampleProducts)
    const products = await Product.insertMany(sampleProducts);
    console.log(`✅ ${products.length} new products added successfully!`);

    // Display inserted products
    products.forEach((product) => {
      console.log(
        `- ${product.name} (${product.variants.length} variants) - ${product.category}`
      );
    });

    // Show total count
    const totalProducts = await Product.countDocuments();
    console.log(`\n📦 Total products in database: ${totalProducts}`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

// Run the seed function (changed from seedDatabase to seedMoreProducts)
seedMoreProducts();
