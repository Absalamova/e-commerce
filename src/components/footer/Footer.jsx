import React from 'react'
import { Link } from "react-router-dom";
import { FaInstagram, FaVk, FaFacebookF, FaOdnoklassniki, FaPhoneAlt } from "react-icons/fa";


export default function Footer() {
  return (
     <footer className="  w-full relative  bg-[#fdf6e8] text-gray-500  text-sm py-4" >
      <div className="container mx-auto p-2 max-w-[1200px] px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-wrap justify-center gap-4 ">
          <Link className='hover:text-orange-400'>О компании</Link>
          <Link className='hover:text-orange-400' >Контакты</Link>
          <Link className='hover:text-orange-400' >Вакансии</Link>
          <Link className='hover:text-orange-400' >Статьи</Link>
          <Link className='hover:text-orange-400' >Политика обработки персональных данных</Link>
        </div>
        <div className="flex items-center gap-4">
          <FaInstagram className="text-xl hover:text-orange-400" />
          <FaVk className="text-xl  hover:text-orange-400" />
          <FaFacebookF className="text-xl hover:text-orange-400" />
          <FaOdnoklassniki className="text-xl  hover:text-orange-400" />
        </div>
        <div className="flex items-center gap-2  hover:text-orange-400">
          <FaPhoneAlt /> <span>8 800 777 33 33</span>
        </div>
      </div>
    </footer>
  )
}

