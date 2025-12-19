import { useState, useEffect } from 'react';
import ProductSection from './../../components/ProductSection';
import HomeBanner from '../../components/HomeBanner';
import SpecialOffers from '../../components/SpecialOffers';
import StoresMap from '../../components/StoresMap';
import Articles from '../../components/Articles';
import { useLanguage } from '../../contexts/LanguageContext';
import apiService from '../../services/api';

function HomePage() {
  const { t } = useLanguage();
  const [promotions, setPromotions] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHomeProducts();
  }, []);

  const fetchHomeProducts = async () => {
    try {
      setLoading(true);

      // Fetch "Promotions" and "All Products"
      const [promoResponse, allResponse] = await Promise.all([
        apiService.fetchProducts({ tag: 'Promotions', limit: 8 }),
        apiService.fetchProducts({ limit: 20 }) // Fetch more for "All Products"
      ]);

      setPromotions(promoResponse.products || []);
      setAllProducts(allResponse.products || []);

    } catch (error) {
      console.error('Error in fetchHomeProducts:', error);
      // Last resort fallback
      try {
        const localData = apiService.getLocalProducts();
        const allProductsData = localData.products;

        if (allProductsData.length > 0) {
          const shuffled = [...allProductsData].sort(() => 0.5 - Math.random());
          setPromotions(shuffled.slice(0, 8));
          setAllProducts(shuffled.slice(0, 20));
        }
      } catch (finalError) {
        console.error('Final fallback failed:', finalError);
      }
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        <HomeBanner />
        <div className="bg-[#fffbee] py-6">
          <div className="max-w-5/2 mx-auto px-4 sm:px-6 md:px-8">
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
              <span className="ml-3 text-orange-500 font-medium">Loading products...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HomeBanner />

      {/* Products Sections */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* Promotions Section */}
          {promotions.length > 0 && (
            <ProductSection title={t('promotions')} data={promotions} tag="Promotions" />
          )}

          {/* All Products Section */}
          {allProducts.length > 0 && (
            <ProductSection title={t('allProducts')} data={allProducts} />
          )}

          <SpecialOffers />
          <StoresMap />
          <Articles />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
