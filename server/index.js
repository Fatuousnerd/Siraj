const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");

const authRoutes = require("./routes/auth");
const campaignRoutes = require("./routes/campaign");

const app = express(); // Initialize an Express app
const PORT = 5000; // Define the server port

// Middleware to handle requests and responses
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse incoming JSON data
app.use(bodyParser.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB
mongoose
    .connect("mongodb+srv://calvinkmwaura:Fatuous_1764@cluster0.rv4yc.mongodb.net/SIRAJ")
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use("/api/auth", authRoutes);
app.use("/api/campaign", campaignRoutes);

app.listen(PORT, () => {
    console.log(`Server Port: ${PORT}`);
});