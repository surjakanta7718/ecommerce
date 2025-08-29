// // server.js
// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const connectDB = require("./db");

// dotenv.config();
// const app = express();

// // Middleware
// app.use(cors({ origin: "*" }));
// app.use(express.json());

// // Routes
// app.use("/api/auth", require("./routes/auth"));
// app.use("/api/products", require("./routes/products"));
// app.use("/api/cart", require("./routes/cart"));
// app.use("/api/wishlist", require("./routes/wishlist"));
// app.use("/api/orders", require("./routes/orders"));
// app.use("/api/contact", require("./routes/contact"));
// app.use("/api/products/:productId/reviews", require("./routes/review"));

// connectDB();

// // Local dev only
// if (require.main === module) {
//   const PORT = process.env.PORT || 5000;
//   app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
// }

// // 👉 Export app (important for Vercel)
// module.exports = app;

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "API root is working 🎉" });
});

// catch-all for testing
app.get("*", (req, res) => {
  res.json({ path: req.path, message: "Universal API route" });
});

module.exports = app;
