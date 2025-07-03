import React from "react";

export default function HomeBanner() {
    return (
        <div
            className="w-full bg-cover bg-center "
            style={{
                backgroundImage: "url(/images/home_page/home_background.png)",
            }}
        >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-around ">
                {/* Image */}
                <img
                    src="/images/home_page/bread_basket.png"
                    alt="Groceries"
                    className="w-[400px] md:w-[400px] object-cover"
                />

                {/* Text */}
                <h1 className="text-2xl md:text-5xl font-bold text-gray-900 text-center md:text-left">
                    Доставка бесплатно от <span className="text-black">1000 ₽</span>
                </h1>
            </div>
        </div>
    );
}
