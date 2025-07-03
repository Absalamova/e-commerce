import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';

const LOCATIONS = [
    {
        label: "п.Щельюр",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13337.481346143735!2d53.17692656182611!3d65.30045109420705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4472361e784c1655%3A0x661864025b65a5e0!2sVertep%2C%20Komi%20Republic%2C%20Russia%2C%20169473!5e0!3m2!1sen!2s!4v1750993426944!5m2!1sen!2s",
    } ,
    {
        label: "д.Вертеп",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13337.481346143735!2d53.17692656182611!3d65.30045109420705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4472361e784c1655%3A0x661864025b65a5e0!2sVertep%2C%20Komi%20Republic%2C%20Russia%2C%20169473!5e0!3m2!1sen!2s!4v1750993426944!5m2!1sen!2s",
    },
    {
        label: "с.Краснобор",
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13341.641996514929!2d53.26930256178741!3d65.29223009386132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x447235dd2ca590b3%3A0xc633232da326cfaf!2sKrasnobor%2C%20Komi%20Republic%2C%20Russia%2C%20169473!5e0!3m2!1sen!2s!4v1750993513155!5m2!1sen!2s",
    },
    {
        label: "д.Диор",
        mapEmbed:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.042184853451!2d24.148483576827214!3d56.96520987355699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecf916809842b%3A0x600d6b91fad66913!2z0JTQvtC60YLQvtGAINCU0LjQvtGA0LTQuNGH0YPQug!5e0!3m2!1sen!2s!4v1750993571145!5m2!1sen!2s",
    },
];

export default function StoresMap() {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef(null);

    const handleTabClick = (index) => {
        setActiveIndex(index);
        swiperRef.current?.slideTo(index);
    };

    return (
        <div className=" py-14 max-w-[1200px] mx-auto">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Наши магазины
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap gap-3 mb-6">
                    {LOCATIONS.map((loc, index) => (
                        <button
                            key={index}
                            onClick={() => handleTabClick(index)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition duration-200 ${activeIndex === index
                                    ? "bg-green-600 text-white"
                                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                }`}
                        >
                            {loc.label}
                        </button>
                    ))}
                </div>

                {/* Swiper with synced state */}
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    className="rounded-lg overflow-hidden"
                >
                    {LOCATIONS.map((loc, index) => (
                        <SwiperSlide key={index}>
                            <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
                                <iframe
                                    src={loc.mapEmbed}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={loc.label}
                                ></iframe>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
