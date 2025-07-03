import React from "react";
import severCard from "../assets/severCard.png";
import basketImg from "../assets/basketImg.png";

export default function SpecialOffers() {
  return (
    <div className=" py-14 max-w-[1200px] mx-auto">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
          Специальные предложения
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          
          <div className="bg-gradient-to-r from-[#fad0c4] to-[#ffd1ff] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                Оформите карту <br />
                «Северяночка»
              </h3>
              <p className="text-sm md:text-base text-gray-700 mt-2">
                И получайте бонусы при покупке <br /> в магазинах и на сайте
              </p>
            </div>
            <img
              src={severCard}
              alt="Severyanochka Card"
              className="w-41 md:w-46 ml-4 transition-transform duration-300 hover:scale-110"
            />
          </div>

          
          <div className="bg-green-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex items-center">
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800 leading-snug">
                Покупайте <br />
                акционные товары
              </h3>
              <p className="text-sm md:text-base text-gray-700 mt-2">
                И получайте вдвое больше бонусов
              </p>
            </div>
            <img
              src={basketImg}
              alt="Basket"
              className="w-34 md:w-36 ml-4 transition-transform duration-300 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
