const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const protectedRoutes = require("./routes/protectedRoutes");

const app = express();

app.use(express.json());

// connect to database
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log(err));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);

// test route
app.get("/", (req, res) => {
  res.send("GeoSecure IAM API is running 🚀");
});

app.listen(process.env.PORT, () => {
  console.log("Server running on port " + process.env.PORT);
});