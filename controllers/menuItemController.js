// menuItemController.js

const MenuItem = require('../models/menuItemModel');
const cache = require('memory-cache');

// Controller actions
const menuItemController = {
  getAllMenuItems: async (req, res) => {
    try {
      const data = await MenuItem.findAll();
      res.status(200).json({
        message: "Data retrieved successfully",
        data: data
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  
  getMenuItemById: async (req, res) => {
    try {
      const menuItem = await MenuItem.findById(req.params.id);
      if (!menuItem) {
        res.status(404).json({ message: 'Menu item not found' });
      } else if (menuItem.length === 0) {
        res.status(404).json({ message: 'Menu item not found' });
      } else {
        res.json(menuItem[0]);
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  
  getMenuItemsByRestaurantId: async (req, res) => {
    try {
      const menuItems = await MenuItem.findByRestaurantId(req.params.restaurantId);
      res.json(menuItems.rows);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  createMenuItem: async (req, res) => {
    try {
      const newMenuItem = await MenuItem.create(req.body);
      res.status(201).json({
        message: 'Restaurant created successfully',
        // data: newMenuItem
      });    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  updateMenuItem: async (req, res) => {
    try {
      const updatedMenuItem = await MenuItem.update(req.params.id, req.body);
      res.status(200).json({
        message: 'Restaurant updated successfully',
        // data: updatedMenuItem
      });    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  deleteMenuItem: async (req, res) => {
    try {
      await MenuItem.delete(req.params.id);
      res.json({ message: 'Menu item deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }
};

module.exports = menuItemController;
