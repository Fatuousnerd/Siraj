const mongoose = require("mongoose");

// Define a schema (a blueprint for the data structure)
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, // User's name is required
  email: { type: String, required: true, unique: true }, // Email is required and must be unique
  googlePhotoURL: { type: String }, // Optional field for user's Google profile picture URL
  createdAt: { type: Date, default: Date.now }, // Automatically records when the user is created
  role: {type: String, enum: ["user", "admin"],default: "user",},
});

// Create a model from the schema
const User = mongoose.model("User", UserSchema);

// Export the model so it can be used in other parts of the application
module.exports = User;
