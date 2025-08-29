// server.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const connectDB = require("./db");

dotenv.config();
const app = express();

// Middleware
// ✅ CORS config (allow only your frontend)
app.use(cors({
  origin: "https://ecommerce-hazel-tau-48.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/products", require("./routes/products"));
app.use("/api/cart", require("./routes/cart"));
app.use("/api/wishlist", require("./routes/wishlist"));
app.use("/api/orders", require("./routes/orders"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/products/:productId/reviews", require("./routes/review"));

// ❌ Remove frontend static serving (Vercel handles frontend separately)

// Connect DB
connectDB();

// Local dev only
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
}

// Export for Vercel
module.exports = app;
