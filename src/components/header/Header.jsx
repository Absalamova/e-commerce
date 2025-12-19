import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaBox, FaShoppingCart, FaSearch, FaBars, FaMicrophone, FaGlobe, FaUser, FaSignOutAlt, FaUserCircle } from "react-icons/fa";
import Logo from "./logo.svg";
import avatarImg from "./avatar.png";
import { favoriteStore } from "../../store/favoriteStore";
import { useCartStore } from "../../store/cartStore";
import { useLanguage } from "../../contexts/LanguageContext";
import { useAuth } from "../../contexts/AuthContext";
import apiService from "../../services/api";

export default function Header() {
  const navigate = useNavigate();
  const { favorites } = favoriteStore();
  const { cartItems } = useCartStore();
  const { t, currentLanguage, changeLanguage } = useLanguage();
  const { user, isAuthenticated, logout } = useAuth();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const recognitionRef = useRef(null);


  useEffect(() => {
    if (!("webkitSpeechRecognition" in window || "SpeechRecognition" in window)) return;

    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    const rec = new SR();
    rec.lang = "en-US";
    rec.interimResults = false;
    rec.maxAlternatives = 1;
    recognitionRef.current = rec;
  }, []);


  useEffect(() => {
    if (!recognitionRef.current) return;

    const handleResult = (e) => {
      const transcript = Array.from(e.results)
        .map((r) => r[0].transcript)
        .join("")
        .replace(/[.,!?]$/, "");
      setSearch(transcript.trim());
      setIsListening(false);
    };

    recognitionRef.current.addEventListener("result", handleResult);
    recognitionRef.current.addEventListener("end", () => setIsListening(false));

    return () => {
      recognitionRef.current.removeEventListener("result", handleResult);
    };
  }, []);

  const toggleListen = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
    }
    setIsListening(!isListening);
  };

  const goToFavorites = () => navigate("/favorites");

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
    setSearch("");
  };

  useEffect(() => {
    const performSearch = async () => {
      if (search.trim().length < 2) {
        setSearchResults([]);
        return;
      }

      setIsSearching(true);
      try {
        const response = await apiService.fetchProducts({
          search: search.trim(),
          limit: 5
        });
        setSearchResults(response.products);
      } catch (error) {
        console.error('Search error:', error);
        setSearchResults([]);
      } finally {
        setIsSearching(false);
      }
    };

    const debounceTimer = setTimeout(performSearch, 300);
    return () => clearTimeout(debounceTimer);
  }, [search]);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showProfileMenu && !event.target.closest('.profile-menu')) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showProfileMenu]);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 max-w-[1200px]">
        {/* Main Header Layout */}
        <div className="flex items-center justify-between gap-4">
          {/* Left Section - Logo and Catalog */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={Logo} alt="logo" className="h-8 w-auto" />
            </Link>
            <button
              onClick={() => setIsCatalogOpen(!isCatalogOpen)}
              className="hidden md:flex items-center bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition whitespace-nowrap"
            >
              <FaBars className="mr-2" />
              {t('catalog')}
            </button>
          </div>

          {/* Center Section - Search Bar */}
          <div className="flex-1 max-w-md mx-4">
            <div className="relative">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full border border-gray-300 py-2 pl-12 pr-16 rounded-full focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <button
                onClick={toggleListen}
                className={`absolute right-3 top-1/2 -translate-y-1/2 text-white p-2 rounded-full shadow-md transition-all duration-200 ${isListening ? "bg-red-500 animate-pulse" : "bg-green-500"
                  }`}
                title={isListening ? "Тингланмоқда..." : "Овозли қидирув"}
              >
                <FaMicrophone />
              </button>
            </div>

            {/* Search Results Dropdown */}
            {search && (
              <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-[300px] overflow-y-auto">
                {isSearching ? (
                  <div className="flex items-center justify-center py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-orange-500"></div>
                    <span className="ml-2 text-sm text-gray-500">{t('loading')}</span>
                  </div>
                ) : searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => goToProduct(product.id)}
                      className="flex gap-4 p-3 hover:bg-orange-50 cursor-pointer transition-all border-b border-gray-100 last:border-b-0"
                    >
                      <img width="50" src={product.primary_image || product.images[0]} alt="rasm" className="rounded-md object-cover flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm text-gray-800 truncate">{product.name}</h3>
                        <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-bold text-orange-600">${product.price.toFixed(2)}</span>
                          {product.discount_percentage > 0 && (
                            <span className="text-xs bg-red-100 text-red-600 px-1 rounded">
                              -{product.discount_percentage}%
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                ) : search.length >= 2 ? (
                  <div className="text-gray-500 px-4 py-3 text-center">{t('error')}</div>
                ) : null}
              </div>
            )}
          </div>

          {/* Right Section - User Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* Navigation Icons - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-4">
              <button
                onClick={goToFavorites}
                className="relative flex flex-col items-center text-sm text-gray-700 hover:text-red-500 transition p-2 rounded-lg hover:bg-gray-50"
              >
                <FaHeart className="text-xl" />
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                    {favorites.length}
                  </span>
                )}
                <span className="text-xs mt-1">{t('favorites')}</span>
              </button>

              <Link to="/delivery" className="flex flex-col items-center text-sm text-gray-700 hover:text-red-500 transition p-2 rounded-lg hover:bg-gray-50">
                <FaBox className="text-xl" />
                <span className="text-xs mt-1">{t('delivery')}</span>
              </Link>

              <Link to="/cart" className="relative flex flex-col items-center text-sm text-gray-700 hover:text-red-500 transition p-2 rounded-lg hover:bg-gray-50">
                <FaShoppingCart className="text-xl" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                    {cartItems.length}
                  </span>
                )}
                <span className="text-xs mt-1">{t('cart')}</span>
              </Link>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
              {[
                { code: 'uz', label: 'UZ' },
                { code: 'ru', label: 'RU' },
                { code: 'en', label: 'EN' }
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`px-2 py-1 text-xs font-medium rounded transition-all ${currentLanguage === lang.code
                      ? 'bg-white text-orange-600 shadow-sm'
                      : 'text-gray-600 hover:text-gray-800'
                    }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            {/* Auth Links / User Profile */}
            <div className="hidden md:flex items-center gap-3">
              {isAuthenticated ? (
                <div className="relative profile-menu">
                  <button
                    onClick={() => setShowProfileMenu(!showProfileMenu)}
                    className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                      <FaUser className="text-white text-xs" />
                    </div>
                    <span>{user?.name || 'User'}</span>
                  </button>

                  {/* Profile Dropdown */}
                  {showProfileMenu && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-2 border-b border-gray-200">
                        <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                      </div>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                        <FaUserCircle />
                        Profile
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                        <FaBox />
                        Orders
                      </button>
                      <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                        <FaHeart />
                        Favorites
                      </button>
                      <div className="border-t border-gray-200 mt-2">
                        <button
                          onClick={() => {
                            logout();
                            setShowProfileMenu(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
                        >
                          <FaSignOutAlt />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors px-3 py-2 rounded-lg hover:bg-gray-50">
                    {t('login')}
                  </Link>
                  <Link to="/register" className="text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors px-3 py-2 rounded-lg hover:bg-orange-50">
                    {t('register')}
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsCatalogOpen(!isCatalogOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <FaBars className="text-xl text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isCatalogOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setIsCatalogOpen(false)}
                className="flex items-center bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-2 rounded-lg shadow-md"
              >
                <FaBars className="mr-2" />
                {t('catalog')}
              </button>

              <div className="flex justify-around py-4">
                <button
                  onClick={goToFavorites}
                  className="relative flex flex-col items-center text-sm text-gray-700 hover:text-red-500 transition"
                >
                  <FaHeart className="text-xl" />
                  {favorites.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                      {favorites.length}
                    </span>
                  )}
                  <span className="text-xs mt-1">{t('favorites')}</span>
                </button>

                <Link to="/delivery" className="flex flex-col items-center text-sm text-gray-700 hover:text-red-500 transition">
                  <FaBox className="text-xl" />
                  <span className="text-xs mt-1">{t('delivery')}</span>
                </Link>

                <Link to="/cart" className="relative flex flex-col items-center text-sm text-gray-700 hover:text-red-500 transition">
                  <FaShoppingCart className="text-xl" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                      {cartItems.length}
                    </span>
                  )}
                  <span className="text-xs mt-1">{t('cart')}</span>
                </Link>
              </div>

              <div className="flex justify-center gap-3 pt-2 border-t border-gray-200">
                {isAuthenticated ? (
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <FaUser className="text-white text-xs" />
                      </div>
                      <span className="text-sm font-medium">{user?.name}</span>
                    </div>
                    <button
                      onClick={logout}
                      className="text-sm text-red-600 hover:text-red-700 transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <>
                    <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors px-4 py-2 rounded-lg hover:bg-gray-50">
                      {t('login')}
                    </Link>
                    <Link to="/register" className="text-sm font-medium text-orange-600 hover:text-orange-700 transition-colors px-4 py-2 rounded-lg hover:bg-orange-50">
                      {t('register')}
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>


      {isCatalogOpen && (
        <div className="absolute left-0 top-full w-full bg-white shadow-lg py-4 z-10 grid grid-cols-2 md:grid-cols-4 gap-4 px-10 border-t border-gray-200">
          {[
            { uz: "Sut, pishloq, tuxum", ru: "Молоко, сыр, яйца", en: "Milk, cheese, eggs" },
            { uz: "Non", ru: "Хлеб", en: "Bread" },
            { uz: "Meva va sabzavotlar", ru: "Фрукты и овощи", en: "Fruits and vegetables" },
            { uz: "Muzlatilgan mahsulotlar", ru: "Замороженные продукты", en: "Frozen products" },
            { uz: "Ichimliklar", ru: "Напитки", en: "Beverages" },
            { uz: "Shirniyyotlar", ru: "Кондитерские изделия", en: "Confectionery" },
            { uz: "Choy, qahva", ru: "Чай, кофе", en: "Tea, coffee" },
            { uz: "Bakaley", ru: "Бакалея", en: "Grocery" },
            { uz: "Sog'lom ovqat", ru: "Здоровое питание", en: "Healthy food" },
            { uz: "Hayvonlar uchun mahsulotlar", ru: "Зоотовары", en: "Pet supplies" },
            { uz: "Nooziq-ovqat mahsulotlari", ru: "Непродовольственные товары", en: "Non-food products" },
            { uz: "Bolalar ovqati", ru: "Детское питание", en: "Baby food" },
            { uz: "Go'shti, parranda, kolbasa", ru: "Мясо, птица, колбаса", en: "Meat, poultry, sausage" },
          ].map((category, index) => (
            <Link
              key={index}
              to="/category"
              onClick={() => setIsCatalogOpen(false)}
              className="font-medium text-gray-700 hover:text-orange-600 transition-colors p-2 rounded-lg hover:bg-orange-50"
            >
              {category[currentLanguage]}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

