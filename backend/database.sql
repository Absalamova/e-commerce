

CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    original_price DECIMAL(10,2),
    discount_percentage INTEGER DEFAULT 0,
    rating DECIMAL(3,2) DEFAULT 0.0,
    tag TEXT,
    stock_quantity INTEGER DEFAULT 100,
    is_active BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS product_images (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    image_url TEXT NOT NULL,
    is_primary BOOLEAN DEFAULT 0,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);


INSERT INTO products (name, category, description, price, original_price, discount_percentage, rating, tag, stock_quantity) VALUES
('Butter', 'Dairy', 'High-quality butter made from fresh cream, perfect for cooking and baking.', 79.00, 79.00, 0, 5.0, 'Previously Bought', 50),
('Tea', 'Beverages', 'Premium black tea leaves, rich in flavor and antioxidants.', 55.00, 55.00, 20, 5.0, 'Promotions', 75),
('Colbasa', 'Meat', 'Traditional sausage made with premium cuts of meat and natural spices.', 50.50, 50.50, 0, 5.0, 'New Arrivals', 30),
('Pomegranate', 'Fruits', 'Fresh and juicy pomegranate, packed with vitamins and antioxidants.', 65.50, 65.50, 31, 4.5, 'Promotions', 40),
('Berry Mix', 'Fruits', 'Assorted fresh berries including strawberries, blueberries, and raspberries.', 55.00, 55.00, 27, 5.0, 'Previously Bought', 60),
('Strawberry Yogurt', 'Dairy', 'Creamy yogurt made with real strawberries and live cultures.', 55.00, 55.00, 50, 3.5, 'Promotions', 45),
('Cake', 'Bakery', 'Delicious layered cake with fresh cream and seasonal fruits.', 55.00, 55.00, 27, 3.5, 'Previously Bought', 20),
('Pepsi Cola', 'Beverages', 'Refreshing carbonated soft drink, perfect for any occasion.', 55.00, 55.00, 27, 4.5, 'Promotions', 100),
('Peach', 'Fruits', 'Sweet and juicy peaches, perfect for desserts or eating fresh.', 55.00, 55.00, 27, 5.0, 'New Arrivals', 35),
('Cheese', 'Dairy', 'Aged cheddar cheese with rich, sharp flavor.', 55.00, 55.00, 0, 4.5, 'Previously Bought', 25),
('Coffee', 'Beverages', 'Premium ground coffee beans, perfect for your morning brew.', 55.00, 55.00, 50, 3.5, 'Promotions', 80),
('Grape', 'Fruits', 'Sweet seedless grapes, perfect for snacking or fruit salads.', 55.00, 55.00, 27, 4.0, 'New Arrivals', 55),
('Hamburger', 'Fast Food', 'Juicy beef patty with fresh vegetables and special sauce.', 55.00, 55.00, 0, 5.0, 'Previously Bought', 15),
('Hot Dog', 'Fast Food', 'Classic hot dog with mustard and ketchup in a soft bun.', 55.00, 55.00, 50, 4.5, 'Promotions', 25),
('Ice Cream', 'Desserts', 'Creamy vanilla ice cream made with real vanilla beans.', 55.00, 55.00, 0, 4.5, 'New Arrivals', 40),
('Lemon', 'Fruits', 'Fresh lemons, perfect for cooking, baking, or making lemonade.', 55.00, 55.00, 0, 3.5, 'Previously Bought', 70),
('Apple Juice', 'Beverages', '100% pure apple juice made from fresh apples.', 55.00, 55.00, 50, 4.5, 'Promotions', 60),
('Bread', 'Bakery', 'Fresh baked bread made with whole grains and natural ingredients.', 55.00, 55.00, 0, 4.0, 'New Arrivals', 30),
('Coca Cola', 'Beverages', 'Classic carbonated soft drink with the original taste.', 55.00, 55.00, 0, 4.5, 'Previously Bought', 90),
('Kebab', 'Fast Food', 'Grilled meat skewers with vegetables and special marinade.', 55.00, 55.00, 0, 5.0, 'New Arrivals', 20),
('Cocktail', 'Beverages', 'Refreshing fruit cocktail with tropical flavors.', 55.00, 55.00, 0, 5.0, 'Previously Bought', 35),
('Banana', 'Fruits', 'Fresh bananas, rich in potassium and perfect for smoothies.', 55.00, 55.00, 20, 5.0, 'Promotions', 65),
('Fruit Juice', 'Beverages', 'Mixed fruit juice blend with natural vitamins.', 55.00, 55.00, 27, 3.5, 'New Arrivals', 50),
('Pizza', 'Fast Food', 'Wood-fired pizza with fresh mozzarella and tomato sauce.', 55.00, 55.00, 0, 4.5, 'Previously Bought', 12),
('Orange', 'Fruits', 'Juicy oranges packed with vitamin C.', 55.00, 55.00, 27, 3.5, 'New Arrivals', 45),
('Apricot', 'Fruits', 'Sweet apricots perfect for desserts or eating fresh.', 55.00, 55.00, 0, 4.0, 'Previously Bought', 30),
('Fish', 'Seafood', 'Fresh salmon fillet, rich in omega-3 fatty acids.', 55.00, 55.00, 27, 4.5, 'Promotions', 18),
('Pineapple', 'Fruits', 'Sweet tropical pineapple, perfect for fruit salads.', 55.00, 55.00, 27, 4.0, 'New Arrivals', 25),
('Noodles', 'Fast Food', 'Authentic Asian noodles with vegetables and soy sauce.', 55.00, 55.00, 50, 3.0, 'Promotions', 40),
('Cappuccino', 'Beverages', 'Rich espresso with steamed milk and foam.', 55.00, 55.00, 0, 4.0, 'Previously Bought', 30),
('Milk', 'Dairy', 'Fresh whole milk from local farms.', 55.00, 55.00, 50, 5.0, 'Promotions', 55),
('Chocolate', 'Desserts', 'Premium dark chocolate with 70% cocoa.', 55.00, 55.00, 27, 4.5, 'New Arrivals', 35),
('Pumpkin', 'Vegetables', 'Fresh pumpkin perfect for soups and pies.', 55.00, 55.00, 27, 4.5, 'Previously Bought', 20),
('Kiwi', 'Fruits', 'Sweet and tangy kiwi fruit, rich in vitamin C.', 55.00, 55.00, 27, 4.0, 'Promotions', 28),
('Watermelon', 'Fruits', 'Large, juicy watermelon perfect for summer.', 55.00, 55.00, 0, 1.0, 'Previously Bought', 8);
