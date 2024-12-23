const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
require('dotenv').config();

const authRoutes = require("./routes/auth");
const campaignRoutes = require("./routes/campaign");

const app = express(); // Initialize an Express app
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI; // Define the server port

// Middleware to handle requests and responses
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse incoming JSON data
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB
mongoose
    .connect(MONGO_URI, )
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/api/auth", authRoutes);
app.use("/api/campaign", campaignRoutes);

app.listen(PORT, () => {
    console.log(`Server Port: ${PORT}`);
});