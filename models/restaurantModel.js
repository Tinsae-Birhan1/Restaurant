// restaurantModel.js

const { supabase } = require('../config/database');

// Define Restaurant model
const Restaurant = {
  findAll: async () => {
    const { data, error } = await supabase.from('restaurants').select('*');
    if (error) throw new Error(error.message);
    return data;
  },
  findById: async (id) => {
    const { data, error } = await supabase.from('restaurants').select('*').eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  },
  
  create: async (restaurant) => {
    const { data, error } = await supabase.from('restaurants').insert(restaurant).single();
    if (error) throw new Error(error.message);
    return data; // Return the newly created restaurant data
  },
  
  update: async (id, restaurant) => {
    const { data, error } = await supabase.from('restaurants').update(restaurant).eq('id', id).single();
    if (error) throw new Error(error.message);
    return data; // Return the updated restaurant data
  },
  
  
  delete: async (id) => {
    const { error } = await supabase.from('restaurants').delete().eq('id', id);
    if (error) throw new Error(error.message);
  }
  
};

module.exports = Restaurant;
