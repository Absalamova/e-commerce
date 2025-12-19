// API service for e-commerce application
import { products as localProducts } from '../products-data';

const API_BASE_URL = import.meta.env.DEV ? 'http://localhost:5000/api' : '/api';

class ApiService {
    async fetchProducts(params = {}) {
        try {
            const queryString = new URLSearchParams(params).toString();
            const url = `${API_BASE_URL}/products${queryString ? `?${queryString}` : ''}`;

            // Try to fetch from API with a short timeout
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout

            const response = await fetch(url, {
                signal: controller.signal,
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.log('API failed, using local fallback:', error.message);
            // Always fallback to local data for reliability
            return this.getLocalProductsFiltered(params);
        }
    }

    async fetchProductById(id) {
        try {
            const response = await fetch(`${API_BASE_URL}/products/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching product:', error);
            // Fallback to local data
            const product = localProducts.find(p => p.id === parseInt(id));
            if (product) {
                return {
                    id: product.id,
                    name: product.name,
                    category: product.category,
                    description: product.description,
                    price: parseFloat(product.price.replace('$', '')),
                    original_price: parseFloat(product.disprice.replace('$', '')),
                    discount_percentage: parseInt(product.discount.replace('%', '')),
                    rating: product.rating,
                    tag: product.tag,
                    stock_quantity: 100,
                    images: product.images.map(img => {
                        let normalized = img;
                        if (normalized.startsWith('../')) normalized = normalized.replace('../', '/');
                        if (normalized.startsWith('images/') && !normalized.startsWith('/')) normalized = '/' + normalized;
                        return normalized;
                    }),
                    primary_image: product.images[0] ? (
                        (() => {
                            let img = product.images[0];
                            if (img.startsWith('../')) img = img.replace('../', '/');
                            if (img.startsWith('images/') && !img.startsWith('/')) img = '/' + img;
                            return img;
                        })()
                    ) : null,
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                };
            }
            throw error;
        }
    }

    async fetchCategories() {
        try {
            const response = await fetch(`${API_BASE_URL}/categories`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching categories:', error);
            // Fallback
            const categories = [...new Set(localProducts.map(p => p.category))];
            return categories.map(c => ({ category: c, count: localProducts.filter(p => p.category === c).length }));
        }
    }

    async fetchTags() {
        try {
            const response = await fetch(`${API_BASE_URL}/tags`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching tags:', error);
            // Fallback
            const tags = [...new Set(localProducts.map(p => p.tag).filter(Boolean))];
            return tags.map(t => ({ tag: t, count: localProducts.filter(p => p.tag === t).length }));
        }
    }

    // Get filtered products from local data based on API parameters
    getLocalProductsFiltered(params = {}) {
        try {
            let filteredProducts = localProducts.map(product => ({
                id: product.id,
                name: product.name,
                category: product.category,
                description: product.description,
                price: parseFloat(product.price.replace('$', '')),
                original_price: parseFloat(product.disprice.replace('$', '')),
                discount_percentage: parseInt(product.discount.replace('%', '')),
                rating: product.rating,
                tag: product.tag,
                images: product.images.map(img => {
                    // Convert relative paths to proper public folder paths
                    let normalized = img;
                    if (normalized.startsWith('../')) normalized = normalized.replace('../', '/');
                    if (normalized.startsWith('images/') && !normalized.startsWith('/')) normalized = '/' + normalized;
                    return normalized;
                }),
                primary_image: product.images[0] ? (
                    (() => {
                        let img = product.images[0];
                        if (img.startsWith('../')) img = img.replace('../', '/');
                        if (img.startsWith('images/') && !img.startsWith('/')) img = '/' + img;
                        return img;
                    })()
                ) : null,
                stock_quantity: 100,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            }));

            // Apply filters
            if (params.tag) {
                filteredProducts = filteredProducts.filter(p => p.tag === params.tag);
            }

            if (params.category) {
                filteredProducts = filteredProducts.filter(p => p.category === params.category);
            }

            if (params.search) {
                const searchTerm = params.search.toLowerCase();
                filteredProducts = filteredProducts.filter(p =>
                    p.name.toLowerCase().includes(searchTerm) ||
                    p.description.toLowerCase().includes(searchTerm)
                );
            }

            // Apply pagination
            const limit = params.limit ? parseInt(params.limit) : filteredProducts.length;
            const page = params.page ? parseInt(params.page) : 1;
            const offset = (page - 1) * limit;
            const paginatedProducts = filteredProducts.slice(offset, offset + limit);

            return {
                products: paginatedProducts,
                pagination: {
                    page,
                    limit,
                    total: filteredProducts.length
                }
            };
        } catch (error) {
            console.error('Error loading filtered local products:', error);
            return { products: [], pagination: { page: 1, limit: 0, total: 0 } };
        }
    }

    // Fallback method to get products from local data if API fails
    getLocalProducts() {
        try {
            return {
                products: localProducts.map(product => ({
                    id: product.id,
                    name: product.name,
                    category: product.category,
                    description: product.description,
                    price: parseFloat(product.price.replace('$', '')),
                    original_price: parseFloat(product.disprice.replace('$', '')),
                    discount_percentage: parseInt(product.discount.replace('%', '')),
                    rating: product.rating,
                    tag: product.tag,
                    images: product.images.map(img => {
                        // Convert relative paths to proper public folder paths
                        let normalized = img;
                        if (normalized.startsWith('../')) normalized = normalized.replace('../', '/');
                        if (normalized.startsWith('images/') && !normalized.startsWith('/')) normalized = '/' + normalized;
                        return normalized;
                    }),
                    primary_image: product.images[0] ? (
                        (() => {
                            let img = product.images[0];
                            if (img.startsWith('../')) img = img.replace('../', '/');
                            if (img.startsWith('images/') && !img.startsWith('/')) img = '/' + img;
                            return img;
                        })()
                    ) : null,
                    stock_quantity: 100, // Default stock
                    created_at: new Date().toISOString(),
                    updated_at: new Date().toISOString()
                })),
                pagination: {
                    page: 1,
                    limit: localProducts.length,
                    total: localProducts.length
                }
            };
        } catch (error) {
            console.error('Error loading local products:', error);
            return { products: [], pagination: { page: 1, limit: 0, total: 0 } };
        }
    }
}

export default new ApiService();


