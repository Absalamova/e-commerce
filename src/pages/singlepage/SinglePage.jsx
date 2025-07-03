import React, { useEffect, useState } from 'react'
import { products } from '../../products-data'
import { Link, useParams } from 'react-router-dom'
import { useCartStore } from '../../store/cartStore';
import { favoriteStore } from '../../store/favoriteStore';

function SinglePage() {
const {isInCart,getQuantity,decrement,increment,addToCart} = useCartStore();
const { addFavorites, isFavorite, removeFavorites } = favoriteStore();
const [singleCard,setSingleCard]= useState(null);
const inCart = singleCard ? isInCart(singleCard.id) : false
const quantity = singleCard ? getQuantity(singleCard.id) : 0
const {id} = useParams()

useEffect(()=> {
const updatecard = products.find(p => p.id.toString()=== id );
setSingleCard(updatecard)
},[id])

if (!singleCard) {
  return <div className="text-center py-10 text-gray-500">Loading...</div>
}

return (
<div className=" bg-[#F9F4E2] py-8 ">
  <div className='container  mx-auto  flex gap-4 '>
    <div className="flex gap-4 w-[50%] h-[400px] ">
      <div className="w-[150px] h-full flex flex-col gap-3 ">
        <img className=' rounded-[4px] w-[150px] h-[70px] ' src={singleCard?.images[0]} alt="photo" />
        <img className=' rounded-[4px] w-[150px] h-[70px] ' src={singleCard?.images[1]} alt="photo" />
        <img className=' rounded-[4px] w-[150px] h-[70px] ' src={singleCard?.images[2]} alt="photo" />
        <img className=' rounded-[4px] w-[150px] h-[70px] ' src={singleCard?.images[3]} alt="photo" />
        <img className=' rounded-[4px] w-[150px] h-[70px] ' src={singleCard?.images[1]} alt="photo" />
      </div>
      <div className=" relative ">
      {singleCard.discount !== "0%" && (
        <div className="absolute top-3 left-3 bg-[#FF6633] text-white text-xs font-bold px-2 py-1 rounded">
          -{singleCard.discount}
        </div>
      )}
        <img className='relative rounded-[4px] w-full max-w-[400px] h-[300px] sm:h-[350px] md:h-[400px] flex-shrink-0"' src={singleCard?.images[0]} alt="photo" />
      </div>
    </div>
    <div className="flex w-[50%] flex-col ">
      <div className="">
        <div className="flex  justify-between gap-[320px] ">
          <div className="flex flex-col items-center">
            <p
              className="font-[Rubik] text-[#606060] font-normal mt-4 text-[24px] leading-[150%] tracking-[0%] align-middle">
              {singleCard?.price}
            </p>
            <span
              className='font-[Rubik] text-[#606060] font-normal text-[12px] leading-[150%] tracking-[0%] align-middle '>
              Обычная цена
            </span>
          </div>
          <div className="flex flex-col items-center ">
            <p className='font-[Rubik] text-[#414141] font-[700] text-[36px]  tracking-[0%] align-middle'>
              {singleCard?.disprice}
            </p>
            <div className="flex gap-2">
              <span
                className='font-[Rubik] text-[#8F8F8F] font-normal text-[12px] leading-[150%] tracking-[0%] align-middle '>
                С картой Северяночки
              </span>
              <img src="/images/tovar/info.png" alt="photo" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-[40px] ">
      {!inCart ? (
        <button
          onClick={() => addToCart(singleCard)}
          className=" flex items-center gap-8 px-4 w-[250px] bg-[#FF7F3F] text-white font-bold text-sm py-3 mt-3 rounded-xl hover:bg-[#ff6826] transition"
        >
          <img src="/images/tovar/shopping-cart.png" alt="photo" />
          <span className='font-[Rubik] font-[400] text-[24px] '>
          В корзину
          </span>
        </button>
                ) : (
          <div className="flex items-center justify-around rounded-3xl w-[250px] h-[60px] mt-3">
            <button
              onClick={() => decrement(singleCard.id)}
              className="bg-lime-500 text-black text-xl w-1/2  py-4 px-4  hover:bg-lime-600  rounded-l-2xl"
            >
              −
            </button>
            <span className="bg-gray-200 text-black   py-4 px-4  text-lg font-medium">
              {quantity}
            </span>
            <button
              onClick={() => increment(singleCard.id)}
              className="bg-lime-500 text-black text-xl  w-1/2  py-4 px-4 rounded-r-2xl hover:bg-lime-600"
            >
              +
            </button>
          </div>

      )}
    </div>
    <div className="flex flex-col gap-2 ">
      <div className='flex py-0.5 px-3 bg-[#F3F2F1] rounded-[10px] '>
       <p className='w-[50%] '>
       Бренд
       </p>
       <p>
       ПРОСТОКВАШИНО
       </p>
      </div>
      <div className='flex py-0.5 px-3 bg-[#F3F2F1] rounded-[10px] '>
       <p className='w-[50%] '>
       Страна производителя
       </p>
       <p>
       Россия
       </p>
      </div>
      <div className='flex py-0.5 px-3 bg-[#F3F2F1] rounded-[10px] '>
       <p className='w-[50%] '>
       Упаковка
       </p>
       <p>
       180 г
       </p>
      </div>
    </div>
    </div>
  </div>
</div>
)
}

export default SinglePage;