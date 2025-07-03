import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi"; 
import { favoriteStore } from "./../store/favoriteStore";
import { useCartStore } from './../store/cartStore';
import { useNavigate } from "react-router-dom";
export default function ProductCard({ product }) {
  const { addFavorites, isFavorite, removeFavorites } = favoriteStore();
  const { addToCart, increment, decrement, isInCart, getQuantity } = useCartStore();
  const inCart = isInCart(product.id);
  const quantity = getQuantity(product.id);
  const toggleFavorite = () => {
    isFavorite(product.id)
      ? removeFavorites(product.id)
      : addFavorites(product);
  };
  const navigate = useNavigate()
  const handleSubmit = (id)=> {
    navigate(`/product/${id}`)
  }

  return (
    <div className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all relative max-w-xs w-full m-auto">

      
      <button
        onClick={toggleFavorite}
        className={`absolute top-3 right-3 transition-opacity bg-white rounded-full p-1 shadow ${isFavorite(product.id) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`}
      >
        {isFavorite(product.id) ? (
          <FaHeart size={18} className="text-red-500" />
        ) : (
          <FiHeart size={18} className="text-gray-400" />
        )}
      </button>


   
      {product.discount !== "0%" && (
        <div className="absolute top-3 left-3 bg-[#FF6633] text-white text-xs font-bold px-2 py-1 rounded">
          -{product.discount}
        </div>
      )}


      <img
        onClick={()=>handleSubmit(product.id)}
        src={product.images[0]}
        alt={product.name}
        className="w-full h-40 object-cover rounded-lg mt-3 mb-4 transition-transform duration-300 group-hover:scale-94"
      />

   
      <div className="flex justify-between items-center text-sm mb-1 group-hover:scale-105">
        <span className="text-black font-bold text-lg">{product.disprice}</span>
        <span className="text-gray-400 line-through">{product.price}</span>
      </div>


      <div className="text-xs text-gray-500 mb-1 group-hover:scale-105">С картой</div>


      <div className="text-sm text-[#FF9900] font-semibold group-hover:scale-105">{product.name}</div>

       
      <div className="text-xs text-gray-600 mt-1 line-clamp-2 group-hover:scale-105">
        {product.description}
      </div>

      <div className="flex mt-2 group-hover:scale-105">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar
            key={i}
            className={`text-sm ${i < Math.round(product.rating) ? "text-orange-400" : "text-gray-300"
              }`}
          />
        ))}
      </div>


      {!inCart ? (
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-[#FF7F3F] text-white font-bold text-sm py-2 mt-3 rounded-xl hover:bg-[#ff6826] transition"
        >
          В корзину
        </button>
      ) : (
          <div className="flex justify-around rounded-3xl w-full mt-3">
            <button
              onClick={() => decrement(product.id)}
              className="bg-lime-500 text-black text-xl w-1/2  py-2 px-4  hover:bg-lime-600  rounded-l-2xl"
            >
              −
            </button>
            <span className="bg-gray-200 text-black   py-2 px-4  text-lg font-medium">
              {quantity}
            </span>
            <button
              onClick={() => increment(product.id)}
              className="bg-lime-500 text-black text-xl  w-1/2  py-2 px-4 rounded-r-2xl hover:bg-lime-600"
            >
              +
            </button>
          </div>

      )}

    </div>
  );
}
