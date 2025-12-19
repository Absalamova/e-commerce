# E-commerce Backend API

Node.js backend API for the e-commerce application using Express.js and SQLite.

## Features

- RESTful API for products management
- SQLite database with proper schema
- CORS enabled for frontend integration
- Product filtering by category, tag, and search
- Pagination support
- Product images management

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

4. For development with auto-restart:
   ```bash
   npm run dev
   ```

## API Endpoints

### Products
- `GET /api/products` - Get all products with filtering and pagination
- `GET /api/products/:id` - Get single product by ID

### Categories & Tags
- `GET /api/categories` - Get all product categories
- `GET /api/tags` - Get all product tags

### Health Check
- `GET /api/health` - Server health check

## Query Parameters

### Products endpoint supports:
- `category` - Filter by category
- `tag` - Filter by tag
- `search` - Search in product name and description
- `page` - Page number for pagination (default: 1)
- `limit` - Number of products per page (default: 12)

## Database Schema

The database includes two main tables:
- `products` - Product information
- `product_images` - Product image URLs

## Environment Variables

- `PORT` - Server port (default: 5000)

## Development

The server will start on `http://localhost:5000` by default.


