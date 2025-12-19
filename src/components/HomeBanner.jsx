import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Link } from "react-router-dom";

export default function HomeBanner() {
    const { t } = useLanguage();

    return (
        <div className="relative w-full bg-orange-50 overflow-hidden">
            {/* Background Pattern or Image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{
                    backgroundImage: "url(/images/home_page/home_background.png)",
                }}
            ></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-8">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left z-10 space-y-6">
                    <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-2 shadow-sm">
                        {t('bannerBadge') || '100% Organic Food'}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                        {t('bannerTitle') || 'Fresh Groceries Delivered'} <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 animate-gradient">
                            {t('bannerSubtitle') || 'To Your Doorstep'}
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        {t('bannerDescription') || 'Get fresh and healthy vegetables, fruits, and organic food delivered to your home in minutes. Experience the taste of quality.'}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link
                            to="/products"
                            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-xl shadow-lg hover:shadow-orange-500/30 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            {t('shopNow') || 'Shop Now'}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </Link>
                        <Link
                            to="/about"
                            className="px-8 py-3 bg-white text-gray-700 font-bold rounded-xl shadow-md hover:bg-gray-50 border border-gray-200 hover:border-gray-300 transition-all duration-300"
                        >
                            {t('learnMore') || 'Learn More'}
                        </Link>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="flex-1 w-full max-w-md md:max-w-xl z-10 relative mt-8 md:mt-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-200 to-red-200 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
                    <img
                        src="/images/home_page/bread_basket.png"
                        alt="Fresh Groceries"
                        className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
}
