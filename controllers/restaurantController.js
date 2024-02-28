const Restaurant = require('../models/restaurantModel');
const cache = require('memory-cache');
const { supabase } = require('../config/database');

const restaurantController = {
  getAllRestaurants: async (req, res) => {
    try {
      let data = cache.get("data");
      if (!data) {
        data = await Restaurant.findAll();
        cache.put("data", data); 
      }
      res.status(200).json({
        message: "Data retrieved successfully",
        data: data
      });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  
  getRestaurantById: async (req, res) => {
    try {
      const restaurant = await Restaurant.findById(req.params.id);
      if (!restaurant) {
        res.status(404).json({ message: 'Restaurant not found' });
      } else if (restaurant.length === 0) {
        res.status(404).json({ message: 'Restaurant not found' });
      } else {
        res.json(restaurant[0]);
      }
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  
  createRestaurant: async (req, res) => {
    try {
      const newRestaurant = await Restaurant.create(req.body);
      console.log(newRestaurant)
      res.status(201).json({
        message: 'Restaurant created successfully',
        // data: newRestaurant
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  updateRestaurant: async (req, res) => {
    try {
      const updatedRestaurant = await Restaurant.update(req.params.id, req.body);
      res.status(200).json({
        message: 'Restaurant updated successfully',
        // data: updatedRestaurant
      });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
  deleteRestaurant: async (req, res) => {
    try {
      await Restaurant.delete(req.params.id);
      res.json({ message: 'Restaurant deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
  searchRestaurants: async (req, res) => {
    try {
        const { location, cuisine, dietaryPreferences, page = 1, limit = 10 } = req.query;
        let query = 'SELECT * FROM restaurants';
        const whereClauses = [];
        const queryParams = [];

        if (location) {
            whereClauses.push(`ST_DWithin(geolocation, ST_SetSRID(ST_MakePoint($1, $2), 4326), 10000)`);
            const [longitude, latitude] = location.split(',').map(parseFloat);
            queryParams.push(longitude, latitude);
        }
        if (cuisine) {
          whereClauses.push(`cuisine = $${queryParams.length + 1}`);
          queryParams.push(cuisine);
      }
        if (whereClauses.length > 0) {
            query += ' WHERE ' + whereClauses.join(' AND ');
        }

        const offset = (page - 1) * limit;
        query += ` LIMIT ${limit} OFFSET ${offset}`;
        
       
        const {  restaurants, error } = supabase.from('query', [queryParams, query]);

        if (error) {
            throw new Error(error.message);
        }
        res.status(200).json({
            message: "Restaurants retrieved successfully",
            restaurants
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}





  

};

module.exports = restaurantController;
