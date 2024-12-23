const express = require("express");
const User = require("../models/User"); // Import the User model
const router = express.Router(); // Create a new router

// POST route for Google OAuth
router.post("/google", async (req, res) => {
  try {
    const { name, email, googlePhotoURL } = req.body; // Extract user data from the request body

    // Check if the user already exists in the database
    let user = await User.findOne({ email });

    if (user) {
      // If user exists, update their details (if needed)
      console.log("User already exists:", user);
    } else {
      // If user does not exist, create a new user
      user = new User({ name, email, googlePhotoURL });
      await user.save();
      console.log("New user created:", user);
    }

    // Respond to the frontend with the user information
    res.status(200).json(user);
  } catch (error) {
    console.error("Error in Google OAuth:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router; // Export the router to be used in index.js
