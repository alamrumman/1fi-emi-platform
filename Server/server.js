const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Load env variables
dotenv.config();

// Import routes
const productRoutes = require("./Routes/productRoutes");

const app = express();

const allowedOrigins = [
  "http://localhost:5173", // for local dev (Vite)
  "https://onefi-emi-platform-qfen.onrender.com", //  Render frontend URL
];

// ✅ CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true, // allows cookies or authorization headers
  })
);

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB connection error:", err));

// Routes
app.use("/api/products", productRoutes);

// Test route

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
