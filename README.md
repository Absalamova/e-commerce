# 🛍️ E-Commerce Professional Website

A modern, professional e-commerce website built with React, Node.js, Express, and SQLite. Features product browsing, shopping cart, favorites, multi-language support, and a complete backend API with automatic fallback system.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Product Management**: Browse products by category, search, and view details
- **Shopping Cart**: Add/remove items with quantity management
- **Favorites**: Save favorite products for later
- **Backend API**: RESTful API with SQLite database
- **Voice Search**: Voice-activated product search
- **Real-time Updates**: Dynamic product loading and filtering
- **Error Handling**: Comprehensive error handling with fallbacks

## 🛠️ Tech Stack

### Frontend
- React 19
- React Router DOM
- Tailwind CSS
- Zustand (State Management)
- React Icons
- Swiper

### Backend
- Node.js
- Express.js
- SQLite3
- CORS

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### ⚡ One-Command Professional Setup (Recommended)
```bash
# Install all dependencies and start both servers
npm install
npm run full
```

This automatically:
1. ✅ Installs all dependencies (frontend + backend)
2. ✅ Starts backend server on port 5000
3. ✅ Starts frontend development server on port 5173
4. ✅ Products always display (with automatic fallback)

### Manual Setup

#### Backend Only
```bash
cd backend
npm install
npm start  # Runs on http://localhost:5000
```

#### Frontend Only
```bash
# Install frontend dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🗄️ Database Schema

The application uses SQLite with the following main tables:

- **products**: Product information (name, price, description, etc.)
- **product_images**: Product image URLs with primary image flag

## 🔌 API Endpoints

### Products
- `GET /api/products` - Get products with filtering and pagination
- `GET /api/products/:id` - Get single product by ID

### Categories & Tags
- `GET /api/categories` - Get all product categories
- `GET /api/tags` - Get all product tags

### Health Check
- `GET /api/health` - Server health check

## 🔍 Query Parameters

### Products endpoint supports:
- `category` - Filter by category
- `tag` - Filter by tag (Promotions, New Arrivals, etc.)
- `search` - Search in product name and description
- `page` - Page number for pagination (default: 1)
- `limit` - Number of products per page (default: 12)

## 🎨 UI/UX Improvements

- **Modern Design**: Gradient buttons, smooth transitions, hover effects
- **Responsive Layout**: Mobile-first design that works on all devices
- **Loading States**: Skeleton loaders and loading spinners
- **Error Handling**: User-friendly error messages with retry options
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🚀 Deployment

### Backend Deployment
```bash
# Production build
npm start
```

### Frontend Deployment
```bash
# Build for production
npm run build

# Serve static files or deploy to hosting service
```

## 📱 Features Overview

### Product Browsing
- Browse products by categories (Fruits, Dairy, Meat, etc.)
- Filter by tags (Promotions, New Arrivals, Previously Bought)
- Search products with voice or text input
- View detailed product information

### Shopping Experience
- Add products to cart with quantity controls
- Save favorite products
- Responsive design for mobile and desktop
- Smooth animations and transitions

### Technical Features
- RESTful API architecture
- SQLite database with proper relationships
- Error handling and fallback mechanisms
- Optimized images and lazy loading

## 🔧 Development

### Project Structure
```
├── backend/           # Node.js API server
│   ├── server.js     # Main server file
│   ├── database.sql  # Database schema and data
│   └── package.json
├── src/              # React frontend
│   ├── components/   # Reusable components
│   ├── pages/        # Page components
│   ├── services/     # API services
│   └── store/        # State management
└── public/           # Static assets
```

### Available Scripts

#### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint

#### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run init-db` - Initialize database

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or issues, please create an issue in the repository.


