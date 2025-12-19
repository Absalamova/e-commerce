import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import ProductCard from "./../../components/ProductCard";
import { useLanguage } from '../../contexts/LanguageContext';
import apiService from '../../services/api';

const Categoryfilter = () => {
    const { id } = useParams();
    const { t, currentLanguage } = useLanguage();
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
const [minPrice, setMinPrice] = useState(0);
const [maxPrice, setMaxPrice] = useState(100);

    // Category mapping based on catalog dropdown indices
    const categoryMap = {
        1: "Dairy",
        2: "Bakery",
        3: "Fruit",
        4: "Dessert",
        5: "Dessert",
        6: "Lunch",
        7: "Breakfast",
        8: "Fruit",
        9: "Dessert",
        10: "Dinner",
        11: "Lunch",
        12: "Meat",
        13: "Fast food"
    };

    const categoryName = categoryMap[id] || "All";

    useEffect(() => {
        fetchProducts();
    }, [id]);

    useEffect(() => {
        filterProducts();
    }, [products, minPrice, maxPrice]);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            setError(null);

            // API service now handles fallback automatically
            let response;
            if (id && categoryMap[id]) {
                // Fetch products by category
                response = await apiService.fetchProducts({
                    category: categoryMap[id],
                    limit: 50
                });
            } else {
                // Fetch all products
                response = await apiService.fetchProducts({ limit: 50 });
            }

            setProducts(response.products || []);
        } catch (err) {
            console.error('Error fetching products:', err);
            setError('Failed to load products. Please try again.');
            // Fallback to local data
            try {
                const localData = apiService.getLocalProducts();
                const filtered = id && categoryMap[id]
                    ? localData.products.filter(p => p.category === categoryMap[id])
                    : localData.products;
                setProducts(filtered);
            } catch (localErr) {
                console.error('Error loading local products:', localErr);
                setProducts([]);
            }
        } finally {
            setLoading(false);
        }
    };

    const filterProducts = () => {
        const filtered = products.filter(product => {
            return product.price >= minPrice && product.price <= maxPrice;
        });
        setFilteredProducts(filtered);
    };



  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
            <span className="ml-3 text-orange-500 font-medium">{t('loading')}...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <div className="text-red-500 text-lg font-medium mb-4">{error}</div>
            <button
              onClick={fetchProducts}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
            >
              {t('retry')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {categoryName} Products
          </h1>
          <p className="text-lg text-gray-600">
            {filteredProducts.length} products found
          </p>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="w-80 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">⚙️</span>
                </div>
                Filters
              </h3>

              {/* Price Range */}
              <div className="space-y-6">
        <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Price Range: ${minPrice} - ${maxPrice}
                  </label>

                  {/* Min Price */}
                  <div className="mb-4">
                    <label className="block text-xs text-gray-600 mb-2">
                      Minimum Price: ${minPrice}
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={minPrice}
            onChange={(e) => setMinPrice(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

                  {/* Max Price */}
        <div>
                    <label className="block text-xs text-gray-600 mb-2">
                      Maximum Price: ${maxPrice}
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={maxPrice}
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>

                  {/* Price Scale */}
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <span>$0</span>
                    <span>$100</span>
                  </div>
                </div>

                {/* Active Filters */}
                <div className="border-t pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Active Filters:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                      Price: ${minPrice} - ${maxPrice}
                    </span>
                  </div>
        </div>
      </div>
    </div>
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <div className="text-gray-400 text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No products found</h3>
                <p className="text-gray-600">Try adjusting your filters</p>
        </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </div>
            )}
          </main>
    </div>
    </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #f97316;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
      `}</style>
    </div>
  )
}

export default Categoryfilter