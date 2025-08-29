const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db");

dotenv.config();
const app = express();

// ✅ Explicit CORS setup with preflight
const corsOptions = { origin: "*" };


app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // <-- handle preflight requests

// Middleware
app.use(express.json());

// Routes
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/products", require("./routes/products"));
// app.use("/api/cart", require("./routes/cart"));
// app.use("/api/wishlist", require("./routes/wishlist"));
// app.use("/api/orders", require("./routes/orders"));
// app.use("/api/contact", require("./routes/contact"));
// app.use("/api/products/:productId/reviews", require("./routes/review"));
app.all("/api/*", (req, res) => {
  res.json({
    success: true,
    message: "Universal API route",
    method: req.method,
    path: req.originalUrl,
    query: req.query,
    body: req.body,
  });
});


// Connect DB
connectDB();

// Local dev only
if (require.main === module) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
}

// Export for Vercel
module.exports = app;
