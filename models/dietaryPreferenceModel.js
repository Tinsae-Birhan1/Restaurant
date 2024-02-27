
const { supabase } = require('../config/database');

// Define Dietary Preference model
const DietaryPreference = {
  findAll: async () => {
    const { data, error } = await supabase.from('dietary_preferences').select('*');
    if (error) throw new Error(error.message);
    return data;
  },
  
  findById: async (id) => {
    const { data, error } = await supabase.from('dietary_preferences').select('*').eq('id', id);
    if (error) throw new Error(error.message);
    return data;
  },
  
  create: async (dietaryPreference) => {
    const { data, error } = await supabase.from('dietary_preferences').insert(dietaryPreference).single();
    if (error) throw new Error(error.message);
    return data;
  },
  update: async (id, dietaryPreference) => {
    const { data, error } = await supabase
      .from('dietary_preferences')
      .update(dietaryPreference)
      .eq('id', id)
      .single(); // Assuming updating a single row
    if (error) throw new Error(error.message);
    return data;
  },
  
  delete: async (id) => {
    const { error } = await supabase
      .from('dietary_preferences')
      .delete()
      .eq('id', id);
    if (error) throw new Error(error.message);
  }
  
};

module.exports = DietaryPreference;
