const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the parent directory (where the frontend public folder is)
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'images')));

// Database setup
const dbPath = path.join(__dirname, 'ecommerce.db');

// Initialize database
let db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');
        initializeDatabase();
    }
});

// Initialize database with schema and data
function initializeDatabase() {
    const schemaPath = path.join(__dirname, 'database.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');

    db.exec(schema, (err) => {
        if (err) {
            console.error('Error initializing database:', err.message);
        } else {
            console.log('Database initialized successfully.');
            initializeProductImages();
        }
    });
}

// Initialize product images
function initializeProductImages() {
    const imageData = [
        [1, '/images/products/1.png', 1], [1, '/images/products/2.png', 0], [1, '/images/products/3.png', 0], [1, '/images/products/4.png', 0],
        [2, '/images/products/2.png', 1], [2, '/images/products/3.png', 0], [2, '/images/products/4.png', 0], [2, '/images/products/5.png', 0],
        [3, '/images/products/3.png', 1], [3, '/images/products/4.png', 0], [3, '/images/products/5.png', 0], [3, '/images/products/6.png', 0],
        [4, '/images/products/4.png', 1], [4, '/images/products/5.png', 0], [4, '/images/products/6.png', 0], [4, '/images/products/7.png', 0],
        [5, '/images/products/5.png', 1], [5, '/images/products/6.png', 0], [5, '/images/products/7.png', 0], [5, '/images/products/8.png', 0],
        [6, '/images/products/6.png', 1], [6, '/images/products/7.png', 0], [6, '/images/products/8.png', 0], [6, '/images/products/9.png', 0],
        [7, '/images/products/7.png', 1], [7, '/images/products/8.png', 0], [7, '/images/products/9.png', 0], [7, '/images/products/10.png', 0],
        [8, '/images/products/8.png', 1], [8, '/images/products/9.png', 0], [8, '/images/products/10.png', 0], [8, '/images/products/11.png', 0],
        [9, '/images/products/9.png', 1], [9, '/images/products/10.png', 0], [9, '/images/products/11.png', 0], [9, '/images/products/12.png', 0],
        [10, '/images/products/10.png', 1], [10, '/images/products/11.png', 0], [10, '/images/products/12.png', 0], [10, '/images/products/13.png', 0],
        [11, '/images/products/11.png', 1], [11, '/images/products/12.png', 0], [11, '/images/products/13.png', 0], [11, '/images/products/14.png', 0],
        [12, '/images/products/12.png', 1], [12, '/images/products/13.png', 0], [12, '/images/products/14.png', 0], [12, '/images/products/15.png', 0],
        [13, '/images/products/13.png', 1], [13, '/images/products/14.png', 0], [13, '/images/products/15.png', 0], [13, '/images/products/16.png', 0],
        [14, '/images/products/14.png', 1], [14, '/images/products/15.png', 0], [14, '/images/products/16.png', 0], [14, '/images/products/17.png', 0],
        [15, '/images/products/15.png', 1], [15, '/images/products/16.png', 0], [15, '/images/products/17.png', 0], [15, '/images/products/18.png', 0],
        [16, '/images/products/16.png', 1], [16, '/images/products/17.png', 0], [16, '/images/products/18.png', 0], [16, '/images/products/19.png', 0],
        [17, '/images/products/17.png', 1], [17, '/images/products/18.png', 0], [17, '/images/products/19.png', 0], [17, '/images/products/20.png', 0],
        [18, '/images/products/18.png', 1], [18, '/images/products/19.png', 0], [18, '/images/products/20.png', 0], [18, '/images/products/21.png', 0],
        [19, '/images/products/19.png', 1], [19, '/images/products/20.png', 0], [19, '/images/products/21.png', 0], [19, '/images/products/22.png', 0],
        [20, '/images/products/20.png', 1], [20, '/images/products/21.png', 0], [20, '/images/products/22.png', 0], [20, '/images/products/23.png', 0],
        [21, '/images/products/21.png', 1], [21, '/images/products/22.png', 0], [21, '/images/products/23.png', 0], [21, '/images/products/24.png', 0],
        [22, '/images/products/22.png', 1], [22, '/images/products/23.png', 0], [22, '/images/products/24.png', 0], [22, '/images/products/25.png', 0],
        [23, '/images/products/23.png', 1], [23, '/images/products/24.png', 0], [23, '/images/products/25.png', 0], [23, '/images/products/26.png', 0],
        [24, '/images/products/24.png', 1], [24, '/images/products/25.png', 0], [24, '/images/products/26.png', 0], [24, '/images/products/27.png', 0],
        [25, '/images/products/25.png', 1], [25, '/images/products/26.png', 0], [25, '/images/products/27.png', 0], [25, '/images/products/28.png', 0],
        [26, '/images/products/26.png', 1], [26, '/images/products/27.png', 0], [26, '/images/products/28.png', 0], [26, '/images/products/29.png', 0],
        [27, '/images/products/27.png', 1], [27, '/images/products/28.png', 0], [27, '/images/products/29.png', 0], [27, '/images/products/30.png', 0],
        [28, '/images/products/28.png', 1], [28, '/images/products/29.png', 0], [28, '/images/products/30.png', 0], [28, '/images/products/31.png', 0],
        [29, '/images/products/29.png', 1], [29, '/images/products/30.png', 0], [29, '/images/products/31.png', 0], [29, '/images/products/32.png', 0],
        [30, '/images/products/30.png', 1], [30, '/images/products/31.png', 0], [30, '/images/products/32.png', 0], [30, '/images/products/33.png', 0],
        [31, '/images/products/31.png', 1], [31, '/images/products/32.png', 0], [31, '/images/products/33.png', 0], [31, '/images/products/34.png', 0],
        [32, '/images/products/32.png', 1], [32, '/images/products/33.png', 0], [32, '/images/products/34.png', 0], [32, '/images/products/35.png', 0],
        [33, '/images/products/33.png', 1], [33, '/images/products/34.png', 0], [33, '/images/products/35.png', 0], [33, '/images/products/36.png', 0],
        [34, '/images/products/34.png', 1], [34, '/images/products/35.png', 0], [34, '/images/products/36.png', 0], [34, '/images/products/1.png', 0],
        [35, '/images/products/35.png', 1], [35, '/images/products/36.png', 0], [35, '/images/products/1.png', 0], [35, '/images/products/2.png', 0],
        [36, '/images/products/36.png', 1], [36, '/images/products/1.png', 0], [36, '/images/products/2.png', 0], [36, '/images/products/3.png', 0]
    ];

    const stmt = db.prepare('INSERT OR IGNORE INTO product_images (product_id, image_url, is_primary) VALUES (?, ?, ?)');

    imageData.forEach(image => {
        stmt.run(image);
    });

    stmt.finalize();
    console.log('Product images initialized.');
}

