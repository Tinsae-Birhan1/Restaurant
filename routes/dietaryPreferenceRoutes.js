// dietaryPreferenceRoutes.js

const express = require('express');
const router = express.Router();
const dietaryPreferenceController = require('../controllers/dietaryPreferenceController');

// Dietary preference routes
router.get('/', dietaryPreferenceController.getAllDietaryPreferences);
router.get('/:id', dietaryPreferenceController.getDietaryPreferenceById);
router.post('/', dietaryPreferenceController.createDietaryPreference);
router.put('/:id', dietaryPreferenceController.updateDietaryPreference);
router.delete('/:id', dietaryPreferenceController.deleteDietaryPreference);

module.exports = router;
