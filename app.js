const express = require('express');
const app = express();
const searchroutes = require('./routes/searchroutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
const dietaryPreferenceRoutes = require('./routes/dietaryPreferenceRoutes');
const { supabase } = require('./config/database'); // Assuming you've configured Supabase client

// Middleware to parse JSON bodies
app.use(express.json());

// Routes
app.use('/api/restaurants', restaurantRoutes);
app.use('/api/menuItems', menuItemRoutes);
app.use('/api/dietaryPreferences', dietaryPreferenceRoutes);
app.use('/api', searchroutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
