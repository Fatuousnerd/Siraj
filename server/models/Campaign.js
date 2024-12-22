const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  campaignName: { type: String, required: true, trim: true },
  category: { type: String, required: true },
  description: { type: String },
  campaignLink: { type: String, required: false, trim: true },
  current: { type: Number, required: false },
  target: { type: Number, required: true },
  pic: { type: String }, // Path to the uploaded file
});

module.exports = mongoose.model("Campaign", CampaignSchema);
