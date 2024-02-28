// restaurantRoutes.js

const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');
router.get('/search', restaurantController.searchRestaurants);

module.exports = router;
