import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { products } from '../../products-data'
import img1 from "../../../public/images/catolog/category1.png"
import img2 from "../../../public/images/catolog/category2.png"
import img3 from "../../../public/images/catolog/category3.png"
import img4 from "../../../public/images/catolog/category4.png"
import img5 from "../../../public/images/catolog/category5.png"
import img6 from "../../../public/images/catolog/category6.png"
import img7 from "../../../public/images/catolog/category7.png"
import img8 from "../../../public/images/catolog/category8.png"
import img9 from "../../../public/images/catolog/category9.png"
import img10 from "../../../public/images/catolog/category10.png"
import img11 from "../../../public/images/catolog/category11.png"
import img12 from "../../../public/images/catolog/category12.png"
import img13 from "../../../public/images/catolog/category13.png" 
export default function Category() {
  return (
    <><div className='bg-[#FFF3E9] py-6'>
    <div className='container mx-auto '>
    <section className=''>
      <div>
        <Link className='hover:text-gray-500' to="/">Главная</Link>
        <span>  &gt;  </span>
        <Link className='text-gray-500' to="/category">Каталог</Link>
      </div>
    </section>
    <section>
      <div>
        <h1 className='text-4xl font-bold mb-6'>Каталог</h1>
        <div>
          <div className='flex flex-wrap justify-around gap-3'>
            <NavLink to="/category/1"><div className='relative rounded-lg overflow-hidden shadow-md '><img className='h-[20vh] w-full' src={img1} alt="" /> <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent pt-20 p-3 text-white text-sm font-semibold hover:from-red-400">
            Молоко, сыр, яйцо
            </div></div></NavLink>
            <NavLink to="/category/2"><div className='relative rounded-lg overflow-hidden shadow-md '><img className='h-[20vh]' src={img2} alt="" /><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent pt-20 p-3 text-white text-sm font-semibold hover:from-red-400">
            Хлеб
            </div></div></NavLink>
            <NavLink to="/category/3"> <div className='relative rounded-lg overflow-hidden shadow-md '><img className='h-[20vh]' src={img3} alt="" /><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent pt-20 p-3 text-white text-sm font-semibold hover:from-red-400">
            Фрукты и овощи
            </div></div></NavLink>
            <NavLink to="/category/4"> <div className='relative rounded-lg overflow-hidden shadow-md '><img className='h-[20vh]' src={img4} alt="" /><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent pt-20 p-3 text-white text-sm font-semibold hover:from-red-400">
            Замороженные продукты
            </div></div></NavLink>
            <NavLink to="/category/5"> <div className='relative rounded-lg overflow-hidden shadow-md '><img className='h-[20vh]' src={img5} alt="" /><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent pt-20 p-3 text-white text-sm font-semibold hover:from-red-400">
            Напитки
            </div></div></NavLink>
            <NavLink to="/category/6"> <div className='relative rounded-lg overflow-hidden shadow-md '><img className='h-[20vh]' src={img6} alt="" /><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent pt-20 p-3 text-white text-sm font-semibold hover:from-red-400">
            Кондитерские изделия
            </div></div></NavLink>
            <NavLink to="/category/7"> <div className='relative rounded-lg overflow-hidden shadow-md '><img className='h-[20vh]' src={img7} alt="" /><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent pt-20 p-3 text-white text-sm font-semibold hover:from-red-400">
            Чай, кофе
            </div></div></NavLink>
            <NavLink to="/category/8"><div className='relative rounded-lg overflow-hidden shadow-md '><img className='h-[20vh]' src={img8} alt="" /><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent pt-20 p-3 text-white text-sm font-semibold hover:from-red-400">
            Бакалея
            </div></div></NavLink>
            <NavLink to="/category/9"><div className='relative rounded-lg overflow-hidden shadow-md '><img className='h-[20vh]' src={img9} alt="" /><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent pt-20 p-3 text-white text-sm font-semibold hover:from-red-400">
            Здоровое питание
            </div></div></NavLink>
            <NavLink to="/category/10"><div className='relative rounded-lg overflow-hidden shadow-md '><img className='h-[20vh]' src={img10} alt="" /><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent pt-20 p-3 text-white text-sm font-semibold hover:from-red-400">
            Зоотовары
            </div></div></NavLink>
            <NavLink to="/category/11"><div className='relative rounded-lg overflow-hidden shadow-md '><img className='h-[20vh]' src={img11} alt="" /><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent pt-20 p-3 text-white text-sm font-semibold hover:from-red-400">
            Детское питание
            </div></div></NavLink>
            <NavLink to="/category/12"><div className='relative rounded-lg overflow-hidden shadow-md '><img className='h-[20vh]' src={img12} alt="" /><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent pt-20 p-3 text-white text-sm font-semibold hover:from-red-400">
            Мясо, птица, колбаса
            </div></div></NavLink>
            <NavLink to="/category/13"><div className='relative rounded-lg overflow-hidden shadow-md '><img className='h-[20vh]' src={img13} alt="" /><div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-600 to-transparent pt-20 p-3 text-white text-sm font-semibold hover:from-red-400">
            Непродовольственные товары
            </div></div></NavLink>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
    <div>
    </div>
    </div>
    </div>
    </>
  )
}
