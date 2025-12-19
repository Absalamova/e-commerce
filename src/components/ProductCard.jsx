import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { favoriteStore } from "./../store/favoriteStore";
import { useCartStore } from './../store/cartStore';
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
export default function ProductCard({ product }) {
  const { addFavorites, isFavorite, removeFavorites } = favoriteStore();
  const { addToCart, increment, decrement, isInCart, getQuantity } = useCartStore();
  const { t } = useLanguage();
  const inCart = isInCart(product.id);
  const quantity = getQuantity(product.id);
  const toggleFavorite = () => {
    isFavorite(product.id)
      ? removeFavorites(product.id)
      : addFavorites(product);
  };
  const navigate = useNavigate()
  const handleSubmit = (id) => {
    navigate(`/product/${id}`)
  }

  return (
    <div className="group bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative max-w-xs w-full m-auto border border-gray-100 hover:border-orange-200 transform hover:-translate-y-1">

      {/* Favorite Button */}
      <button
        onClick={toggleFavorite}
        className={`absolute top-3 right-3 z-10 transition-all duration-300 bg-white rounded-full p-2 shadow-lg hover:shadow-xl ${isFavorite(product.id) ? "opacity-100 scale-110" : "opacity-0 group-hover:opacity-100 hover:scale-110"
          }`}
      >
        {isFavorite(product.id) ? (
          <FaHeart size={16} className="text-red-500 animate-pulse" />
        ) : (
          <FiHeart size={16} className="text-gray-400 hover:text-red-400 transition-colors" />
        )}
      </button>

      {/* Discount Badge */}
      {product.discount_percentage > 0 && (
        <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10 animate-bounce">
          -{product.discount_percentage}%
        </div>
      )}

      {/* Product Image */}
      <div className="relative overflow-hidden rounded-xl mb-4 bg-gray-50 h-48 flex items-center justify-center">
        <div
          onClick={() => handleSubmit(product.id)}
          className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110 cursor-pointer"
          style={{
            backgroundImage: `url('/images/products/${product.id}.png'), url('${product.primary_image}'), url('/images/placeholder.png')`
          }}
          role="img"
          aria-label={product.name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>

      {/* Price Section */}
      <div className="flex justify-between items-center text-sm mb-2">
        <div className="flex flex-col">
          <span className="text-black font-bold text-xl">${product.price.toFixed(2)}</span>
          {product.original_price && product.original_price > product.price && (
            <span className="text-gray-400 line-through text-sm">${product.original_price.toFixed(2)}</span>
          )}
        </div>
        <div className="text-xs text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
          {t('withCard')}
        </div>
      </div>

      {/* Product Name */}
      <h3 className="text-base font-semibold text-gray-800 mb-2 line-clamp-1 group-hover:text-orange-600 transition-colors">
        {product.name}
      </h3>

      {/* Description */}
      <p className="text-xs text-gray-600 mb-3 line-clamp-2 leading-relaxed">
        {product.description}
      </p>

      {/* Rating */}
      <div className="flex items-center mb-3">
        <div className="flex mr-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm transition-colors ${i < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"
                }`}
            />
          ))}
        </div>
        <span className="text-xs text-gray-500">({product.rating})</span>
      </div>

      {/* Add to Cart Button */}
      {!inCart ? (
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-sm py-3 rounded-xl hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.1 5H19M7 13l-1.1 5M7 13h10m0 0v8a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
            </svg>
            {t('addToCart')}
          </span>
        </button>
      ) : (
        <div className="flex justify-around rounded-2xl w-full overflow-hidden shadow-lg">
          <button
            onClick={() => decrement(product.id)}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xl w-1/3 py-3 hover:from-green-600 hover:to-green-700 transition-all duration-300 font-bold"
          >
            −
          </button>
          <span className="bg-gray-100 text-black py-3 px-4 text-lg font-bold flex-1 text-center border-x border-gray-200">
            {quantity}
          </span>
          <button
            onClick={() => increment(product.id)}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white text-xl w-1/3 py-3 hover:from-green-600 hover:to-green-700 transition-all duration-300 font-bold"
          >
            +
          </button>
        </div>
      )}

    </div>
  );
}
