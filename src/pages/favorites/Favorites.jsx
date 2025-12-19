import React from "react";
import { favoriteStore } from "./../../store/favoriteStore";
import ProductCard from "../../components/ProductCard";
import { useLanguage } from "../../contexts/LanguageContext";

export default function Favorites() {
  const { favorites } = favoriteStore();
  const { t } = useLanguage();

  return (
    <div className="bg-[#f8f9fa] min-h-screen py-10 px-4">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">{t('favorites')}</h1>

        {favorites.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm">
            <div className="text-6xl mb-4">💔</div>
            <div className="text-gray-500 text-lg sm:text-xl font-medium">
              You haven't added any favorites yet.
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favorites.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
