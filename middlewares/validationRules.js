// validationRules.js

const { query, param, body } = require('express-validator');

// exports.searchRestaurantRules = [
//   query('latitude').exists().isFloat(),
//   query('longitude').exists().isFloat(),
//   query('dietaryPreferences').optional().isArray(),
//   query('cuisine').optional().isString(),
//   query('rating').optional().isFloat(),
//   query('priceRange').optional().isString(),
//   query('page').optional().isInt(),
//   query('limit').optional().isInt()
// ];
exports.searchRestaurantRules = [
  query('location').optional().isString(), // Assuming location is a string in format "latitude,longitude"
  query('cuisine').optional().isString(),
  query('dietaryPreferences').optional().isArray(),
  query('page').optional().isInt(),
  query('limit').optional().isInt()
];

exports.createMenuItemRules = [
  body('restaurant_id').exists().isInt(),
  body('name').exists().isString(),
  body('description').optional().isString(),
  body('price').exists().isFloat()
];

exports.updateMenuItemRules = [
  body('name').optional().isString(),
  body('description').optional().isString(),
  body('price').optional().isFloat()
];

exports.createRestaurantRules = [
  body('name').exists().isString(),
  body('latitude').exists().isFloat(),
  body('longitude').exists().isFloat(),
  body('cuisine').optional().isString(),
  body('dietaryPreferences').optional().isArray(),
  body('rating').optional().isFloat(),
  body('priceRange').optional().isString(),
];

exports.updateRestaurantRules = [
  body('name').optional().isString(),
  body('latitude').optional().isFloat(),
  body('longitude').optional().isFloat(),
  body('cuisine').optional().isString(),
  body('dietaryPreferences').optional().isArray(),
  body('rating').optional().isFloat(),
  body('priceRange').optional().isString(),
];
