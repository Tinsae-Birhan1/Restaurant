# Restaurant Management API

## Overview

This project implements a RESTful API for managing restaurants, menu items, and dietary preferences. It utilizes Node.js and Express.js for the backend, along with Supabase as the database service.

## Project Structure

```
config/
  └── database.js
controllers/
  ├── dietaryPreferenceController.js
  ├── menuItemController.js
  └── restaurantController.js
middlewares/
  ├── validateInput.js
  └── validationRules.js
models/
  ├── dietaryPreferenceModel.js
  ├── menuItemModel.js
  └── restaurantModel.js
routes/
  ├── dietaryPreferenceRoutes.js
  ├── menuItemRoutes.js
  └── restaurantRoutes.js
app.js
README.md
```

## Key Components

- **config**: Contains the database configuration file.
- **controllers**: Implements controller functions for handling HTTP requests.
- **middlewares**: Houses middleware functions for input validation.
- **models**: Defines models for interacting with the database.
- **routes**: Defines route handlers for different API endpoints.
- **app.js**: Entry point of the application where routes are configured and server is started.
- **README.md**: Documentation file providing an overview, structure, and setup instructions.

## Assumptions and Decisions

- **Supabase**: Utilized as the database service for its ease of setup and features like real-time subscriptions and authentication.
- **Memory Cache**: Implemented caching using `memory-cache` to improve performance by reducing database queries for certain endpoints.
- **Express Validator**: Used `express-validator` for input validation middleware to ensure data integrity and security.
- **Pagination**: Implemented pagination for listing resources to enhance usability and performance.
- **Error Handling**: Implemented error handling middleware to provide consistent error responses.

## Setup Instructions

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up Supabase:
   - Create an account on Supabase (https://supabase.io/).
   - Create a new project and database.
   - Copy the Supabase URL and API Key to `config/database.js`.
4. Run the application: `npm start`
5. Access the API endpoints at `http://localhost:3000/api`

## External Libraries and Tools

- **Express.js**: Web application framework for Node.js.
- **Supabase**: Database service providing PostgreSQL as a service with built-in APIs.
- **Express Validator**: Middleware for input validation in Express.js applications.
- **Memory Cache**: In-memory caching library for Node.js applications.

## Additional Notes

- Ensure that Node.js and npm are installed on your system.
- Customize database configurations and validation rules as per project requirements.
- Refer to individual controller, model, and route files for detailed implementation.

---
