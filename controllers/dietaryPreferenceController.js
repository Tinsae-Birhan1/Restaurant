// dietaryPreferenceController.js

const DietaryPreference = require('../models/dietaryPreferenceModel');

// Controller actions
const dietaryPreferenceController = {
  getAllDietaryPreferences: async (req, res) => {
    try {
      const data = await DietaryPreference.findAll();
      res.status(200).json({
        message: "Data retrieved successfully",
        data: data
      });
      } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  
  getDietaryPreferenceById: async (req, res) => {
    try {
      const dietaryPreference = await DietaryPreference.findById(req.params.id);
      if (!dietaryPreference || dietaryPreference.length === 0) {
        res.status(404).json({ message: 'Dietary preference not found' });
      } else {
        res.json(dietaryPreference[0]);
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  
  createDietaryPreference: async (req, res) => {
    try {
      const newDietaryPreference = await DietaryPreference.create(req.body);
      res.status(201).json({
        message: 'Restaurant created successfully',
        // data: newMenuItem
      });     } catch (err) {
      res.status(400).json({ message: err.message });
    }
},

  updateDietaryPreference: async (req, res) => {
    try {
      const updatedDietaryPreference = await DietaryPreference.update(req.params.id, req.body);
      res.json(updatedDietaryPreference);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  deleteDietaryPreference: async (req, res) => {
    try {
      await DietaryPreference.delete(req.params.id);
      res.json({ message: 'Dietary preference deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = dietaryPreferenceController;
