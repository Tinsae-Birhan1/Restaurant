// menuItemModel.js

const { supabase } = require('../config/database');

// Define Menu Item model
const MenuItem = {
  findAll: async () => {
    const { data, error } = await supabase.from('menu_items').select('*');
    if (error) throw new Error(error.message);
    return data;
  },

  
  findById: async (id) => {
    const { data, error } = await supabase.from('menu_items').select('*').eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  },
  
  findByRestaurantId: async (restaurantId) => {
    const { data, error } = await supabase.from('menu_items').select('*').eq('restaurant_id', restaurantId);
    if (error) throw new Error(error.message);
    return data;
  },
  create: async (menuItem) => {
    const { data, error } = await supabase.from('menu_items').insert(menuItem).single();
    if (error) throw new Error(error.message);
    return data;
  },
  update: async (id, menuItem) => {
    const { data, error } = await supabase.from('menu_items').update(menuItem).eq('id', id).single();
    if (error) throw new Error(error.message);
    return data;
  },
  
  delete: async (id) => {
    const { error } = await supabase.from('menu_items').delete().eq('id', id);
    if (error) throw new Error(error.message);
  }
  
};

module.exports = MenuItem;
