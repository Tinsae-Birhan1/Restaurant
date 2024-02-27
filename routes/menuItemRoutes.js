const express = require('express');
const router = express.Router();
const menuItemController = require('../controllers/menuItemController');
const { createMenuItemRules } = require('../middlewares/validationRules'); // Import createMenuItemRules

// Menu item routes
router.get('/', menuItemController.getAllMenuItems);
router.get('/:id', menuItemController.getMenuItemById);
router.get('/restaurant/:restaurantId', menuItemController.getMenuItemsByRestaurantId);
router.post('/', createMenuItemRules, menuItemController.createMenuItem); // Use createMenuItemRules middleware here
router.put('/:id', menuItemController.updateMenuItem);
router.delete('/:id', menuItemController.deleteMenuItem);

module.exports = router;
