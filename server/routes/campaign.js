const express = require("express");
const multer = require("multer");
const Campaign = require("../models/Campaign");
const router = express.Router();

const upload = multer({ dest: "uploads/" }); // Adjust for file storage location

// POST route to add a campaign
router.post("/", upload.single("pic"), async (req, res) => {
    console.log('Request body:', req.body);

    try {
        const { campaignName, category, description, campaignLink, current, target } = req.body;
        const newCampaign = new Campaign({
            campaignName: campaignName,
            category: category,
            description: description,
            campaignLink: campaignLink,
            current: current,
            target: target,
            pic: req.file ? req.file.path : null, // Save the file path
        });

        const savedCampaign = await newCampaign.save();
        res.status(201).json(savedCampaign);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to add campaign!!" });
    }
});

// GET route to fetch all campaigns
router.get("/", async (req, res) => {
    try {
        const campaigns = await Campaign.find(); // Fetch all templates from MongoDB
        res.status(200).json(campaigns); // Send the data back to the frontend
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch templates" });
    }
});

// Fetch Template to be Updated
router.get('/:id', async (req, res) => {
    console.log('PUT request received for ID:', req.params.id);
    try {
        const campaign = await Campaign.findById(req.params.id);
        console.log(campaign);
        
        if (!campaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }
        res.status(200).json(campaign);
    } catch (error) {
        console.error('Error fetching campaign:', error);
        res.status(500).json({ message: 'Server Error' });
    }
});

//Update Campaign
router.put('/:id', async (req, res) => {
    try {
        const campaign = await Campaign.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        if (!campaign) {
            return res.status(404).json({ message: 'Campaign not found' });
        }
        res.status(200).json(campaign);
    } catch (error) {
        console.error('Error updating campaign:', error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Delete a template by ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTemplate = await Template.findByIdAndDelete(id);
        if (!deletedTemplate) {
            return res.status(404).json({ message: 'Template not found' });
        }
        res.status(200).json({ message: 'Template deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting template' });
    }
});

module.exports = router;