// API Routes

// Get all products with images
app.get('/api/products', (req, res) => {
    const { category, tag, page = 1, limit = 12, search } = req.query;
    let query = `
        SELECT p.*,
               GROUP_CONCAT(pi.image_url) as images,
               pi_primary.image_url as primary_image
        FROM products p
        LEFT JOIN product_images pi ON p.id = pi.product_id
        LEFT JOIN product_images pi_primary ON p.id = pi_primary.product_id AND pi_primary.is_primary = 1
        WHERE p.is_active = 1
    `;

    const params = [];
    const conditions = [];

    if (category) {
        conditions.push('p.category = ?');
        params.push(category);
    }

    if (tag) {
        conditions.push('p.tag = ?');
        params.push(tag);
    }

    if (search) {
        conditions.push('p.name LIKE ? OR p.description LIKE ?');
        params.push(`%${search}%`, `%${search}%`);
    }

    if (conditions.length > 0) {
        query += ' AND ' + conditions.join(' AND ');
    }

    query += ' GROUP BY p.id ORDER BY p.created_at DESC';

    // Add pagination
    const offset = (page - 1) * limit;
    query += ' LIMIT ? OFFSET ?';
    params.push(parseInt(limit), offset);

    db.all(query, params, (err, rows) => {
        if (err) {
            console.error('Error fetching products:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        // Process the results to format images array with relative paths
        const products = rows.map(row => ({
            id: row.id,
            name: row.name,
            category: row.category,
            description: row.description,
            price: row.price,
            original_price: row.original_price,
            discount_percentage: row.discount_percentage,
            rating: row.rating,
            tag: row.tag,
            stock_quantity: row.stock_quantity,
            images: row.images ? row.images.split(',') : [], // Return relative paths
            primary_image: row.primary_image, // Return relative path
            created_at: row.created_at,
            updated_at: row.updated_at
        }));

        res.json({
            products,
            pagination: {
                page: parseInt(page),
                limit: parseInt(limit),
                total: products.length
            }
        });
    });
});

// Get single product by ID
app.get('/api/products/:id', (req, res) => {
    const { id } = req.params;

    const query = `
        SELECT p.*,
               GROUP_CONCAT(pi.image_url) as images
        FROM products p
        LEFT JOIN product_images pi ON p.id = pi.product_id
        WHERE p.id = ? AND p.is_active = 1
        GROUP BY p.id
    `;

    db.get(query, [id], (err, row) => {
        if (err) {
            console.error('Error fetching product:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }

        if (!row) {
            return res.status(404).json({ error: 'Product not found' });
        }

        const product = {
            id: row.id,
            name: row.name,
            category: row.category,
            description: row.description,
            price: row.price,
            original_price: row.original_price,
            discount_percentage: row.discount_percentage,
            rating: row.rating,
            tag: row.tag,
            stock_quantity: row.stock_quantity,
            images: row.images ? row.images.split(',') : [], // Return relative paths
            created_at: row.created_at,
            updated_at: row.updated_at
        };

        res.json(product);
    });
});

// Get categories
app.get('/api/categories', (req, res) => {
    db.all('SELECT DISTINCT category, COUNT(*) as count FROM products WHERE is_active = 1 GROUP BY category ORDER BY category', [], (err, rows) => {
        if (err) {
            console.error('Error fetching categories:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(rows);
    });
});

// Get tags
app.get('/api/tags', (req, res) => {
    db.all('SELECT DISTINCT tag, COUNT(*) as count FROM products WHERE is_active = 1 AND tag IS NOT NULL GROUP BY tag ORDER BY tag', [], (err, rows) => {
        if (err) {
            console.error('Error fetching tags:', err);
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.json(rows);
    });
});

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('Closing database connection...');
    db.close((err) => {
        if (err) {
            console.error('Error closing database:', err.message);
        } else {
            console.log('Database connection closed.');
        }
        process.exit(0);
    });
});
