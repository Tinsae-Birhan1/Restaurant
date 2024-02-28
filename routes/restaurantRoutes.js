// restaurantRoutes.js

const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
const validateInput = require('../middlewares/validateInput');
const { searchRestaurantRules } = require('../middlewares/validationRules');
const { createRestaurantRules, updateRestaurantRules } = require('../middlewares/validationRules');
router.get('/', restaurantController.getAllRestaurants);
router.get('/:id', restaurantController.getRestaurantById);
router.post('/', createRestaurantRules, validateInput, restaurantController.createRestaurant);
router.put('/:id', updateRestaurantRules, validateInput, restaurantController.updateRestaurant);
router.delete('/:id', restaurantController.deleteRestaurant);

module.exports = router;