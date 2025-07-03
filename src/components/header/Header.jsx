import React, { useMemo, useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaBox, FaShoppingCart, FaSearch, FaBars, FaMicrophone,} from "react-icons/fa";
import Logo from "./logo.svg";
import avatarImg from "./avatar.png";
import { favoriteStore } from "../../store/favoriteStore";
import { useCartStore } from "../../store/cartStore";
import { products } from "../../products-data";

export default function Header() {
  const navigate = useNavigate();
  const { favorites } = favoriteStore();
  const { cartItems } = useCartStore();

  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [isListening, setIsListening] = useState(false);
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

  const filteredProducts = useMemo(() => {
    return products.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="container mx-auto py-2 px-4 w-full relative max-w-[1200px] ">
      <div className="  flex items-center justify-between  gap-3 flex-wrap">
        
        <div className="flex items-center gap-2">
          <Link to="/">
            <div className="flex items-center">
              <img src={Logo} alt="logo" />
              <div className="mx-4 font-semibold text-sm ">СЕВЕРЯНОЧКА</div>
            </div>
          </Link>
          <button
            onClick={() => setIsCatalogOpen(!isCatalogOpen)}
            className="flex items-center bg-gradient-to-r from-green-600 to-green-400 text-white px-4 py-2 rounded-lg shadow-md hover:scale-105 transition"
          >
            <FaBars className="mr-2" />
            Каталог
          </button>
        </div>

        
        <div className="relative max-w-[500px] w-full mx-2">
          <div className="relative w-full">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Найти товар..."
              className="w-full border border-gray-300 py-2 pl-12 pr-16 rounded-full   "
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
            <button
              onClick={toggleListen}
              className={`absolute right-3 top-1/2 -translate-y-1/2 text-white p-2 rounded-full shadow-md transition-all duration-200 ${
                isListening ? "bg-red-500 animate-pulse" : "bg-green-500"
              }`}
              title={isListening ? "Тингланмоқда..." : "Овозли қидирув"}
            >
              <FaMicrophone />
            </button>
          </div>


          {search && (
            <div className="absolute z-10 w-full flex flex-col top-[50px] bg-white p-1.5 max-h-[300px] overflow-y-auto shadow-lg rounded-md">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => goToProduct(product.id)}
                    className="flex gap-4 p-2 hover:bg-gray-100 cursor-pointer transition-all"
                  >
                    <img width="60" src={product.images[0]} alt="rasm" className="rounded-md" />
                    <div>
                      <h3 className="font-semibold text-sm">{product.name}</h3>
                      <p className="text-xs text-gray-600 line-clamp-2">{product.description}</p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-500 px-4 py-2">Товар не найден</div>
              )}
            </div>
          )}
        </div>

        
        <div className="flex items-center gap-4">
          <div
            onClick={goToFavorites}
            className="relative flex flex-col items-center text-sm text-gray-700 cursor-pointer hover:text-red-500 transition"
          >
            <FaHeart className="text-xl " />
            {favorites.length > 0 && (
              <span className="absolute top-0 right-4 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white text-[10px] font-bold px-1.5 py-[2px] rounded-full">
                {favorites.length}
              </span>
            )}
            <div className="text-sm text-center">Избранное</div>
          </div>

          <Link to="/delivery">
            <div className="flex flex-col items-center text-sm text-gray-700 hover:text-red-500 transition">
              <FaBox className="text-xl" />
              <div className="text-sm text-center">Заказы</div>
            </div>
          </Link>

          <Link to="/cart">
            <div className="relative cursor-pointer hover:text-red-500 transition">
              <FaShoppingCart className="text-2xl text-gray-700" />
              {cartItems.length > 0 && 
              (
                <span className="absolute -top-2 right-4.5 bg-red-500 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </span>
              )}
              <div className="text-sm text-center">Корзина</div>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <img src={avatarImg} alt="Алексей" className="w-8 h-8 rounded-full" />
            <span>Алексей</span>
          </div>
        </div>
      </div>

     
      {isCatalogOpen && (
        <div className="absolute left-0 top-full w-full bg-white shadow-lg py-4 z-10 grid grid-cols-2 md:grid-cols-4 gap-4 px-10">
          {[
            "Молоко, сыр, яйца",
            "Хлеб",
            "Фрукты и овощи",
            "Замороженные продукты",
            "Напитки",
            "Кондитерские изделия",
            "Чай, кофе",
            "Бакалея",
            "Здоровое питание",
            "Зоотовары",
            "Непродовольственные товары",
            "Детское питание",
            "Мясо, птица, колбаса",
          ].map((title, index) => (
            <Link
              key={index}
              to="/category"
              onClick={() => setIsCatalogOpen(false)}
              className="font-semibold hover:text-orange-400"
            >
              {title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

